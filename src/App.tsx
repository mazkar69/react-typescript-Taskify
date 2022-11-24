import React, { useEffect, useState } from 'react'
import './App.css';
import InputFeild from './component/InputFeild';
import { Todo } from './model';
import TodoList from './component/TodoList';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])
  // const [completedTodos,setCompletedTodos] = useState<Todo[]>([])
  const activeTodos = todos.filter((todo) => {
    return !todo.isDone
  })

  const completeTodos = todos.filter((todo) => {
    return todo.isDone
  })

  const setStroage = () => {

    localStorage.setItem("todos", JSON.stringify(todos))
    // console.log("Set in the storage")
    // const data = JSON.parse(localStorage.getItem('todos') || '{}');
    // // console.log(data)
  }



  const handleAdd = (e: React.FormEvent) => {

    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setStroage();
    }
    setTodo("");


  }

  const intialise = () => { 
    if (localStorage.getItem("todos") === null) {
      console.log("in if block")
        localStorage.setItem("todos",'')
    }
    else{

      const data = JSON.parse(localStorage.getItem('todos') || '{}');
      
      // console.log(data);
      setTodos(data);
    }


   }
  useEffect(() => {
    intialise();

  }, [])

  useEffect(()=>{
    // console.log(todos)
    setStroage();
  },[todos])



  return (
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completeTodos} activeTodos={activeTodos} />

    </div>
  )
}

export default App