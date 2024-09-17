import React from 'react'

import tick from "../assets/check.png"
import not_tick from "../assets/square.png"
import delete_icon from "../assets/deletar.png"

const TodoItem = ({ text, id, isComplete, toggle, deleteTask }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer' onClick={() => {toggle(id)}}>
        <img src={isComplete ? tick : not_tick} className='w-7' alt="Tick task icon" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
            {text}
        </p>
      </div>

      <img src={delete_icon} className='w-4 cursor-pointer' alt="Delete task icon" onClick={() => {deleteTask(id)}} />
    </div>
  )
}

export default TodoItem
