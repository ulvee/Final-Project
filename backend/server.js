const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const topCourseRoute = require("./routes/Home/topCourseRoute");
const Courses = require("./routes/Course/courseRoute");

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


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is up on Port " + PORT);
});
