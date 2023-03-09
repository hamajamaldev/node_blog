const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.getSingleUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
};