import mongoose from "mongoose";

const usersSchema=new mongoose.Schema({
      name:{
        type:String,
        required:[true,"Please provide a unique username."]
      },
      email:{
        type:String,
        required:[true,"Please provide a email."],
        unique:true
      },
      age:{
        type:Number,
        required:[true,"Please provide your age."],
      },
      isVefied:{
        type:Boolean,
        default:false
      },
      isAdmin:{
        type:Boolean,
        default:false
      },
      forgotPasswordToken:String,
      forgotPasswordTokenExpiry:Date,
      verifyToken:String,
      verifyTokenExpiry:Date

});

export const Users=mongoose.models.users || mongoose.model("users",userSchema);
