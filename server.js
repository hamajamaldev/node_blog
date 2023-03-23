// Description: This file is the entry point to our application. It will start our server and listen for requests.
// call cennection to mongoDB
require('./DB/connect')
// call user model
const User = require('./models/User');
// call express
const express = require('express')
// call path
const path = require('path');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes')
const viewRouter = require('./routes/viewRouter');
const authRouter = require('./routes/authRoutes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const requireAuth = require('./middleware/requireAuth');
const logedIn = require('./middleware/logedIn');
const checkRole = require('./middleware/checkRole');





// generate express app
const app = express()
// configure session middleware
app.use(session({
    secret: '123132112323',
    resave: true,
    saveUninitialized: true,
     expires: new Date(Date.now() + 60 * 1000)
  }));


app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.all('/',requireAuth, viewRouter)
app.use('/user', userRouter)
app.use('/post',requireAuth,checkRole, postRouter)
app.use('/auth',authRouter)







// listen to port
app.listen(3000, () => {
    console.log('server is listning on port 3000')
})