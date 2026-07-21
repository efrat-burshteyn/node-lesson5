
import {connect,model,Schema} from "mongoose";
import {env} from "./env.js";
export const connectDB=async()=>{
    try{
        await connect('');
        await connect('env.MONGO_URL');
        console.log('succesfull to connect to mongo');
    }
    catch(error){
        console.log(error);
    }
}