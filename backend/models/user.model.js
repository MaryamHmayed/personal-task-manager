const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: "Username is required",
      unique: true,
    },
    email: {
        type: String,
        required: "email is required",
        unique: true,
      },
    password: {
      type: String,
      required: "Password is required",
    }
})

const User = mongoose.model('User', userSchema);


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  userSchema.methods.comparePassowrd = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

  module.exports = User;