
const jwt = require('jsonwebtoken');
// include cookie parser
const cookieParser = require('cookie-parser');

const logedIn = function(req,res,next){
    // get cookie and check if it exists from jwt token
    const token = req.cookies.jwt;
    // if token does not exist, redirect to login page
    if (token) {
         return res.redirect('/')
     }
      next();
}

 module.exports = logedIn;