var User = require('../models/user')

const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

exports.register = function (req, res, next) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
    
      console.log("Register newUser  " + newUser.email );
      User.addUser(newUser, (err, user) => {
        if(err){
          console.log(err);
          res.json({success: false, msg:'Failed to register user'});
        } else {
          res.json({success: true, msg:'User registered'});
        }
      });
};

exports.authenticate = function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
  
    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
  
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
};

exports.profile = function (req, res, next) {
    res.json({user: req.user});
};


exports.get_pinned_tests = function (req, res, next) {

  var id  = req.params.id;

  User.find({id: id}).select({pinned_tests: 1}).exec((err, docs) => {
    if(err){
      next(err);
    } else{
      res.json({msg: "Succesfully Read",
                result: docs          
              });
    }
  });
  
};
