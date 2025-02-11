
// api/tasks/{taskId}

import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connectDb()
    const { taskId } = params;
    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        console.log("error", error)
        return getResponseMessage("Failed to get single task!!", 404, false);

    }
}
export async function PUT(request, { params }) {
    await connectDb();
    try {
        const { taskId } = params;
        const { title, content, status } = await request.json();
        let task = await Task.findById(taskId);
        (task.title = title), (task.content = content), (task.status = status);
        const updatedTask = await task.save();
        return NextResponse.json(updatedTask)


    } catch (error) {
        console.log("error", error);
        return getResponseMessage("Error in updating Task!!", 500, false)
    }
}

export async function DELETE(request,{params}) {
await connectDb()
try {
    const {taskId}=params;
    await Task.deleteOne({
        _id:taskId
    })
    return getResponseMessage("Task Deleted!!",200,true)
} catch (error) {
    console.log("error",error);
    return getResponseMessage("Failed to create Delete!!",500,false)
}
}