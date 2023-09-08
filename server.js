require("dotenv").config();

const express = require("express");
const app = express();

// Import routes
const authRoutes = require("./routes/authRoutes");
const masterRoutes = require("./routes/masterRoutes");

// settings
app.use(express.json());

// use routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/master", masterRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
