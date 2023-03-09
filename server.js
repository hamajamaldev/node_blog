// Description: This file is the entry point to our application. It will start our server and listen for requests.
// call cennection to mongoDB
require('./DB/connect')
// call express
const express = require('express')
// call path
const path = require('path');


// generate express app
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routes
const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter)
const viewRouter = require('./routes/viewRouter');
app.use('/', viewRouter)
const postRouter = require('./routes/postRoutes')
app.use('/post', postRouter)


// listen to port
app.listen(3000, () => {
    console.log('server is listning on port 3000')
})