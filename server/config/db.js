import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => console.log("MongoDB Connected", conn.connection.host));
};
