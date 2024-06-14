import mongoose from 'mongoose'
import colors from "colors"

const connectDB = async ()=>{
 try {
    const conn= await mongoose.connect(process.env.MONGO_URL)
    // console.log(`mongoDb connected ${conn.connection.host}`.bgMagenta.black);
 } catch (error) {
    console.log(`Error in mongoDB ${error}`.bgRed);
 }
}
export default connectDB;
