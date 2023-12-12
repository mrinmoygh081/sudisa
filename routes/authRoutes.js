const express = require("express");
const {
  loginHandler,
  forgetHandler,
  OTPHandler,
  updateNewPw,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/login", loginHandler);
router.post("/forget", forgetHandler);
router.post("/otpVerify", OTPHandler);
router.post("/updateNewPw", updateNewPw);

module.exports = router;
