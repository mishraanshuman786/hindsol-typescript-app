import mongoose from "mongoose";
import {connectionSrc} from "./db";

export default async function connectToMongoDB() {
  try {
    const connection=await mongoose.connect(connectionSrc, {
      useNewUrlParser: true,
    });
   return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}


