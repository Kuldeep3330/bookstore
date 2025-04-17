import mongoose, { Schema } from "mongoose";

const wishlistSchema= new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    book:{
        type:mongoose.Schema.ObjectId,
        ref:"Book",
        required:true,
    }

},{timestamps:true})

export const Wishlist= mongoose.model("Wishlist", wishlistSchema);