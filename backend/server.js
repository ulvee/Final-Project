const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const topCourseRoute = require("./routes/Home/topCourseRoute");
const Courses = require("./routes/Course/coursesRoute");
const Design = require("./routes/Course/designCourseRoute");
const Photography = require("./routes/Course/photographyCourseRoute");
const Marketing = require("./routes/Course/marketingCourseRoute");
const Business = require("./routes/Course/businessCourseRoute");
const Technology = require("./routes/Course/technologyCourseRoute");
const WebDevelopment = require("./routes/Course/webDevelopmentCourseRoute");

dotenv.config();
const app = express();
app.use(cors());

const DB = process.env.DB_URL;

mongoose
  .connect(DB, {})
  .then(() => console.log("Database is connected!"))
  .catch((error) => console.error("Database connect error:", error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home
app.use("/home/topcourse", topCourseRoute);

// Course
app.use("/courses", Courses);
app.use("/courses/business", Business);
app.use("/courses/design", Design);
app.use("/courses/photography", Photography);
app.use("/courses/technology", Technology);
app.use("/courses/marketing", Marketing);
app.use("/courses/webdevelopment", WebDevelopment);

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is up on Port " + PORT);
});
