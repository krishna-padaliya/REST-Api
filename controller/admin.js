const adminSchema = require('../model/adminSchema')

module.exports.getData = async(req,res) => {
    let data = await adminSchema.find({});
    data ? res.status(200).json({ msg: "response found", adminData: data }) : res.status(400).json({ msg: "data not found" })
}

module.exports.addData = async(req,res) => {
    let data = await adminSchema.create(req.body)
    data ? res.status(200).json({msg: "Data Submitted"}) : res.status(400).json({msg: "Data Not Submitted"})
}

module.exports.deteleData = async(req,res) => {
    let data = await adminSchema.findByIdAndDelete(req.params.id)
    data ? res.status(200).json({ msg: "Data Deleted" }) : res.status(400).json({ msg: "Data Not Deleted" })
}

module.exports.editData = async(req,res) => {
    let data = await adminSchema.findByIdAndUpdate(req.params.id, req.body)
    data ? res.status(200).json({ msg: "Data Updated" }) : res.status(400).json({ msg: "Data Not Updated" })
}