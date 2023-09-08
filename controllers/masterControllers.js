const { resSend } = require("../utils/resSend");
const { query } = require("../db/db.js");

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
      resSend(res, true, 200, "Dept list", result, token);
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
};
