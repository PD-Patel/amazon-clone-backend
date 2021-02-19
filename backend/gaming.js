import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: Number,
  title: String,
  imgUrl: String,
  rating: Number,
  price: Number,
  category: String,
});

export default mongoose.model("gaming", productSchema);
