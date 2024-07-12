import { useState , useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

const [todos, setTodos]=useState([])
const [todoValue, setTodoValue]=useState('')

// function persistData(newItem) {
//   localStorage.setItem(todos, JSON.stringify({ todos: newItem }));
// }

function persistData(newItem) {
  localStorage.setItem('todos', JSON.stringify({ todos : newItem})); // Corrected here
}


function setAddTodos(newTodo){
  const newTodoList=[...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList=todos.filter((todos,todoIndex)=>{
    return todoIndex!=index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo(index){
  const editValue= todos[index]
  setTodoValue(editValue)
  handleDeleteTodo(index)
}

useEffect(() => {
  if(!localStorage){
    return
  }

  let localTodos= localStorage.getItem('todos')
  if(!localTodos){
    return
  }

  localTodos= JSON.parse(localTodos).todos
  setTodos(localTodos)

},[])

  return (
    <>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} setAddTodos={setAddTodos} />
     <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
