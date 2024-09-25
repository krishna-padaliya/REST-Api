const express = require('express')
const port = 8080;

const app = express()
const db = require("./config/database")

app.use(express.urlencoded())
app.use(express.json())
app.use("/", require('./route/adminRoute'));
app.use("/faculty", require('./route/facultyRoute'));
app.use("/signup", require('./route/signupRoute'));

app.listen(port, (err)=>{
    err ? console.log('Server Not Responding!!') : console.log('Server Responding at:' + port);
})