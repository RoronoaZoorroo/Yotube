// require("dotenv").config({path: "../../.env"});
import "dotenv/config";
import connectDB from "./db/index.js";


connectDB()





/*


import express from "express"

const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ",error)
            throw error
        })
        app.listen(process.env.PORT, ()=> {
            console.log(`Server is listening `)
        })
    } catch (error) {
        console.log("ERROR : ", error);
        throw error
    }
} )();

*/