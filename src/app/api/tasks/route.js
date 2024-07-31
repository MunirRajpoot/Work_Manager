import { NextResponse } from "next/server";
import { Task } from "../../../models/task"
import { getResponseMessage } from "@/helper/responseMessage";
import { connectDb } from "@/helper/db";
connectDb()
// get all tasks
export async function GET(request) {
    try {
        
        const tasks = await Task.find();
        return NextResponse.json(tasks)
    } catch (error) {
        return getResponseMessage("Error in message", 404, false)
    }
}

// Create all tasks

export async function POST(request) {
    const { title, content, userId } = await request.json();
    try {
        const task = new Task({
            title,
            content,
            userId,
        })
        const createdTask = await task.save();
        return NextResponse.json(createdTask,
            {
                msg: "Task Created Successfully",
                status: 201,
            }
        )
    } catch (error) {
    return getResponseMessage("Failed to created Tasks,",500,false)
    }
}