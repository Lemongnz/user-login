import mongoose from "mongoose";

const connection: any = {}; /* creating connection object*/

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/users";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  const db: any = await mongoose
    .connect(MONGODB_URI)
    .then((connection) => {
      console.log("MongoDB Connected");
      return connection;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  connection.isConnected = db.connections[0].readyState;
};
