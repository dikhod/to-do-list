import React, { useRef } from 'react'
import classes from './Form.module.css';
const Form = (props) => {

    const inpRef = useRef();

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        props.addTodo(inpRef.current.value);
        inpRef.current.value='';
    }

  return (
    <>
    <form className={classes.form} onSubmit={formSubmitHandler}>
    <label htmlFor='addtodo' >Add Todo</label>
    <input className={classes['todo-text']} type='text' placeholder='Enter Todo..' ref={inpRef} required/>
    <button className={classes['form-btn']} type='submit'>Add</button>
    
    </form>
    </>
   
  )
}

export default Form