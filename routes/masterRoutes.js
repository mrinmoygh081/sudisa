const express = require("express");
const {
  getDept,
  addDept,
  fetchAlerts,
  editDept,
  deleteDept,
} = require("../controllers/masterControllers");
const router = express.Router();

router.get("/dept", getDept);
router.post("/dept", addDept);
router.post("/dept/edit", editDept);
router.post("/dept/delete", deleteDept);
router.post("/fetchAlerts", fetchAlerts);

module.exports = router;
