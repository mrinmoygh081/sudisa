const mysql = require("mysql2/promise");

async function query({ query, values = [] }) {
  const db = await mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "sudisa",
    multipleStatements: true,
  });

  try {
    const [results] = await db.execute(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
module.exports = { query };
