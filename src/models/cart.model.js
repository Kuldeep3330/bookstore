import mongoose, { Schema } from "mongoose";

const cartSchema= new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {book:{
            type:mongoose.Schema.ObjectId,
            ref:"Book",
            required:true,
        },
        quantity:{
            type:Number,
            default:1,
        }}
    ]

},{timestamps:true})

export const Cart=  mongoose.model("Cart", cartSchema)