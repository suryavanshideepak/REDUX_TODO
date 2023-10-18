import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from './action/index'
import {useDispatch, useSelector} from 'react-redux';
import './App.css'

const Todo = () => {
    const [input,setInput]= useState('')
    const dispatch = useDispatch('')
    // const newlist=useSelector((state)=>{state.})
    
  return (
    <>
    <div className='main'>
        <div className='heading'>
            <h1>Redux ToDo App😎</h1>
        </div>
        <div className='form'>
            <input type="text" Placeholder="Enter something To add ➕" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={()=>dispatch(addTodo(input),setInput(''))}>➕</button>
        </div>
        <div className='showlist'>
            <h3>text</h3><button onClick={()=>dispatch(deleteTodo(input),setInput(''))}>➖</button>
            
        </div>
    </div>
    </>
  )
}

export default Todo