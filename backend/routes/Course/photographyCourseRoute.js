const express = require("express")
const router = express.Router()
const photographyCourse = require("../../models/Course/photographyCourseModel")


const get = async (req,res) => {
    const photography = await photographyCourse.find({});
    res.send(photography);
}

const post = async (req,res) => {
    const uploadData = req.body;
    const photography = new photographyCourse(uploadData);
    photography.save();
    res.send(photography);
}

const del = async (req,res) => {
    const findId = req.params.id;
    await photographyCourse.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"});
}

const put = async (req, res) => {
    const Id = req.params.id;
    const updated = req.body;
    const result = await photographyCourse.findByIdAndUpdate(Id, updated, {
      new: true,
    });
    res.send(result);
  };

router.get("/", get)
router.post("/", post)
router.delete("/:id", del)
router.put("/:id", put)

module.exports = router