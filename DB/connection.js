import mongoose from "mongoose";

const connectDB = async ()=>{

    return await mongoose.connect(process.env.DB).
    then( ()=>{
        console.log("Connected Successfully");
    } ).catch( (error)=>{
        console.log(`error to connect DB ${error}`)
    } );
}

export default connectDB;