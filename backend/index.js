import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
import {app} from './app.js';

dotenv.config()

console.log(`Server is running at port : ${process.env.PORT}`);

connectDB()
.then(() => {
    app.on("errorE" , error => {
        console.log("error after dbconnection" ,error);
        throw error;
    })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}
        To connect click http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed error is here !!! " , err);
})





// const http = require("http");
// const app = require("./app");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const { port } = process.env;

// dotenv.config();


// // Connect to offline DB

// // offlineDb = localhost_URI;
// // onlineDb = MONGODB_URI;

// // mongoose
// //   .connect(onlineDb)
// //   .then(() => console.log("Connected to MongoDB"))
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // get request for route
// app.get("/", (req, res) => {
//   res.send("Cookbook Server is running!");
// });

// // Localhost
// app.listen(process.env.PORT, () => {
//   console.log("Server Listening on port http://localhost:" + process.env.PORT);
// });

// // Ip address
// // const server = http.createServer(app);

// // server.listen(port, ipAddress, () => {
// //   console.log(`Server Listening on http://${ipAddress}:${port}`);
// // });

// // server.listen(80, ipAddress, () => {
// //   console.log(`Server Listening on http://${ipAddress}`);
// // });
