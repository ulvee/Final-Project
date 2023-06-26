const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("gallery", gallerySchema);
