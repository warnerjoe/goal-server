import mongoose from 'mongoose';
import express, { Application } from 'express';
import { config } from 'dotenv';
import goalRoutes from "./routes/goalRoutes"; // Import the goal routes

config(); // enables dotenv

const app: Application = express();
const PORT = process.env.PORT;

mongoose
    .connect(process.env.MONGODB_URI || "",)
    .then(() => {
        console.log("MongoDB successfully connected.");
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
    });

app.use(express.json());

app.use("/api", goalRoutes); // Use the goal routes

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

export { app, server };