import mongoose from "mongoose";

// Define a subdocument schema for courses
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const skilldevSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a unique username."],
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please provide Your Address."],
  },
  phone: {
    type: Number,
    required: [true, "Please provide a Phone  Number."],
    unique: true,
  },
  pincode: {
    type: Number,
    required: [true, "Please provide a pincode."],
  },
  remark: {
    type: String,
    required: [true, "Please Provide your Remark."],
  },
  courses:[courseSchema],
  paymentstatus: {
    type: Boolean,
    default: false,
    required: [true, "Please Provide your paymentstatus."],
  },
});

export const SkilldevData =
  mongoose.models.skilldevSchema || mongoose.model("skilldevData", skilldevSchema);
