import mongoose from "mongoose";

type DbConnectOptions = {
    isConnected?: number;
}

const conection: DbConnectOptions = {}

async function dbConnect(): Promise<void> {
    if (conection.isConnected) {
        console.log("Using existing database connection");
        return;
    }
    try {
        const Db = await mongoose.connect(process.env.MONGODB_URI || "");
        console.log(Db)
        conection.isConnected = Db.connections[0].readyState;
        console.log("database connection established");

    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);

    }
}

export default dbConnect;