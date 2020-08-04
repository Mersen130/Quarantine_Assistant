/* Quanrantine mongoose model */
const mongoose = require('mongoose')

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

const Post = mongoose.model('Post', PostSchema);
const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = { Post, Notification }