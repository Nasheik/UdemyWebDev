const express = require('express');
const router = express.Router();
const catchAsync = require('../Utilities/catchAsync');
const passport = require("passport")
const User = require('../Models/user');
const { storeReturnTo } = require('../middleware');
const users = require('../Controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect:"/login"}), users.login);

router.get('/logout', users.logout)

module.exports=router;