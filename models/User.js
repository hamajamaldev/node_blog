const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        // required: true,
        // unique: true
    },
    password: {
        type: String,
        // required: true
    },
    token: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    
});






const User = mongoose.model('User', userSchema);
module.exports = User;