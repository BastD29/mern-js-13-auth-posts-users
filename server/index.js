const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
