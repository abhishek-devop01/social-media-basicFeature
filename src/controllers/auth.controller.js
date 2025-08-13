const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function registerController(req,res){
     const {username, password} = req.body
     const isUserExist = await userModel.findOne({username});

     if(isUserExist){
          return res.status(400).json({
               message: 'user already exists...'
          })
     }

     const user = await userModel.create({
          username,
          password
     })

     const token = jwt.sign({
          id:user._id
     }, process.env.JWT_SECRET)

     res.cookie('token', token)

     return res.status(201).json({
          message: "user registered successfully..."
     })
}

async function loginController(req, res){
     const {username, password} = req.body;
     const user = await userModel.findOne({username})

     if(!user){
          return res.status(400).json({
               message: 'user not found!'
          })
     }
     const isPasswordValid = user.password === password


     if(!isPasswordValid){
          return res.status(400).json({
               message: "Invalid password..."
          })
     }
     const token = jwt.sign({
          id:user._id
     }, process.env.JWT_SECRET)

     res.cookie("token", token)

     res.status(200).json({
          message: "user logged in successfully"
     })
}


module.exports = {
     registerController,
     loginController
}