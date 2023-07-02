const mongoose = require("mongoose");

const technologyCourseSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("technology", technologyCourseSchema);
