import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique:true,
    trim: true,
    index:true,
  },
  author: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  publishedYear: Number,
  genre: String,
}, { timestamps: true });

export const Book = mongoose.model("Book", bookSchema);
