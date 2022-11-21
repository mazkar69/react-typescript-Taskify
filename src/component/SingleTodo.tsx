import React, { useState } from 'react'
import { Todo } from '../model';
import { MdOutlineDone } from 'react-icons/md'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'


interface Prop {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todos, setTodos }: Prop) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);



    const handleDone = (id: number) => {

        setTodos(todos.map((todo) => {
            return (
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        }))
    }
    const handleDelete = (id:number) => { 
        setTodos(todos.filter((todo)=>{
            return todo.id !== id;
        }))
     }
     const handleEdit = (e:React.FormEvent,id:number) => {
        e.preventDefault();
        setTodos(todos.map((todo)=>{
            return todo.id === id ? {...todo,todo:editTodo} : todo;
        }))
        setEdit(!edit)
    
     }
    return (

        <form className='todos__single' onSubmit={(e)=>{
            handleEdit(e,todo.id)
        }}>
            {
                edit ? (
                    <input type="text"  value={editTodo} onChange={(e)=>{
                        setEditTodo(e.target.value)
                    }}/>
                    ):(
                        todo.isDone ? (
                            <s className='todos__single--text'> {todo.todo}</s>) : 
                            (<span className='todos__single--text'>{todo.todo}</span>)
            
                        
                    )
            }
            

            <div>
                <span className='icon' onClick={() => handleDone(todo.id)}>
                    <MdOutlineDone />
                </span>
                <span className='icon'
                onClick={()=>{
                    if(!edit && !todo.isDone)
                    {
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={()=>handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </div>

        </form >
    )
}

export default SingleTodo