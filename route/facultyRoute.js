const express = require('express')
const facultyRoute = express.Router()

const faculty = require('../controller/faculty')

// multer
const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
})

const upload = multer({ storage: Storage }).single("image");

facultyRoute.get("/", faculty.getData)
facultyRoute.post("/addData",upload, faculty.addData)
facultyRoute.delete("/deleteData/:id", faculty.deleteData)


module.exports = facultyRoute