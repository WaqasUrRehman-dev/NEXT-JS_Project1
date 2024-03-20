// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import mongoose from "mongoose";

// Check URI
const url = process.env.MONGODB_URL || "";
if (!process.env.MONGODB_URL) {
  throw new Error("Please add your Mongo URL to .env.local");
}

// Create Connection
let dbConnection;


if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongooseConnect) {
    global._mongooseConnect = mongoose.connect(url);
  }
  dbConnection = global._mongooseConnect;
} else {
  // In production mode, it's best to not use a global variable.
  dbConnection = mongoose.connect(url);
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default dbConnection;
