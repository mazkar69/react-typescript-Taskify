
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos:Todo[],
    activeTodos:Todo[],


}
const TodoList = ({ todos, setTodos ,completedTodos,activeTodos}: Props) => {
    return (
        // <div className="todos">
        //     {
        //         todos.map((todo)=>{
        //             return (
        //                 <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>  
        //             )
        //         })
        //     }

        // </div>
        <div className="container">
            <div className="todos">
                <span className="todos__heading">
                    Active Task
                </span>
                {
                    activeTodos.map((todo) => {
                        return (
                            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                            )
                        })
                    }
            </div>
            <div className=" todos remove">
                <span className="todos__heading">
                    Completed Task
                </span>
                {
                    completedTodos.map((todo) => {
                        return (
                            <SingleTodo todo={todo} key={todo.id} todos={completedTodos} setTodos={setTodos} />
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList