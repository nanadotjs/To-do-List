import React, { useEffect, useRef, useState } from 'react'

import todo_icon from "../assets/lista-de-tarefas.png";
import TodoItem from './TodoItem';

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTask = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTask]);
        inputRef.current.value = "";
    }

    const deleteTask = (id) => {
        setTodoList((prev) => {
            return prev.filter((task) => task.id !== id);
        })
    }

    const toggle = (id) => {
        setTodoList((prev) => {
            return prev.map((task) => {
                if(task.id === id) {
                    return {...task, isComplete: !task.isComplete}
                }
                return task;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todoList));
    }, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* TITLE */}
      <div className='flex items-center mt-7 gap-2'>
        <img src={todo_icon} className='w-10' alt="logo icon" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* INPUT */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input type="text" ref={inputRef} placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' />
        <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-md cursor-pointer' onClick={add}>ADD</button>
      </div>

      {/* TO DO LIST */}
      <div>
        {todoList.map((task) => {
            return <TodoItem key={task.id} text={task.text} id={task.id} isComplete={task.isComplete} deleteTask={deleteTask} toggle={toggle} />
        })}
      </div>
    </div>
  )
}

export default Todo
