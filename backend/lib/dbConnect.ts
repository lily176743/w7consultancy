import mongoose from "mongoose";
import config from "../config";

const db: string = config.mongoURI;

const dbConnect = async () => {
  try {
    await mongoose.connect(db);
    console.log("📡 Database Connected 📡");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
