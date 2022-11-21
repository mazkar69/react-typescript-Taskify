import React, { useState } from 'react'
import './App.css';
import InputFeild from './component/InputFeild';
import { Todo } from './model';
import TodoList from './component/TodoList';


const App:React.FC = () => {
  
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([])
  // const [completedTodos,setCompletedTodos] = useState<Todo[]>([])
   const activeTodos = todos.filter((todo)=>{
    return !todo.isDone
   })
   const completeTodos = todos.filter((todo)=>{
    return todo.isDone
   })

   

  const handleAdd = (e : React.FormEvent)=>{

      e.preventDefault();
      if(todo)
      {
        setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      }
      setTodo("");
  }

  return (
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completeTodos} activeTodos={activeTodos}/>

    </div>
  )
}

export default App