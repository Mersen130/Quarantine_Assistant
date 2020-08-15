/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const path = require('path')

// Express
const express = require('express')
const app = express();
app.use(express.static(__dirname + "/client/quarantine/build"));
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// Mongo and Mongoose
const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose');

const { Post, Notification, User,Activities,Tips, News} = require('./models/schema');  // TODO: update this

const { Collection } = require('mongoose');



// helpers & middlewares

// check if mongoose is connected
const mongoChecker = (req, res, next) => {
	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} else {
		next()	
	}	
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
	if (req.session.user) {
		User.findById(req.session.user).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((error) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")

	}

}



// check if mongo is disconnected
function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError";
}

// check if id is valid ObjectID
function checkObjctId(id) {
    return ObjectID.isValid(posterID);
}

//Session
const session = require("express-session");
const { promises } = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret:"quarantine",
        resave:false,
        saveUninitialized:false,
        cookie:{
            expires: 500000,
            httpOnly:true
        }

    })
);



// Qixin's API

// get all posts
app.get("/post", mongoChecker, authenticate, (req, res) => {
    Post.find().then((posts) => {
        res.send([ posts, {userName: req.session.userName, userType: req.session.userType, userId: req.session.user} ]);
    })
    .catch((err) => {
        log(err);
        res.status(500).send("Internal Server Error");
    });
})


// Save a post to database
/* const data = {
      names: ["user1"],
      contents: [post.value + " " + tags.value],
      times: [new Date()],
      likes: [0],
      tags: [tags.value],
    }*/
app.post("/post", mongoChecker, authenticate, (req, res) => {

    const posterID = req.params.posterId;
    if (!checkObjctId(posterID)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}
    log(posterID)
    const post = new Post({
        posterID: [req.session.user],
        postContent: req.body.contents,
        postTime: req.body.times,
        numLikes: req.body.likes,
        tags: req.body.tags,
    });
    log(post)
    post.save().then((result) => {
        return result._id;
    })
    .then(postId =>{
        User.findById(req.session.user).then(user => {
            if (!user){
                res.status(404).send("resource not found")
            } else{
                const fieldsToUpdate = { posts: user.posts.push(postId) };
                return User.findOneAndUpdate({id: postId}, { $set: fieldsToUpdate }, {new: true, useFindAndModify: false});
            }
        })
        .then(user => {
            if (!user){
                res.status(404).send("resource not found")
            } else{
                res.send({ currentPost: post._id, posterType: req.session.userType, posterId: req.session.user })
            }
        }).catch(error => {
            if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
                res.status(500).send('Internal server error')
            } else {
                res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
            }
        });
    })
    .catch((error) => {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    })
});


//leave a reply
app.put("/reply/:postId", mongoChecker, authenticate, (req, res) => {
    const postId = req.params.postId;

    if (!checkObjctId(postId)){
        res.status(404).send('Resource not found');
    }
    Post.findById(postId)
    .then( post => {
        if (!post){
            res.status(404).send("post not found");
            Promise.reject();
        }
        const newPosterId = post.posterID.push(req.session.user);
        const newPost = new Post({
            posterID: newPosterId,
            postContent: req.body.contents,
            postTime: req.body.times,
            numLikes: req.body.likes,
            tags: req.body.tags,
        });
        return Post.findOneAndReplace({id: postId}, post, {new: true, useFindAndModify: false});
    })
    .then(post => {
        if (!post){
            res.status(404).send("post not found");
        } else{
            return post._id;
        }
    })
    .then(postId =>{
        User.findById(req.session.user).then(user => {
            if (!user){
                res.status(404).send("resource not found")
            } else{
                for (const existPost of user.posts){
                    if (existPost == postId){
                        return user;
                    }
                }
                const fieldsToUpdate = { posts: user.posts.push(postId) };
                return User.findOneAndUpdate({id: postId}, { $set: fieldsToUpdate }, {new: true, useFindAndModify: false});
            }
        })
        .then(user => {
            if (!user){
                res.status(404).send("resource not found")
            } else{
                res.send({ posterType: req.session.userType, posterId: req.session.user });
            }
        }).catch(error => {
            if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
                res.status(500).send('Internal server error')
            } else {
                res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
            }
        });
    })
    .catch(error => {
        if (isMongoError(error)){
            res.status(500).send("Internal server error");
        } else{
            log(error);
            res.status(400).send("Bad Request");
        }
    })
});


// Like a Post
app.patch("/post/like/:postId",  mongoChecker, authenticate, (req, res) => {
    const postId = req.params.postId;

    if (!checkObjctId(postid)){
        res.status(404).send('Resource not found');
    }

    Post.findById(postId)
    .then( post => {
        if (!post){
            res.status(404).send('post not found');
            return Promise.reject();
        } else{
            return post.numLikes;
        }
    })
    .then( numLikes => {
        numLikes[req.body.contentIndex] += req.body.likeNum;
        const fieldsToUpdate = { numLikes: numLikes };
        return Post.findOneAndUpdate({id: postId}, { $set: fieldsToUpdate }, {new: true, useFindAndModify: false});
    })
    .then(post => {
        if (!post){
            res.status(404).send();
        } else{
            res.send();
        }
    })
    .catch(error => {
        if (isMongoError(error)){
            res.status(500).send("Internal server error");
        } else{
            log(error);
            res.status(400).send("Bad Request");
        }
    })
});


// Delete a post
app.delete("/post/:postId", mongoChecker, authenticate, (req, res) => {
    const postId = req.params.postId;
    
    if (!checkObjctId(postId)){
        res.status(404).send('Resource not found');
    }

    Post.findByIdAndDelete(postId)
    .then( post => {
        if (!post){
            res.status(404).send('post not found');
        } else{
            return User.findById(req.session.user);
        }
    })
    .then( user => {
        if (!user){
            res.status(404).send("resource not found")
        } else{
            const posts = user.posts;
            for (let currPostId = 0; currPostId < posts.length; currPostId++){
                if (posts[currPostId].toString() === postId.toString()){
                    posts.splice(currPostId, 1);
                    break;
                }
            }
            return User.findOneAndUpdate({_id: req.session.user}, { $set: { posts: posts } }, {new: true, useFindAndModify: false});
        }
    })
    .then(user => {
        res.send();
    })
    .catch(error => {
        if (isMongoError(error)){
            res.status(500).send("Internal server error");
        } else{
            log(error);
            res.status(400).send("Bad Request");
        }
    })
});


// Delete a reply
app.patch("/reply/:postId", mongoChecker, authenticate, (req, res) => {
    const postId = req.params.postId;

    if (!checkObjctId(postid)){
        res.status(404).send('Resource not found');
    }

    Post.findById(postId)
    .then( post => {
        if (!post){
            res.status(404).send('post not found');
            return Promise.reject();  // todo: debug this
        } else{
            return post.contents;
        }
    })
    .then( contents => {
        contents[req.body.contentIndex] = "[content deleted by admin/author]";
        const fieldsToUpdate = { contents: contents };
        return Post.findOneAndUpdate({id: postId}, { $set: fieldsToUpdate }, {new: true, useFindAndModify: false});
    })
    .then(post => {
        if (!post){
            res.status(404).send();
        } else{
            res.send();
        }
    })
    .catch(error => {
        if (isMongoError(error)){
            res.status(500).send("Internal server error");
        } else{
            log(error);
            res.status(400).send("Bad Request");
        }
    })
});


// Update profile
app.post("/profile/:id", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});

// get user info
app.get("/profile/:id", mongoChecker, authenticate, (req, res) => {
    /// req.params has the wildcard parameters in the url, in this case, id.
    let id = req.params.id;
    if (id == "me"){
        id = req.session.user;
    } else{
        if (!checkObjctId(id)){
            res.status(404).send('Resource not found');
        }
    }

    // Good practise: Validate id immediately.
    if (!ObjectID.isValid(id)) {
        res.status(404).send(); // if invalid id, definitely can't find resource, 404.
        return;
    }

    // Otherwise, findById
    User.findById(id)
        .then(user => {
            if (!user) {
                res.status(404).send(); // could not find this student
            } else {

                const RecentAct = [];  // an array storing activities and posts
                let p = Promise.resolve();
                for (let i = 0; i < user.posts.length; i++) {
                    p = p.then(_ => Post.findById(user.posts[i]))
                    .then(post => {
                        if (post) {
                            RecentAct.push({ type: "post", contentSketch: post.postContent[0], time: post.postTime[0]})
                            // log("here1", RecentAct)
                        }
                        return Promise.resolve();
                    })
                    .catch(error => {
                        // log("something wrong internal")
                        res.status(500).send("server error");
                    });
                    // log("here1.3", p)
                }
                // log("here1.5")
                for (let i = 0; i < user.activities.length; i++) {
                    p = p.then(_ => Post.findById(user.activities[i]))
                    .then(act => {
                        if (act) {
                            RecentAct.push({ type: "activity", title: act.activityTitle})
                            // log("here2")
                        }
                        // log("here3")
                        return Promise.resolve();
                    })
                    .catch(error => {
                        // log("something wrong internal")
                        res.status(500).send("server error");
                    });
                }
                // log("here3.6", p)
                // p.then(e => log("profile", [user, RecentAct])).catch(log("something wrong"));
                // log("here3.7")

                p.then( e => res.send([user, RecentAct])).catch(e => res.status(400).send("bad request"));

            }
        })
        .catch(error => {
            res.status(500).send(); // server error
        });
});

// update user info
app.patch("/profile", mongoChecker, authenticate, (req, res) => {

    log(req.body)
    User.findById(req.session.user)
    .then( user => {
        if (!user){
            res.status(404).send('user not found');
            return Promise.reject();
        } else{
            return user;
        }
    })
    .then( user => {
        return User.findOneAndUpdate({id: req.session.user}, { $set: req.body }, {new: true, useFindAndModify: false});
    })
    .then(user => {
        if (!user){
            res.status(404).send();
        } else{
            res.send();
        }
    })
    .catch(error => {
        if (isMongoError(error)){
            res.status(500).send("Internal server error");
        } else{
            log(error);
            res.status(400).send("Bad Request");
        }
    })
});

// =================

// Yifei's API
app.post("/users", (req, res) => {
    log(req.body);

    // Create a new user
    const user = new User({
        userName: req.body.userName,
        userType:req.body.userType,
        email:req.body.email,
        password: req.body.password
    });

    // Save the user
    user.save().then(
        user => {
            res.send(user);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

app.post("/users/signIn",(req, res) =>{
    const userName = req.body.userName;
    const password = req.body.password;
    log(userName, password)
    User.findUser(userName, password).then(user =>{
        
        req.session.user = user._id;
        req.session.userName = user.userName;
        req.session.userType = user.userType;
        req.session.quarantineStartDate = user.quarantineStartDate
        res.send({
                    currentUserName:user.userName,
                    currentUserType:user.userType,
                    quarantineStartDate:user.quarantineStartDate
                });
    })
    .catch(error=>{
        res.status(400).send()
    });
});
app.post("/users/signUp",(req,res) =>{
    log(req.body);
    let userT;
    let user;
    // const current = new Date();
    // const currentDate=current.getMonth()+1 +"/" +current.getDate()+"/"+current.getFullYear();
    if(!req.body.userType){
        ! req.body.docCertificate ? userT = "normal_user" : userT = "doctor"
        user = new User({
            userName: req.body.userName,
            userType:userT,
            email:req.body.email,
            password: req.body.password,
            docCertificate:req.body.docCertificate
        })
    }
    else{
        user = new User({
            userName: req.body.userName,
            userType:req.body.userType,
            email:req.body.email,
            password: req.body.password,
            docCertificate:req.body.docCertificate
        });
    }
    // Save the user
    user.save().then(
        result => {
            req.session.user = result._id;
            req.session.userName = result.userName;
            req.session.userType = result.userType;
            req.session.quarantineStartDate = result.quarantineStartDate;
            res.send({
                currentUserName:result.userName,
                currentUserType:result.userType,
                quarantineStartDate:result.quarantineStartDate
                });
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

app.post("/users/resetPswd",(req, res)=>{
    const userEmail = req.body.email;
    User.findOne({
        email:req.body.email
    }).then(user=>{
        if(user){
           res.send(user);
        }
    })
})

app.put("/users/resetPswd", (req, res)=>{
  User.findOneAndUpdate(
        {email:req.body.email},
        {password:req.body.password},{
        new:true
    })
    .then(updated=>{
        if(updated){
            updated.save()
            .then(res.send({user:updated}))
            
        }
    })
    .catch(error=>{
        res.status(404).send(error);
    })

})



app.get("/users/check-session",(req, res) =>{
    if(req.session.user){
        res.send({
            currentUserName: req.session.userName,
            currentUserType:req.session.userType,
            quarantineStartDate:req.session.quarantineStartDate
        })
    }
    else{
        res.status(401).send();
    }
});

//logOut and destroy the session
app.get("/users/logout",(req,res) =>{
    req.session.destroy(err =>{
        if(err){
            res.status(500).send(error);
        }
        else{
            res.send()
        }
    });
});
//middleware to authenticate the current user is admin
const adminAuth = (req, res, next) =>{
    if(req.session.user){
        User.findById(req.session.user).then((user) =>{
            if(!user){
               return Promise.reject()
            }
            else{
                if(user.userType !== "admin"){
                    return Promise.reject()
                }
                else{
                    req.user = user
                    next()
                }
            }
        })
        .catch((error) =>{
            res.status(401).send(error +" Unauthorized")
        })
    }
    else{
        res.status(401).send("Unauthorized")
    }
}
//get all users
app.get("/normalUsers", adminAuth,(req, res) =>{
    User.find({
        userType : "normal_user"
    }).then(normalUsers =>{
        res.send({normalUsers});
    },
    error =>{
        res.status(500).send(error);
    }
    )
});
//get all doctors
app.get("/doctors", adminAuth,(req, res) =>{
    User.find({
        userType:"doctor"
    }).then(doctors =>{
        res.send({doctors});
    }),
    error=>{
        res.status(500).send(error);
    }
});

//delete user by id
app.delete("/user/:id", adminAuth, (req, res) =>{
    const id= req.params.id;
    console.log(id)
    if(!ObjectID.isValid(id)){
        res.status(404).send("Recources is not found")
        return;
    }
    User.findByIdAndRemove(id)
        .then(user =>{
            if(!user){
                res.status(404).send();
            }
            else{
                User.find({
                    userType:user.userType
                }).then(
                    (users)=>{
                    res.send({users});
                    }
                );
            }
        })
        .catch((error) =>{
            res.status(500).send(error);
        })
});
//add an activitiy in to uses's list
app.post("/users/activities/:id",authenticate,(req, res) =>{
    const actId = req.params.id;
    const userId = req.user._id;
    if(!ObjectID.isValid(actId)){
        res.status(404).send("Recources is not found")
        return;
    }
    Activities.findById(actId).then(
        act=>{
            if(!act){
                res.status(404).send("activity not found");
            }
            else{
                User.findById(userId).then(
                    user=>{
                        user.activities.push({
                            activityTile:act.activityTile,
                            activityType:act.activityType,
                            activityDescription:act.activityDescription
                        });
                        user.save().then(
                            (updatedUser)=>{
                                res.send({updatedUser});
                            }
                        );
                    }
                ),
                error=>{
                    res.send(error);
                }

            }
        }
    ),
    error=>{
        res.send(error);
    }
});

//delete an activitiy form the user's list
app.delete("/users/activities/:id", authenticate,(req, res)=>{
    const actId = req.params.id;
    const userId = req.user._id;
    User.findById(userId).then(
        user=>{
            user.activities.id(actId).remove();
            user.save().then(
                u=>{
                    res.send({updatedUser:u});
                }
            );        
        }
    )
    .catch(error=>{
        res.send(error);
    });
    
});

//add an activitiy in to the database
app.post("/activities", (req, res)=>{
    const act = new Activities({
        activityTile:req.body.activityTile,
        activityType:req.body.activityType,
        activityDescription:req.body.activityDescription
    });
    act.save().then(
        act=>{
            res.send(act);
        },
        error => {
            res.status(400).send(error); 
        }
    );
});
//get all activities in the database
app.get("/activities", (req, res)=>{
    Activities.find().then(
        (activities)=>{
            res.send({activities});
        },
        error=>{
            res.status(500).send(error);
        }
    );
});
//get all users' activities
app.get("/users/activities", authenticate,(req, res)=>{
    const userId = req.user._id;
    User.findById(userId).then(
        user=>{
            res.send({
                activities: user.activities
            });
        },
        error=>{
            res.status(500).send(error);
        }
    );
});

//add tips to database
app.post("/tips",(req,res) =>{
    const tips= new Tips({
        title:req.body.title,
        content:req.body.content
    });
    tips.save().then(
        (tip)=>{
            res.send({tip});
        },
        error=>{
            res.status(404).send(error);
        }
    );
});

//get a random tips from database
app.get("/tips",(req, res)=>{
    Tips.findOneRandom(
        function(err, tip){
            res.send({tip:tip});
        }
    );
});


//add news to database
app.post("/news",(req,res) =>{
    const news= new News({
        title:req.body.title,
        content:req.body.content
    });
    news.save().then(
        (news)=>{
            res.send({news});
        },
        error=>{
            res.status(404).send(error);
        }
    );
});

//get a random news from database
app.get("/news",(req, res)=>{
    News.findOneRandom(
        function(err, news){
            res.send({news:news});
        }
    );
});



// Setting up a static directory for the files in /public
// using Express middleware.
// Don't put anything in /public that you don't want the public to have access to!
/* KEEP THIS BLOCK AT THE BOTTOM */
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/SignIn","/SignUp", "/qa", "/questionnaire", "/qaAdmin", "/UserProfile", "/DoctorProfile", "AdminProfile", "/dashboard", "doctordashboard", "admindashboard"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }
    // send index.html
    res.sendFile(path.join(__dirname + "/client/quarantine/build/index.html"));
});

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})
