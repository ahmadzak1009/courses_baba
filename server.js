const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("Connected to MongoDB")
);

app.use("/courses", require("./routes/courses"));

app.listen(port, () => console.log(`Server running on port ${port}`));
