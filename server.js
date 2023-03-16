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
app.all('/',checkAuth, viewRouter)
app.use('/user', userRouter)
app.use('/post',checkAuth, postRouter)
app.use('/auth',authRouter)

async function checkAuth(req, res, next) {
 // cget cookie and check if it exists from jwt token
    const token = req.cookies.jwt;
    // if token does not exist, redirect to login page
    if (!token) {
       return res.redirect('/auth/login')
    }

    // if token exists, verify token
    const decoded = jwt.verify(token, 'node blog');
    // if token is not valid, redirect to login page
    if (!decoded) {
        return res.redirect('/auth/login')
    }
    // find user in database search by token
     const user = await User.findOne({ token: token });
    // if user does not exist, redirect to login page
    if (!user) {
        return res.redirect('/auth/login')
    }
    

 
    next();
    
     

    
}


// listen to port
app.listen(3000, () => {
    console.log('server is listning on port 3000')
})