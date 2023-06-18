const express = require("express")
const router = express.Router()
const Courses = require("../../models/Course/coursesModel")


const get = async (req,res) => {
    const courses = await Courses.find({});
    res.send(courses);
}

const post = async (req,res) => {
    const uploadData = req.body;
    const courses = new Courses(uploadData);
    courses.save();
    res.send(courses);
}

const del = async (req,res) => {
    const findId = req.params.id;
    await Courses.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"});
}

const put = async (req, res) => {
    const Id = req.params.id;
    const updated = req.body;
    const result = await Courses.findByIdAndUpdate(Id, updated, {
      new: true,
    });
    res.send(result);
  };

router.get("/", get)
router.post("/", post)
router.delete("/:id", del)
router.put("/:id", put)

module.exports = router