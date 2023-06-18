const express = require("express");
const router = express.Router();
const businessCourse = require("../../models/Course/businessCourseModel");

const get = async (req, res) => {
  const business = await businessCourse.find({});
  res.send(business);
};

const post = async (req, res) => {
  const uploadData = req.body;
  const business = new businessCourse(uploadData);
  business.save();
  res.send(business);
};

const del = async (req, res) => {
  const findId = req.params.id;
  await businessCourse.findByIdAndDelete(findId);
  res.send({ message: "Successfully Deleted!" });
};

const put = async (req, res) => {
  const Id = req.params.id;
  const updated = req.body;
  const result = await businessCourse.findByIdAndUpdate(Id, updated, {
    new: true,
  });
  res.send(result);
};

router.get("/", get);
router.post("/", post);
router.delete("/:id", del);
router.put("/:id", put);

module.exports = router;
