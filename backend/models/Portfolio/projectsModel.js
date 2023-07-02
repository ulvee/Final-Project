const mongoose = require("mongoose");

const projectsSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projects", projectsSchema);
