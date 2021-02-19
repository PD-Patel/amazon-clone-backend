import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.model("users", userSchema);
