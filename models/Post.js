 const mongoose = require('mongoose');

 const postSchema = new mongoose.Schema({

        title: String,
        desc: String,
        createdAt: {
            type: Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }

 });




    const Post = mongoose.model('Post', postSchema);
    module.exports = Post;
