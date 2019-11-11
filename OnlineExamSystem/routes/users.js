var express = require('express');
var router = express.Router();
const passport = require('passport');

var userController = require('../controllers/userController');

//=====SUBJECT ROUTES=========

router.post('/register', userController.register);

router.post('/authenticate', userController.authenticate);

router.get('/profile', passport.authenticate('jwt', {session:false}), userController.profile);

router.get('/:id/pinnedtests', userController.get_pinned_tests);

module.exports = router;