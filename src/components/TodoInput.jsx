import React, { useState } from 'react'

export default function TodoInput(props) {
  const {setAddTodos, todoValue, setTodoValue}= props
  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter Todo' />
      <button onClick={()=>{
        setAddTodos(todoValue)
        setTodoValue('')
        }}>Add</button>
    </header>
  )
}
