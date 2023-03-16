const { json } = require('express');
const { findOne } = require('../models/Post');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


const expireDate = 60 * 60 * 24 * 1000 * 2; // 2 days
const createToken = (id) => {
   return jwt.sign({id},'node blog',{
        expiresIn:expireDate
    })
};

exports.login=async(req,res)=>{
    // res.send('login');
    return res.render('auth/login');
}

exports.register=async(req,res)=>{
    // res.send('register');
    res.render('auth/register');
}

exports.registerUser=async(req,res)=>{
    // res.send('register user');
    const {name,email,password}=req.body;
    const user=new User();
    user.name=name;
    user.email=email;
    user.password=password;
    await user.save();
    res.redirect('/auth/login');
}

exports.loginUser=async(req,res)=>{
// check if user exists
const {email,password}=req.body;
// check if user exists
if(!email || !password){
    res.status(400).json({status:'fail',message:'please provide email and password'});

}
// search for user in database if user exists
 const user =await User.findOne({email});
    if(!user){
        res.status(400).json({status:'fail',message:'user does not exist'});
    }
// check if password is correct
else if(user.password !== password){

    res.status(400).json({status:'fail',message:user + ' wrong pass ' +password});

}
else{
    // change onbject id to string
    const userId=user._id;
    const token=createToken(userId);
    // save token to database
    user.token=token;
    await user.save();

    res.cookie('jwt',token,{ httpOnly: true, maxAge: expireDate });
    return res.redirect('/');


}
// add user id to session
// req.session.userId=user._id;
// redirect to home page

}

exports.logout=async(req,res)=>{
    res.clearCookie('jwt');
   return res.redirect('/auth/login');
}

