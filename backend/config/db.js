import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://abdishukri:shukri2014@cluster0.ujmtk4y.mongodb.net/",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Mobgodb connected on " + conn.connection.host);
  } catch (error) {
    console.error("Error: " + error.message);
    process.exit(1);
  }
};
export default connectDB;
