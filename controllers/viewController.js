const User = require('../models/User');

exports.renderIndex = async (req, res) => {
    const users = await User.find();

    res.render('index', { title: 'Home Page',desc:'hello its description', users });
}

exports.renderAbout = (req, res) => {
    res.render('about',{title:'about page'})
}