import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const userSchema= new Schema({
    username:{
        type:String,
        required:[true, "username is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    }

},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()    
})

// JWT token method
userSchema.methods.generateJWT = function () {
    return jwt.sign(
      { _id: this._id, email: this.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
  };

userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password);
}

export const User= mongoose.model("User", userSchema)