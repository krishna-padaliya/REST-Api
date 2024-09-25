const express = require('express')
const adminRoute = express.Router()

const admin = require('../controller/admin')

adminRoute.get('/' , admin.getData)
adminRoute.post('/addData' , admin.addData)
adminRoute.delete('/deleteData/:id' , admin.deteleData)
adminRoute.put('/editData/:id' , admin.editData)


module.exports = adminRoute