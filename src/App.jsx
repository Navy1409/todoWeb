import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

const [todos, setTodos]=useState([])
const [todoValue, setTodoValue]=useState('')

function setAddTodos(newTodo){
  const newTodoList=[...todos, newTodo]
  setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList=todos.filter((todos,todoIndex)=>{
    return todoIndex!=index
  })
  setTodos(newTodoList)
}

function handleEditTodo(index){
  const editValue= todos[index]
  setTodoValue(editValue)
  handleDeleteTodo(index)
}

  return (
    <>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} setAddTodos={setAddTodos} />
     <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
