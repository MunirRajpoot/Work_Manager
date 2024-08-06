"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import loginSvg from "../../assets/login.svg"
import { addTask } from '@/services/taskService'
// export const metadata = {
//     title: "Add Task : Work Manager"
// }
const AddTask = () => {
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        userId: ""
    });
    const handleAddTask = (event) => {
        event.preventDefault();
        console.log(task);
        try {
          const result=  addTask(task);
          console.log("Result",result);
          
        } catch (error) {
            console.log("Error",error);
            
        }
        
    }
    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className='col-span-5 col-start-4 shadow shadow-gray-400 p-4'>
                <div className='my-5 flex justify-center'>
                    <Image src={loginSvg} style={{ width: "50%" }} />
                </div>
                <h1 className='text-3xl flex justify-center'>Add Tasks</h1>
                <form action="#!" onSubmit={handleAddTask}>
                    {/* task title */}
                    <div className='mt-4'>
                        <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title: </label>
                        <input type="text" className='w-full text-white p-3 rounded-lg bg-gray-600 focus:ring-gray-200 border border-gray-300' id='task_title' name='task_title' onChange={(event) => {
                            setTask({
                                ...task,
                                title: event.target.value,
                            });

                        }}
                            value={task.title}

                        />

                    </div>
                    {/* Task Content */}
                    <div className='mt-4'>
                        <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content: </label>
                        <textarea className='w-full text-white p-3 rounded-lg bg-gray-600 focus:ring-gray-200 border border-gray-300' id='task_content' rows={4}
                            name='task_content'
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    content: event.target.value,
                                })

                            }}
                            value={task.content}
                        />

                    </div>

                    {/* Task Status */}
                    <div className='mt-4'>
                        <label htmlFor="task_status" className='block text-sm font-medium mb-2'>Status:</label>
                        <select id="task_status" className='w-full text-white p-3 rounded-lg bg-gray-600 focus:ring-gray-200 border border-gray-300'
                            name='task_status'
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    status: event.target.value,

                                })
                            }}
                            value={task.status}
                        >
                            <option value="none" disabled>---Select Status---</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    {/* Action buttons */}
                    <div className='mt-4 flex justify-center mb-3 space-x-3'>
                        <button className='py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800'>Add Todo</button>
                        <button className='py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-800'>Clear</button>
                    </div>

                    {JSON.stringify(task)}
                </form>
            </div>

        </div>
    )
}

export default AddTask;
