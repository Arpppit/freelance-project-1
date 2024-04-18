const AdminOTP = require('../models/AdminOTP');
const Admin = require('../models/Admin');
const nodemailer = require('nodemailer');

module.exports.login = async function (req, res) {

  const count = await Admin.countDocuments()

  if (count == 0) {
    const admin = new Admin({
      email: "electrocomms.pce@gmail.com",
      password: "password"
    })
    await admin.save()
  }

  Admin.findOne({ email: req.body.email })
    .then(admin => {
      if (!admin) {
        res.status(401).json({ message: "Auth failed" });
      } else if (admin.password !== req.body.password) {
        res.status(401).json({ message: "Auth failed" });
      } else {
        res.status(200).json({
          message: "Auth successful",
          admin: admin
        });
      }
    })
    .catch(err => res.status(500).json({ error: err }));
};

module.exports.generateOTP = async function (req, res) {
  const { email, prevPassword, newPassword } = req.body;

  const admin = await Admin.findOne({ email: email });

  if (!admin) {
    res.status(404).json({ message: "No such admin" });
  } else if (admin.password !== prevPassword) {
    res.status(401).json({ message: "Auth failed" });
  } else {
    await AdminOTP.findOneAndDelete({ admin: admin._id });
    const otp = Math.floor(100000 + Math.random() * 900000);

    //send otp to mail using nodemailer

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "electrocomms.pce@gmail.com",
        pass: "zzci cgfd wbkj pzjm",
      },
    });

    const mailOptions = {
      from: 'electrocomms.pce@gmail.com',
      to: email,
      subject: 'OTP for password change',
      text: `Your OTP for password change is ${otp}`
    };

    transporter.sendMail(mailOptions)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.log(error);
      });

    const adminOTP = new AdminOTP({
      admin: admin._id,
      password: newPassword,
      otp: otp
    });
    await adminOTP.save();
    res.status(200).json({
      message: "OTP sent to admin",
      otp: otp
    });
  }
};

module.exports.changePassword = async function (req, res, next) {
  const { email, otp } = req.body;

  const admin = await Admin.findOne({ email: email });
  if (!admin) {
    res.status(404).json({ message: "No such admin" });
  } else {
    const adminOTP = await AdminOTP.findOne({ admin: admin._id });
    if (!adminOTP) {
      res.status(404).json({ message: "No such OTP" });
    } else if (adminOTP.otp !== otp) {
      res.status(401).json({ message: "Auth failed" });
    } else {
      await Admin.findOneAndUpdate({ email: email }, { password: adminOTP.password });
      await AdminOTP.findOneAndDelete({ admin: admin._id });
      res.status(200).json({ message: "Password changed successfully" });
    }
  }
};
