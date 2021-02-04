const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const Admin = require('../../models/Admin');
/**
 * @route   POST api/users
 * @desc    Get all users
 * @access  Private
 */

router.post('/', (req, res) => {
    const {first_namead6, last_namead6, emailad6, passwordad6 } = req.body;

    //simple validation
    if(!first_namead6 || !last_namead6 || !emailad6 || !passwordad6) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    Admin.findOne({ emailad6})
        .then(admin => {
            if(admin) return res.status(400).json({msg: 'admin already exists' });

            const newAdmin = new Admin({
                first_namead6,
                last_namead6,
                emailad6,
                passwordad6
            });

            //Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newAdmin.passwordad6, salt, (err, hash) => {
                    if(err) throw err;
                    newAdmin.passwordad6 = hash;
                    newAdmin.save()
                        .then(admin => {

                            jwt.sign(
                                { id: admin.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        admin: {
                                            id: admin.id,
                                            first_namead6: admin.first_namead6,
                                            last_namead6: admin.last_namead6,
                                            emailad6:admin.emailad6
                                        }
                                    });
                                }
                            )
                        });
                });
            })
        })
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'projectforsliit@gmail.com', // generated ethereal user
            pass: '01012018@sliit' // generated ethereal password
        }
    });

    // send mail with defined transport object
    const mailOptions = {
        from: 'projectforsliit@gmail.com', // sender address
        to: emailad6, // list of receivers
        subject: 'Login Credentials', // Subject line
        html: 'Username: '+ emailad6 + 'Password: '+ passwordad6// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
});




module.exports = router;
