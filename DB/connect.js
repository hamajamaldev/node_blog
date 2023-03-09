const mongoose = require('mongoose');


const MONGO_URI = 'mongodb://127.0.0.1:27017/hama';
mongoose.connect(MONGO_URI).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.log(err));

module.exports = mongoose;
