const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(fileUpload());
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("Connected to MongoDB")
);

app.use("/auth", require("./routes/auth"));
app.use("/courses", require("./routes/courses"));

app.listen(port, () => console.log(`Server running on port ${port}`));
