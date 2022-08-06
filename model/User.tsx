import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastname: String,
  age: Number,
});

export default mongoose.models.User || mongoose.model("Users", UserSchema);
