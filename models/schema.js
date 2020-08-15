/* Quanrantine mongoose model */
const mongoose = require('mongoose')
var random = require('mongoose-simple-random');
const validator = require('validator');
const { ObjectID } = require('mongodb');
const bcrypt = require('bcryptjs')

// replies are embedded in Post model
const PostSchema = new mongoose.Schema({
    // first element in each array is the main post info
    // the rests are replies
	posterId: {
		type: [mongoose.Schema.ObjectId],
		required: true,
    },
    postContent: {
        type: [String],
        required: true,
    },
    postTime: {
        type: [Date],
        required: true,
    },
    numLikes: {
        type: [Number],
        default: 0,
    },
    tags: {
        type: [String],
    },
});

const NotificationSchema = new mongoose.Schema({
    receiverId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    notificationQueue: {
        type: [String]
    },
    numUnread: {
        type: Number,
        default: 0,
    }
});

const ActivitiesSchema = new mongoose.Schema({
    activityTile:{
        type:String,
        required:true
    },
    activityType:{
        type:String,
        required:true
    },
    activityDescription:{
        type:String,
        required:true
    },
    addTime:{
        type:Date,
        default:Date.now
    }
});
const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        minlength:1,
        unique:true
    },
    email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		// validate: {
		// 	validator: validator.isEmail,   // custom validator
		// 	message: 'Not valid email'
		// }
	}, 
    password: {
		type: String,
		required: true
    },
    userType:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    gender:{
        type: String
    },
    selfDescription:{
        type:String
    },

    region:{
        type:String
    },
    docCertificate:{
        type:String
    },


    posts: {
        type: [ObjectID],
        default: []

    quarantineStartDate:{
        type:Date,
        default:Date.now,
        required:true

    },
//     posts:[PostSchema],
    notifications:[NotificationSchema],
    activities:[ActivitiesSchema]
});

const TipsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }
});
const NewsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }
})





//helper function for user that can use in the session
//-------------------------------------------------------
//find a user by userName and password
UserSchema.statics.findUser = function(userName, password) {
	const user = this
	return user.findOne({ userName: userName}).then((u) => {
        console.log(u)
		if (!u) {
			return Promise.reject()
		}
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, u.password, (err, result) => {
				if (result) {
					resolve(u)
				} else {
					reject()
				}
			})
		})
	})
};

//find a random tips in the database
TipsSchema.statics.findRandom = function(cb){
    this.count(function(error, count){
        if(error){
            return cb(error);
        }
        const rand = Math.floor(Math.random()*count);
        this.findOne().skip(rand).exec(callback);
    }.bind(this)
    );
};
TipsSchema.plugin(random);

//find a random posts in the database
NewsSchema.statics.findRandom = function(cb){
    this.count(function(error, count){
        if(error){
            return cb(error);
        }
        const rand = Math.floor(Math.random()*count);
        this.findOne().skip(rand).exec(callback);
    }.bind(this)
    );
};
NewsSchema.plugin(random);


//middleware hashing password and save it 
UserSchema.pre('save', function(next){
    const user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hashedPswd) =>{
                user.password = hashedPswd
                next()
            })
        })
    }
    else{
        next()
    }

})


const Post = mongoose.model('Post', PostSchema);
const Notification = mongoose.model('Notification', NotificationSchema);
const User = mongoose.model('User', UserSchema);

const Activities = mongoose.model('Activities', ActivitiesSchema);
const Tips = mongoose.model('Tips', TipsSchema);
const News = mongoose.model('News', NewsSchema);


module.exports = { Post, Notification, User, Activities,Tips, News}

