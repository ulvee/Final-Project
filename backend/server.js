const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const topCourseRoute = require("./routes/Home/topCourseRoute");
const Courses = require("./routes/Course/courseRoute");
const Gallery = require("./routes/Gallery/galleryRoute");
const Portfolio = require("./routes/Portfolio/projectsRoute");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const DB = process.env.DB_URL;

mongoose
  .connect(DB, {})
  .then(() => console.log("Database is connected!"))
  .catch((error) => console.error("Database connect error:", error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Home
app.use("/home/topcourse", topCourseRoute);

// Course
app.use("/courses", Courses);

// Gallery
app.use("/gallery", Gallery);

//Portfolio
app.use("/projects", Portfolio);

//Auth
app.use("/", require("./routes/authRoutes"));

PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is up on Port " + PORT);
});
