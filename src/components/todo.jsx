import React,{useContext} from 'react'
import { TodoContext } from '../context/todoContext'



export const Todo = (props) => {

  const [todos,setTodos] = useContext(TodoContext);

  const completeTodo =(e)=>{
    const filterTodos = todos.map((item)=>{
      if (item.id === e.target.value){
        item.completed=false;
        if(e.target.checked){
          item.completed = true;
        }
      }
      return item;
    })

    setTodos(filterTodos)
  }
 const deleteTodo =(e) =>{
  e.preventDefault();

const filteredTodo = todos.filter((item)=>{
  return item.id !== e.target.id;
})

setTodos(filteredTodo);

 }
 
const isCompleted = props.completed? 'checked' : '';


  return (
<p className='flex mt-3 p-1 py-2 rounded-md bg-[#f9f9f9] '>
  <div className='border w-64 flex gap-1 outline-none border-none '>
  <input type='checkbox' checked={isCompleted} id={props.id} value={props.id} className='border ' onChange={e=> completeTodo(e)} />
<label htmlFor={props.id} >{props.title}</label>
  </div>

<button type='button'id={props.id} className='border bg-red-600 text-white text-sm rounded-md w-14'onClick={e => deleteTodo(e)} >Delete</button>
</p> 
 )
}
