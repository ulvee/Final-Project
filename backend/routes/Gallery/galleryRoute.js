const express = require("express");
const router = express.Router();
const Gallery = require("../../models/Gallery/galleryModel");

const get = async (req, res) => {
  const photos = await Gallery.find({});
  res.send(photos);
};

const post = async (req, res) => {
  const uploadData = req.body;
  const photos = new Gallery(uploadData);
  photos.save();
  res.send(photos);
};

const del = async (req, res) => {
  const findId = req.params.id;
  await Gallery.findByIdAndDelete(findId);
  res.send({ message: "Successfully Deleted!" });
};

const put = async (req, res) => {
  const Id = req.params.id;
  const updated = req.body;
  const result = await Gallery.findByIdAndUpdate(Id, updated, {
    new: true,
  });
  res.send(result);
};

router.get("/", get);
router.post("/", post);
router.delete("/:id", del);
router.put("/:id", put);

module.exports = router;
