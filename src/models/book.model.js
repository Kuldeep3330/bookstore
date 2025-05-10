import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    unique:true,
    trim: true,
    index:true,
  },
  author: {
    type: String,
    required: [true,"Author name is required"],
  },
  description: String,
  price: {
    type: Number,
    required: true,
  }, 
  inStock:{
    type:Boolean,
    default:true,
  },
  publishedYear: Number,
  genre: String,
}, { timestamps: true });

export const Book = mongoose.model("Book", bookSchema);
