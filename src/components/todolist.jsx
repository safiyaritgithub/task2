import React,{useContext} from 'react'
import {Todo} from '../components/todo';
import { TodoContext } from '../context/todoContext'


export const Todolist = () => {

  const [todos,setTodos] = useContext(TodoContext)


  return (

1 <= todos.length ? todos.map(
  (item)=>{

    return(
    <Todo key={item.id} id={item.id} title={item.title} completed={item.completed}  />

    )
  }
) :(<p> No todo found.please add some todo....</p>)

  )
}
