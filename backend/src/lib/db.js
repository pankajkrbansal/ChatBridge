import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    let data = await mongoose.connect(uri, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connected to DB", data.connection.host);
  } catch (err) {
    throw err;
  }
};

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };