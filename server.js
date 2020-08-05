/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const path = require('path')

// Express
const express = require('express')
const app = express();
app.use(express.static(__dirname + "/quarantine/build"));
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// Mongo and Mongoose
const { ObjectID } = require('mongodb')
const { mongoose } = require('./mongoose');
const { Post, Notification, User, QuanrantineProgress, Activities} = require('./schema');  // TODO: update this
const { Collection } = require('mongoose');

// helpers
function checkMongooseConnection(){
    return mongoose.connection.readyState == 1;
}

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError";
}

function checkObjctId(id) {
    return ObjectID.isValid(posterID);
}

//Session
const session = require("express-session");
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
app.get("/post", (req, res) => {
    // TODO: check user credential
    if (!checkMongooseConnection()) {
        res.status(500).send('Internal server error');
        return;
    }
    Post.find().then((posts) => {
        res.send({ posts });
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
app.post("/post/:posterId", (req, res) => {
    // TODO: check user credential
    if (!checkMongooseConnection()) {
        res.status(500).send('Internal server error');
        return;
    }
    const posterID = req.params.posterId;
    if (!checkObjctId(posterID)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}
    log(posterID)
    const post = new Post({
        posterID: [posterID],
        postContent: req.body.names,
        postTime: req.body.times,
        numLikes: req.body.likes,
        tags: req.body.tags,
    });
    log(post)
    post.save().then((result) => {
        res.send(post._id)
    }).catch((error) => {
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    })
    // TODO: update profile
});


//leave a reply
app.post("/reply/:postId", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});

// Delete a post
app.delete("/post/:id", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});


// Delete a reply
app.delete("/reply/:id", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});


// Like a Post
app.patch("/post/like/:id", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});


// Like a reply
app.patch("/reply/like/:id", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});


// Update profile
app.post("/profile/:id", (req, res) => {
    // TODO
    res.status(500).send("internal server error");
});


// =================

// Yifei's API

//login and creat a session for the current user
app.post("/users/login",(req, res) =>{
    const userName = req.body.userName;
    const password = req.body.password;
    User.findUser(userName, password).then(user =>{
        req.session.user = user._id;
        req.session.userName = user.userName;
        res.send({currentLogedIn:user.userName});
    })
    .catch(error=>{
        res.status(400).send()
    });
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
    const goodPageRoutes = ["/", "/qa", "questionnaire", "qaadmin", "profile"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }
    // send index.html
    res.sendFile(path.join(__dirname + "/quarantine/build/index.html"));
});

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})
