/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const path = require('path')

// Express
const express = require('express')
const app = express();
app.use(express.static(__dirname + "/quarantine/build"));
// const bodyParser = require('body-parser')
// app.use(bodyParser.json());

// Mongo and Mongoose
const { ObjectID } = require('mongodb')
const { mongoose } = require('./mongoose');
const { Post, Notification } = require('./schema');  // TODO: update this
const { Collection } = require('mongoose');

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
    log("sending index.html")
    // send index.html
    res.sendFile(path.join(__dirname + "/quarantine/build/index.html"));
});

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})
