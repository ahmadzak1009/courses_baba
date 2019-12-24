const router = require("express").Router();
const Admin = require("../models/Admin");
const { loginValidation } = require("../validation/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.send(error.details[0].message);

  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.send("username not found");

  const cekPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!cekPassword) return res.send("password incorrect");

  const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.header("Authorization", `Bearer ${token}`).json({ token });
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

router.get("/cek-token", verifyToken, (req, res) => {
  res.send("you are logged in");
});

module.exports = router;
