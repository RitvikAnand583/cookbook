import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
   try{
    console.log(process.env.MONGODB_URI);
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
   }
   catch(error){
       console.log("mongoDb connection error ",error);
       process.exit(1) // at the place of throw error given by nodejs it is method 
   }
}

export default connectDB