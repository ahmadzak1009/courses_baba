const router = require("express").Router();
const Admin = require("../models/Admin");
const { loginValidation } = require("../validation/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(404).send("username not found");

  const cekPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!cekPassword) return res.status(400).send("Password incorrect");

  const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.header("Authorization", `Bearer ${token}`).send(token);
});

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = new Admin({
      username: req.body.username,
      password: hashedPassword
    });

    const result = await newAdmin.save();
    res.json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
