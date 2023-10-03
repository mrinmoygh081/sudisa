const express = require("express");
const {
  uploadFile,
  saveImgToDB,
  testUpload,
} = require("../controllers/uploadControllers");
const { upload } = require("../utils/fileUpload");
const router = express.Router();

router.post("/", upload.single("image"), uploadFile);
router.post("/save", saveImgToDB);
// router.post("/test", upload.single("image"), testUpload);

module.exports = router;
