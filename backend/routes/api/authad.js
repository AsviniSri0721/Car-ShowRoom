const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const authad = require('../../middleware/authad')

const Admin = require('../../models/Admin');

router.post('/', (req, res) => {
    const { emailad6, passwordad6 } = req.body;

    //simple validation
    if(!emailad6 || !passwordad6) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    Admin.findOne({ emailad6 })
        .then(admin => {
            if(!admin) return res.status(400).json({msg: 'Admin Does not exists' });

            //Validate password
            bcrypt.compare(passwordad6, admin.passwordad6)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { emailad6: admin.emailad6 },
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
                })
        })
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 * */

router.get('/admin', authad, (req, res) => {
    Admin.findById(req.admin.id)
        .select('-passwordad6')
        .then(admin => res.json(admin));

});


module.exports = router;
