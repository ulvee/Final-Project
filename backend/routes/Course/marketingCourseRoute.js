const express = require("express")
const router = express.Router()
const marketingCourse = require("../../models/Course/marketingCourseModel")


const get = async (req,res) => {
    const marketing = await marketingCourse.find({});
    res.send(marketing);
}

const post = async (req,res) => {
    const uploadData = req.body;
    const marketing = new marketingCourse(uploadData);
    marketing.save();
    res.send(marketing);
}

const del = async (req,res) => {
    const findId = req.params.id;
    await marketingCourse.findByIdAndDelete(findId);
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