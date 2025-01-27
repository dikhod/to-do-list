import React, { useState,useEffect } from 'react'
import Todo from '../Todo/Todo'

import classes from './TodoList.module.css';


const TodoList = ({todos,deleteTodo,toggleCompleted}) => {
  
return (
    <section >
    
    <ul>
     {
        todos.map((todo)=>{
            return <Todo
              id={todo.id}
              key={todo.id}
              todoText={todo.todoText}
              completed={todo.completed}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              />
        })
     }
    </ul>
    </section>
  
  )
}

export default TodoList