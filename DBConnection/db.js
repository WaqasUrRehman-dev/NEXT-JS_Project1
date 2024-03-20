import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

if (!process.env.MONGODB_URL) {
    throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
}

let dbConnection

dbConnection = mongoose.connect(url);
export default dbConnection;