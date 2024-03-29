const User = require('../models/User');
// check if user role is admin  
const checkRole = async function (req, res, next) {
    // find user in database search by token
    const token = req.cookies.jwt;
    const user = await User.findOne({ token: token }).populate('role');
    // if user does not exist, redirect to login page
    if (!user) {
        return res.redirect('/auth/login')
    }
    

    if (user.role.name === 'admin') {
        next();
    } else {
              return res.redirect('/')
    }   
    

}
module.exports = checkRole;



