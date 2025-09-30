import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
  await mongoose.connect(`${process.env.MANGODB_URI}/${process.env.DB_NAME}`);
};

export default connectDB;
