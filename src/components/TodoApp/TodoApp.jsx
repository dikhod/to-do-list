import React,{useEffect, useState} from 'react'
import TodoList from '../TodoList/TodoList'
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form/Form';
import classes from './TodoApp.module.css'
const TodoApp = () => {

const dummyData = JSON.parse(window.localStorage.getItem('todos')||'[]');
//   const dummyData = [
//     {
//       id:1,
//       todoText:"go for shopping",
//       completed:true
//     },
//     {
//         id:2,
//         todoText:"go to gym",
//         completed:true
//     },
//     {
//         id:3,
//         todoText:"go to sleep",
//         completed:true
//     },
// ]
const [todos , setTodos] = useState(dummyData);

// const addTodo = (todo) =>{
// setTodos([...todos,{id:uuidv4(),todoText:todo,completed:false}]);
// console.log(todos);
// }

const addTodo = (todo) =>{
  setTodos((prevState)=>{
    return [...todos,{id:uuidv4(),todoText:todo,completed:false}]
  })}
 
// const deleteTodo = (todoId) =>{
//  const resTodo =   todos.filter((todo)=>{
//         todo.id!= todoId;
//     })
//   console.log(todoId);
//     setTodos(resTodo);
//     console.log(todos);
// }

const deleteTodo = (todoId) =>{
console.log(todoId);
setTodos((prevState)=>{
    return prevState.filter((todo)=>{
      return  todo.id !== todoId
    } )
})
}

const toggleCompleted = (todoId) =>{
  setTodos((prevState)=>{
    return prevState.map((todo)=>todo.id==todoId?{...todo,completed:!todo.completed}:todo);  //completed is not working fine.......
})}

useEffect(() => {
  
  window.localStorage.setItem('todos',JSON.stringify(todos));
}, [todos])

  return (
   <section className={classes['todo-list']}>
   <Form addTodo={addTodo}/>
    <TodoList 
    todos={todos}
    deleteTodo={deleteTodo}
    toggleCompleted={toggleCompleted}
    />
   </section>
  )
}

export default TodoApp