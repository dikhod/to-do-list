import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import classes from './Todo.module.css';

const Todo = ({id,todoText,completed,deleteTodo,toggleCompleted}) => {
  return (
    <li className={classes.todo} >
        <input onClick={()=>toggleCompleted(id)}type='checkbox' defaultChecked={completed}/>
        <span style={{textDecoration:completed?'line-through':'none',textDecorationColor:completed?'black':'none'}}>{todoText}</span>
        <span onClick={()=> deleteTodo(id)} className={classes.icon}><FaRegTrashCan /></span>
    </li>
  )
}

export default Todo