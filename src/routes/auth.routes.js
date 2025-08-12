const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const router = express.Router()


router.post('/register', async(req,res)=>{
     const {username, password} = req.body
     const existingUser = await userModel.findOne({
          username
     })

     if(existingUser){
          return res.status(409).json({
               message:'username already exist...'
          })
     }
     const user = await userModel.create({
          username, password
     })
     res.status(200).json({
          message:'user created...',
          user
     })
})



module.exports = router