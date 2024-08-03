"use client"
import Link from 'next/link';
import React from 'react'

const CustomNavbar = () => {
  return (
    <>
    <nav className="bg-blue-600 h-14 py-2 px-4 flex justify-between items-center">
        <div className='brand'>
<h1 className='text-xl font-semibold'><a href="#">Work Manager</a></h1>
        </div>
        <div>
          <ul className='flex space-x-8'>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <a href="#">Add Task</a>
            </li>
            <li>
              <a href="#">Show Task</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex space-x-4'>
            <li>
              <a href="#">LogIn</a>
            </li>
            <li>
              <a href="#">SignUp</a>
            </li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default CustomNavbar
