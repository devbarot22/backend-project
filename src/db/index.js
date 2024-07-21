import mongoose from "mongoose";
import { DB_NAME } from "../constants";


export const connectDB = async () => {
  try {
    
  } catch (error) {
    console.log("MongoDB connection Error", error);
    process.exit(1)
    
  }
}