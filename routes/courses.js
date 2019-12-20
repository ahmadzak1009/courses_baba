const router = require("express").Router();
const Course = require("../models/Course");

router.get("/", async (req, res) => {
  try {
    const result = await Course.find().sort("-createdAt");
    res.json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
