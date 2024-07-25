import "./Todo.css"
import { useState } from "react";
function Todo()
{
    const [newTodo, createNewTodo] = useState("");
    const [todos, setTodo] = useState([]);
    function handleSubmit(e)
    {
        e.preventDefault()
        setTodo(currentTodo => {
          return [...currentTodo, { id: crypto.randomUUID(), title: newTodo, completed: false }]
        })
        createNewTodo("")
    }
    function toggleTodo(id, completed) {
        setTodo(currentTodo => {
          return currentTodo.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed }
            }
            return todo
          }
          )
        })
      }
      function deleteTodo(id) {
        setTodo(currentTodo => {
          return currentTodo.filter(todo => todo.id !== id)
        })
      }
    return (
        <>
            <form className="todo-container" onSubmit={handleSubmit} 
            value={newTodo}
              onChange={e => createNewTodo(e.target.value)}>
                <div className="input-container">
                    <div className="round"></div>
                    <input type="text" name="todo-input" id="todo-input" placeholder="Create a new todo…" />
                </div>
            </form>
        </>
    )
}
export default Todo