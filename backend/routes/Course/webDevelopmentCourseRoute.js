const express = require("express");
const router = express.Router();
const webDevelopmentCourse = require("../../models/Course/webDevelopmentModel");

const get = async (req, res) => {
  const webdevelopment = await webDevelopmentCourse.find({});
  res.send(webdevelopment);
};

const post = async (req, res) => {
  const uploadData = req.body;
  const webdevelopment = new webDevelopmentCourse(uploadData);
  webdevelopment.save();
  res.send(webdevelopment);
};

const del = async (req, res) => {
  const findId = req.params.id;
  await webDevelopmentCourse.findByIdAndDelete(findId);
  res.send({ message: "Successfully Deleted!" });
};

const put = async (req, res) => {
  const Id = req.params.id;
  const updated = req.body;
  const result = await webDevelopmentCourse.findByIdAndUpdate(Id, updated, {
    new: true,
  });
  res.send(result);
};

router.get("/", get);
router.post("/", post);
router.delete("/:id", del);
router.put("/:id", put);

module.exports = router;
