
// http://localhost:3000/api/users/{userId}/tasks
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";

export async function GET(request,{params}){
    await connectDb()
const {userId}=params;
try {
   const tasks= await Task.find({
        userId:userId
    })
    return NextResponse.json(tasks)
} catch (error) {
    console.log("error",error);
    return getResponseMessage("failed to get task!!",404,false)
}
}