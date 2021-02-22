import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI =
  "mongodb+srv://rajko:763198@cluster0.c3lwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; /*  process.env.MONGO_URI; */
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
