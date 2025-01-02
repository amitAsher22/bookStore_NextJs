import mongoose from "mongoose";

export function dbConnect() {
  try {
    const connection = mongoose.connect(String(process.env.MONGO_URL));
    return connection;
  } catch (error) {
    console.error(error);
  }
}
