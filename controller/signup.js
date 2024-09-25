const signup = require('../model/signupSchema')
let bcrypt = require("bcrypt");
let moment = require("moment");
let jwt = require("jsonwebtoken");

module.exports.viewSignup = async (req,res) => {
    let data = await signup.find({})
    data ? res.status(200).json({msg:"Response found" , signupData : data}) : res.status(400).json({msg: "Response Not Found!!"})
}

module.exports.addSignup = async (req, res) => {
    let user = await signup.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ msg: "user already registerd" })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a')

    let userData = await signup.create(req.body);
    userData ? res.status(200).json({ msg: "user registerd" }) : res.status(400).json({ msg: "something went wrong" })
}

module.exports.checkSignup = async (req, res) => {
    let user = await signup.findOne({ email: req.body.email });
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            let token = await jwt.sign({ userData: user }, "signup", { expiresIn: "1h" });
            res.status(200).json({ msg: "password is right", tokenNum: token })
        } else {
            res.status(400).json({ msg: "password is wrong" })
        }
    } else {
        res.status(400).json({ msg: "user not found" })
    }
}