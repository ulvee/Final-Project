const express = require("express")
const router = express.Router()
const designCourse = require("../../models/Course/designCourseModel")


const get = async (req,res) => {
    const design = await designCourse.find({});
    res.send(design);
}

const post = async (req,res) => {
    const uploadData = req.body;
    const design = new designCourse(uploadData);
    design.save();
    res.send(design);
}

const del = async (req,res) => {
    const findId = req.params.id;
    await designCourse.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"});
}

const put = async (req, res) => {
    const Id = req.params.id;
    const updated = req.body;
    const result = await designCourse.findByIdAndUpdate(Id, updated, {
      new: true,
    });
    res.send(result);
  };

router.get("/", get)
router.post("/", post)
router.delete("/:id", del)
router.put("/:id", put)

module.exports = router