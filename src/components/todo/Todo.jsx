import "./Todo.css"
import { useState } from "react";
function Todo() {
    const [newTodo, createNewTodo] = useState("");
    const [todos, setTodo] = useState([]);
    const [dragging, setDragging] = useState(null);

    function handleSubmit(e) {
        e.preventDefault()
        setTodo(currentTodo => {
            return [...currentTodo, { id: crypto.randomUUID(), title: newTodo, completed: false }]
        })
        e.target.reset();
        createNewTodo("");
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
    function handleDragStart(e, id) {
        setDragging(id);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }
    function handleDrop(e, id) {
        if (dragging !== id) {
            const newTodos = [...todos];
            const draggedTodo = newTodos.find(todo => todo.id === dragging);
            const droppedTodo = newTodos.find(todo => todo.id === id);
            const draggedIndex = newTodos.indexOf(draggedTodo);
            const droppedIndex = newTodos.indexOf(droppedTodo);
            newTodos.splice(droppedIndex, 0, newTodos.splice(draggedIndex, 1)[0]);
            setTodo(newTodos);
        }
    }
    return (
        <>
            <section className="todo-about">
                <form className="todo-container" onSubmit={handleSubmit}
                    value={newTodo}
                    onChange={e => createNewTodo(e.target.value)}>
                    <div className="input-container">
                        <button className="round" ></button>
                        <input type="text" name="todo-input" id="todo-input" placeholder="Create a new todo…" />
                    </div>
                </form>
                <ul className="todo-section">
                    {todos.map(todo => {
                        return <li key={todo.id} className="todo" draggable={true}
                            onDragStart={e => handleDragStart(e, todo.id)}
                            onDragOver={handleDragOver}
                            onDrop={e => handleDrop(e, todo.id)}>
                            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                            {todo.title}
                        </li>
                    }
                    )}
                    <div className="filter-container">
                        <p> items left</p>
                        <div className="buttons">
                            <button>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>
                        <button onClick={() => deleteTodo}>Clear Completed</button>
                    </div>
                </ul>
            </section>
            <p className="drag-drop">Drag and drop to reorder list</p>
        </>
    )
}
export default Todo