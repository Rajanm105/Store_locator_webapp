const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
secret = process.env.SECRET;

exports.registerUser = (req,res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user){
            return res.status(400).json({'error': 'Email already exists'});
        }else{
            const newUser = new User ({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                role: req.body.role
            });

            bcrypt.genSalt(10,(err,salt)=> {
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err)throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                })
            })
        }
    })
}

exports.loginUser = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user =>{
        if(!user){
            return user.status(404).json({email: "Email not found"});
        }

        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if(isMatch){
                const payload = {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                }

                jwt.sign(
                    payload,
                    secret,
                    {   
                        expiresIn: 31552454
                    },
                    (err,token) =>{
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                )
            }else{
                return res.status(400).json({passwordincorrect: "Password Incorrect"})
            }
        })
    })
}