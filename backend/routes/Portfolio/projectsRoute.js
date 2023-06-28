const express = require("express");
const router = express.Router();
const Portfolio = require("../../models/Portfolio/projectsModel");

const get = async (req, res) => {
  const projects = await Portfolio.find({});
  res.send(projects);
};

const getId = async (req, res) => {
  const projectsId = req.params.id;
  const projects = await Portfolio.findById(projectsId);
  res.send(projects);
};

const post = async (req, res) => {
  const uploadData = req.body;
  const projects = new Portfolio(uploadData);
  projects.save();
  res.send(projects);
};

const del = async (req, res) => {
  const findId = req.params.id;
  await Portfolio.findByIdAndDelete(findId);
  res.send({ message: "Successfully Deleted!" });
};

const put = async (req, res) => {
  const Id = req.params.id;
  const updated = req.body;
  const result = await Portfolio.findByIdAndUpdate(Id, updated, {
    new: true,
  });
  res.send(result);
};

router.get("/", get);
router.post("/", post);
router.delete("/:id", del);
router.put("/:id", put);
router.get("/:id", getId);

module.exports = router;
