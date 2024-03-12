const { resSend } = require("../utils/resSend");
const { query } = require("../db/db.js");
const { dateSqlType } = require("../utils/dateFormat");

// GET /api/v1/master/dept
exports.getDept = async (req, res) => {
  try {
    let sql = `SELECT * FROM depts`;

    const result = await query({
      query: sql,
      values: [],
    });
    if (result && result.length > 0) {
      // User exits, check passwords
      resSend(res, true, 200, "Dept list", result, null);
    } else {
      resSend(res, false, 200, "No Record Found!", result, null);
    }
  } catch (error) {
    console.log(error);
    resSend(res, false, 400, "Error", error, null);
  }
};

// POST /api/v1/master/dept
exports.addDept = async (req, res) => {
  const { dept_name, emails, head_name } = req.body;

  if (dept_name && emails && head_name) {
    try {
      let sql = `INSERT INTO depts(dept_name, emails, head_name) VALUES ('${dept_name}','${emails}','${head_name}')`;

      const result = await query({
        query: sql,
        values: [],
      });
      if (result) {
        // User exits, check passwords
        resSend(res, true, 200, "Dept list", result, null);
      } else {
        resSend(res, false, 200, "No Record Found!", result, null);
      }
    } catch (error) {
      console.log(error);
      resSend(res, false, 400, "Error", error, null);
    }
  } else {
    resSend(res, false, 200, "Please fill all the inputs", null, null);
  }
};

// POST /api/v1/master/dept/edit
exports.editDept = async (req, res) => {
  const { dept_id, dept_name, emails, head_name } = req.body;
  try {
    let sql = `UPDATE depts SET dept_name = ?, emails=?, head_name=? WHERE dept_id = ?`;
    const result = await query({
      query: sql,
      values: [dept_name, emails, head_name, dept_id],
    });
    resSend(res, true, 200, "Data Updated", result, null);
  } catch (error) {
    console.log(error);
    resSend(res, false, 400, "Error", error, null);
  }
};

// POST /api/v1/master/dept/delete
exports.deleteDept = async (req, res) => {
  const { dept_id } = req.body;
  try {
    let sql = `DELETE FROM depts WHERE dept_id = ?`;
    const result = await query({
      query: sql,
      values: [dept_id],
    });
    resSend(res, true, 200, "Data Deleted", result, null);
  } catch (error) {
    console.log(error);
    resSend(res, false, 400, "Error", error, null);
  }
};

// GET /api/v1/master/fetchAlerts
exports.fetchAlerts = async (req, res) => {
  let { startTime, endTime } = req.body;
  if (startTime && endTime) {
    try {
      let sql = `SELECT * FROM alarm as t1
      INNER JOIN depts as t2 ON t1.dept_id = t2.dept_id
      WHERE datetime BETWEEN '${startTime}' AND '${endTime}'`;

      const result = await query({
        query: sql,
        values: [],
      });
      if (result && result.length > 0) {
        // User exits, check passwords
        resSend(res, true, 200, "Alarm list", result, null);
      } else {
        resSend(res, false, 200, "No Alarm Record Found!", result, null);
      }
    } catch (error) {
      console.log(error);
      resSend(res, false, 400, "Error", error, null);
    }
  } else {
    resSend(res, false, 200, "Send Start and end time", null, null);
  }
};

// POST /api/v1/master/user/edit
exports.editUser = async (req, res) => {
  const { dept_id, dept_name, emails, head_name } = req.body;
  try {
    let sql = `UPDATE depts SET dept_name = ?, emails=?, head_name=? WHERE dept_id = ?`;
    const result = await query({
      query: sql,
      values: [dept_name, emails, head_name, dept_id],
    });
    resSend(res, true, 200, "Data Updated", result, null);
  } catch (error) {
    console.log(error);
    resSend(res, false, 400, "Error", error, null);
  }
};

// POST /api/v1/master/user/delete
exports.deleteUser = async (req, res) => {
  const { auth_id } = req.body;
  console.log("user deleteeeee auth_id", req.body.auth_id);
  try {
    let sql = `DELETE FROM auth WHERE auth_id = ?`;
    const result = await query({
      query: sql,
      values: [auth_id],
    });
    resSend(res, true, 200, "UserData Deleted", result, null);
  } catch (error) {
    console.log(error);
    resSend(res, false, 400, "Error", error, null);
  }
};
