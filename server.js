import express from "express";
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
import connectDB from "./backend/config/db.js";

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
connectDB();
