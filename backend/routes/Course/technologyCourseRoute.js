const express = require("express")
const router = express.Router()
const technologyCourse = require("../../models/Course/technologyCourseModel")


const get = async (req,res) => {
    const technology = await technologyCourse.find({});
    res.send(technology);
}

const post = async (req,res) => {
    const uploadData = req.body;
    const technology = new technologyCourse(uploadData);
    technology.save();
    res.send(technology);
}

const del = async (req,res) => {
    const findId = req.params.id;
    await technologyCourse.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"});
}

const put = async (req, res) => {
    const Id = req.params.id;
    const updated = req.body;
    const result = await technologyCourse.findByIdAndUpdate(Id, updated, {
      new: true,
    });
    res.send(result);
  };

router.get("/", get)
router.post("/", post)
router.delete("/:id", del)
router.put("/:id", put)

module.exports = router