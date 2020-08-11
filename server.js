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
const { Post, Notification, User, QuanrantineProgress, Activities} = require('./models/schema');  // TODO: update this
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
            expires: 50000,
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
        posterID: [session.user],
        postContent: req.body.contents,
        postTime: req.body.times,
        numLikes: req.body.likes,
        tags: req.body.tags,
    });
    log(post)
    post.save().then((result) => {
        res.send({ currentPost: post._id, posterType: req.session.userType, posterId: req.session.user })
    }).catch((error) => {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    })
    // TODO: update user profile
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
        const newPosterId = post.posterID.push(session.user);
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
            res.send({ posterType: req.session.userType, posterId: req.session.user });
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

app.get("/profile", mongoChecker, authenticate, (req, res) => {
    /// req.params has the wildcard parameters in the url, in this case, id.
    // log(req.params.id)
    const id = session.user;

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
                res.send(user);
            }
        })
        .catch(error => {
            res.status(500).send(); // server error
        });
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
    User.findUser(userName, password).then(user =>{
        req.session.user = user._id;
        req.session.userName = user.userName;
        req.session.userType = user.userType;
        res.send({
                    currentUserName:user.userName,
                    currentUserType:user.userType
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
            res.send({
                currentUserName:result.userName,
                currentUserType:result.userType
                });
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

// app.post("/users/resetPswd",(req, res)=>{
//     const userEmail = req.body.email;
//     User.findOne({
//         email:req.body.email
//     }).then(user=>{
//         if(user){
//             const email=require('nodemailer');
//         }
//     })
// })
app.get("/users/check-session",(req, res) =>{
    if(req.session.user){
        res.send({
            currentUserName: req.session.userName,
            currentUserType:req.session.userType
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



// Setting up a static directory for the files in /public
// using Express middleware.
// Don't put anything in /public that you don't want the public to have access to!
/* KEEP THIS BLOCK AT THE BOTTOM */
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/SignIn","/SignUp", "/qa", "questionnaire", "qaadmin", "profile"];
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
