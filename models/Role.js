const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name:String,
    createdAt: {
        type: Date,
        default: Date.now
    },

});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
