const { request, response } = require("express");
const {validationResult} = require('express-validator');
const Admin = require('../../models/admin-models/admin-model');
const jwt = require = require('jsonwebtoken');


exports.signup = (request, response, next) => {

    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});

        const { name, email, password,mobile } = request.body
        Admin.create({
                name: name,
                email: email,
                password: password,
                mobile: mobile
            })
            .then(result => {
                console.log("result: ", result)
                return response.status(201).json(result);
            })
            .catch(err => {
                console.log("Error: ", err)
                return response.status(500).json(err)
            })

    }
 

exports.signin = (request, response, next) => {

    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});

    const { email,password } = request.body
    Admin.find({
            email: email,
            password: password
        })
        .then(result => {
            console.log(result);
            if (result.length) {
                let paylod = { subject: result._id };
                let token = jwt.sign(paylod, 'abcdefghijklm');
                return response.status(200).json({
                    status: 'login success',
                    current_user: result,
                    token: token
                })
            }else{
                response.status(400).json({msg:"psw incorrect"})
            }
        })
        .catch(err => {
            console.log(err)
            return response.status(500).json({ message: "Oops Something Went Wrong" });
        })
};