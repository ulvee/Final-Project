const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/authController");

//Middleware

const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};

router.use(cors(corsOptions));

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
