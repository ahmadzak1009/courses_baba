const router = require("express").Router();
const Course = require("../models/Course");
const { addCourseValidation } = require("../validation/validation");
const string_to_slug = require("../helpers/slugify");
const verifyToken = require("../middleware/verifyToken");

router.get("/", async (req, res) => {
  try {
    const result = await Course.find().sort("-createdAt");
    res.json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const result = await Course.findOne({ slug: req.params.slug });
    if (!result) return res.status(404).send("course not found");
    res.json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", verifyToken, async (req, res) => {
  const { error } = addCourseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let slug = string_to_slug(req.body.title);
  const cekSlug = await Course.findOne({ slug: slug });
  if (cekSlug) slug += Date.now();

  const newCourse = new Course({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    slug: slug
  });

  try {
    const result = await newCourse.save();
    res.json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/:id", verifyToken, async (req, res) => {
  const { error } = addCourseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let slug = string_to_slug(req.body.title);

  const { title } = await Course.findById(req.params.id);
  if (title !== req.body.title) {
    const cekSlug = await Course.findOne({ slug: slug });
    if (cekSlug) slug += Date.now();
  }

  const updatedCourse = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    slug: slug
  };

  try {
    const result = await Course.findByIdAndUpdate(req.params.id, updatedCourse);
    res.send("Course updated");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const result = await Course.findByIdAndDelete(req.params.id);
    res.send("Course deleted");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
