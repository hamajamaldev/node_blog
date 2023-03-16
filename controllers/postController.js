const Post = require('../models/Post');

exports.index = async (req, res) => {
    // const posts = await Post.find();
    // populate with user name
     const posts = await Post.find().populate({
        path: 'user',
        select: 'name'
     });


    res.render('posts/index', { posts });
}

// create function redirects to the create page
exports.create = (req, res) => {
    res.render('posts/create');
}

// store function stores the data in the database
exports.store = async (req, res) => {
    const post = new Post();
    post.title = req.body.title;
    post.desc = req.body.desc;
    post.user = '640988d3453d3b2fcd306aef';
    await post.save();
    res.redirect('/post');
}

// edit function redirects to the edit page
exports.edit = async (req, res) => {

    const post = await Post.findById(req.params.id);
    res.render('posts/edit', { post });
}

// update function updates the data in the database
exports.update = async (req, res) => {

    
    const { id } = req.params;
    const post  = await Post.findById(id);
    post.title = req.body.title;
    post.desc = req.body.desc;
    await post.save();
    res.redirect('/post');
}

// destroy function deletes the data from the database
exports.destroy = async (req, res) => {

    // delete the post
    await Post.findByIdAndDelete(req.params.id);

    res.redirect('/post');
}


