require("dotenv").config();

const express = require("express");
const app = express();

// Import routes
const authRoutes = require("./routes/authRoutes");

// settings
app.use(express.json());

// use routes
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
