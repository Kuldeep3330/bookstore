import mongoose, { Schema } from "mongoose"

const orderScheam= new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {
            book:{
                type:mongoose.Schema.ObjectId,
                ref:"Book",
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            }
        }
    ],
    totalAmount:{
        type:Number, 
        required:true,
    },
    paymentStatus:{
        type:String,
        enum:["pending", "completed", "Failed"],
        default:"pending",
    },
    orderStatus:{
        type:String,
        enum:["procesing","shipped", "delivered", "cancelled"],
        default:"processing",
    },
    address:{
        type:String,
        required:true,
    },

},{timestamps:true})

export const Order= mongoose.model("Order", orderScheam); 