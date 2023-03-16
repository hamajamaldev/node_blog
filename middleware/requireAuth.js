// 
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// include cookie parser
const requireAuth = async function(req, res, next) {
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
   module.exports = requireAuth;