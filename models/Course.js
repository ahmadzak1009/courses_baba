const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "course_default.jpg" },
    slug: { type: String, required: true, unique: true }
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
