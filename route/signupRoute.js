const express = require('express')
const signUpRouter = express.Router()
const signup = require('../controller/signup')

signUpRouter.get("/", signup.viewSignup)
signUpRouter.post("/addsignup" , signup.addSignup)
signUpRouter.post("/checksignup" , signup.checkSignup)

module.exports = signUpRouter