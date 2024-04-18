const mongoose = require('mongoose');

const adminOTPSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AdminOTP', adminOTPSchema);
