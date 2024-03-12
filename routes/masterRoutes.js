const express = require("express");
const {
  getDept,
  addDept,
  fetchAlerts,
  editDept,
  deleteDept,
  editUser,
  deleteUser,
} = require("../controllers/masterControllers");
const router = express.Router();

router.get("/dept", getDept);
router.post("/dept", addDept);
router.post("/dept/edit", editDept);
router.post("/dept/delete", deleteDept);
router.post("/fetchAlerts", fetchAlerts);

// For user delete and edit
router.post("/user/edit", editUser);
router.post("/user/delete", deleteUser);

module.exports = router;
