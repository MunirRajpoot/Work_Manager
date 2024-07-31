import mongoose from "mongoose"
import {User} from "../models/users"

export const connectDb = async () => {


    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
        });
        console.log("Db Connected Successfully");
        // console.log(connection);


// testing and creating new user
// const user= new User({
//     name:"Munir",
//     email:"munir@gmail.com",
//     password:"testpassword",
//     about:"This is testing"

// })

// await user.save()

// console.log("user is created");

        console.log("connection with host", connection.host);
    } catch (error) {
        console.log("Failed to connect the database");
        console.log("error", error);
    }
}