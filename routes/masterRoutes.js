const express = require("express");
const { getDept, addDept } = require("../controllers/masterControllers");
const router = express.Router();

router.get("/dept", getDept);
router.post("/dept", addDept);

module.exports = router;
