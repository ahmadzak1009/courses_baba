const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: { type: String, required: true, minlength: 4 },
    password: { type: String, required: true, minlength: 4 }
  },
  {
    timestamps: true
  }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
