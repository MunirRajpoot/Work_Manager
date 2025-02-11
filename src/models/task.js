import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["pending", "completed", "just_added"],
        default: "pending",
    },
    userId: {
        type: mongoose.ObjectId,
        required: true,
    },

})

export const Task= mongoose.models.Task || mongoose.model("Task", TaskSchema)
