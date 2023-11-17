import React,{useState,useContext, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import { TodoContext } from '../context/todoContext'


export const Addtodo = () => {

  const [title,setTitle] = useState("")
  const [todos,setTodos] = useContext(TodoContext)


  const addTodo =(e)=>{

    e.preventDefault();

    if('' ===title || undefined === title){
      alert("fields can not be blank");

      return;
    }
  const newTodos = [...todos,{id:uuidv4(), title:title, completed:false}]

  setTodos(newTodos)
  setTitle("")


  }

  useEffect(()=>{
localStorage.setItem('todos', JSON.stringify(todos))

  },[todos])


  return (
    <div className='flex mt-3'>
      <input value={title} placeholder='Add todo...' onChange={(e)=>{setTitle(e.target.value)}} className='border w-64 pl-2  bg-[#f9f9f9] outline-none border-none rounded-md' />
      <button type="button" className='border-none py-1 w-16 bg-gray-200' onClick={addTodo}>Add</button>
    </div>
  )
}
