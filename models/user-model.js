const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String
});

const User = mongoose.model("trackandtraceuser", userSchema);

module.exports = User;
