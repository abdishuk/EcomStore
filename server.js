import express from "express";
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
import bodyParser from "body-parser";
import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/Routes/UserRoutes.js";

var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// post api/users/login
// @desc login user
// @access public
app.use("/api/users", jsonParser, userRoutes);
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
connectDB();
