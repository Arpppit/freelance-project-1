const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const mongoose = require('mongoose');

const { login, generateOTP, changePassword } = require('../controllers/AdminController');


router.post('/login', login)


router.post('/generateOTP', generateOTP);


router.post('/changePassword', changePassword);


module.exports = router;

