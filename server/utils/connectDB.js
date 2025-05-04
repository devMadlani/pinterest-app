import mongoose from "mongoose";

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database Connected Successfully`);
  } catch (error) {
    console.log("Mongodb Connection Error", error);
  }
};

export default connetDB;
