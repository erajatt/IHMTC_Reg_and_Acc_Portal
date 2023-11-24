import mongoose from "mongoose";
import dotenv from "dotenv";
import { userModel } from "../models/Users.js";
import { formModel } from "../models/Form.js";

dotenv.config();

const DBConnection = async () => {
  const MONGO_URI = process.env.MONGODB_URL;

  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("DB Connected Successfully!!");

    // const response = await userModel.updateMany(
    //   {},
    //   { $set: { accommodationFormFilled: false, accommodationVerified: false, isAssigned: false, isWaiting: false } }
    // );
    // console.log(response);
    // const response = await formModel.updateMany(
    //   {},
    //   { $set: { accommodationFees: "", accommodationChoice: "", arrivalTime: "", departureTime: "", accommodationPaymentReferenceNumber: "" } }
    // );
    // console.log(response);
    
  } catch (err) {
    console.log("Error Connecting Database", err.message);
  }
};

export default DBConnection;
