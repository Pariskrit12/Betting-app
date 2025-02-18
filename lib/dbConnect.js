import mongoose, { connection } from "mongoose";

const dbConnect=async()=>{
    if(connection.isConnected){
        console.log("Database is already Connected");
    };
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI);
        connection.isConnected=db.connections[0].readyState;//Checks if the database is ready to connected or not
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed",error.message);
        process.exit(1)
    }
}
export default dbConnect;