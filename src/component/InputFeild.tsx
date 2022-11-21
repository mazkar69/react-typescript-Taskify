import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=> void,
}
const InputFeild = ({todo,setTodo,handleAdd}:Props) => {
  const InputRef = useRef<HTMLInputElement>(null)
  return (
    
    <form className='input' onSubmit={(e)=>{handleAdd(e);
    InputRef.current?.blur();
    }}>
        <input type="text" ref={InputRef} value={todo} placeholder='Enter a task' className='input__box' onChange={(e)=>{
            setTodo(e.target.value);
        }}/>
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild