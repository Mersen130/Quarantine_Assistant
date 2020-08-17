'use strict';
// ASK QIXIN UPON CHANGING THIS FILE
const mongoose = require('mongoose');

// ASK QIXIN UPON CHANGING THIS FILE
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://qixin:mymongo@cluster0.htkva.mongodb.net/QuarantineAPI?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

// ASK QIXIN UPON CHANGING THIS FILE
module.exports = { mongoose }

// after deployed, in terminal: 
// heroku config:set MONGODB_URI='mongodb+srv://qixin:mymongo@cluster0.htkva.mongodb.net/QuarantineAPI?retryWrites=true&w=majority'