/* Quanrantine mongoose model */
const mongoose = require('mongoose')

const ReplySchema = new mongoose.Schema({
	replierId: {
		type: mongoose.Schema.ObjectId,
		required: true,
    },
    replyContent: {
        type: String,
        required: true,
    },
    replyTime: {
        type: Date,
        required: true,
    },
    numLikes: {
        type: Number,
        default: 0,
    },
});

// replies are embedded in Post model
const PostSchema = new mongoose.Schema({
	posterId: {
		type: mongoose.Schema.ObjectId,
		required: true,
    },
    postContent: {
        type: String,
        required: true,
    },
    postTime: {
        type: Date,
        required: true,
    },
    numLikes: {
        type: Number,
        default: 0,
    },
    replies: [ReplySchema]
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

const Post = mongoose.model('Post', PostSchema);
const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = { Post, Notification }