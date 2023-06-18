const express = require("express")
const router = express.Router()
const TopCourse = require("../../models/Home/topCourseModel")


const get = async (req,res) => {
    const topcourse = await TopCourse.find({});
    res.send(topcourse);
}

const post = async (req,res) => {
    const uploadData = req.body;
    const topcourse = new TopCourse(uploadData);
    topcourse.save();
    res.send(topcourse);
}

const del = async (req,res) => {
    const findId = req.params.id;
    await TopCourse.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"});
}

const put = async (req, res) => {
    const Id = req.params.id;
    const updated = req.body;
    const result = await TopCourse.findByIdAndUpdate(Id, updated, {
      new: true,
    });
    res.send(result);
  };

router.get("/", get)
router.post("/", post)
router.delete("/:id", del)
router.put("/:id", put)

module.exports = router