const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  hobbies: [String],
  profilePicture: String,
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = { UserModel };
