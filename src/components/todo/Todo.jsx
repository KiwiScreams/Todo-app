import "./Todo.css"
import { useState } from "react";
function Todo() {
    const [newTodo, createNewTodo] = useState("");
    const [filter, setFilter] = useState('all');
    const [todos, setTodo] = useState([]);
    const [dragging, setDragging] = useState(null);
    const leftCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;
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
    function clearCompletedTodos() {
        setTodo(currentTodo => {
            return currentTodo.filter(todo => !todo.completed);
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
    const handleFilterChaange = (filter) => {
        setFilter(filter);
    }
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
    })
    return (
        <>
            <section className="todo-about">
                <form className="todo-container" onSubmit={handleSubmit}
                    value={newTodo}
                    onChange={e => createNewTodo(e.target.value)}>
                    <div className="input-container">
                        <button className="round" disabled={newTodo.trim() === ""}></button>
                        <input type="text" name="todo-input" id="todo-input" placeholder="Create a new todo…" />
                    </div>
                </form>
                <ul className="todo-section">
                    {todos.length === 0 && (<p className="no-items">To-do list is empty</p>)}
                    {filteredTodos.map((todo) => (
                        <li key={todo.id} className="todo" draggable={true}
                            onDragStart={e => handleDragStart(e, todo.id)}
                            onDragOver={handleDragOver}
                            onDrop={e => handleDrop(e, todo.id)}>
                            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                            {todo.title}
                            <button onClick={() => deleteTodo(todo.id)} className="delete"></button>
                        </li>
                    ))}
                </ul>
                <div className="filter-container">
                    <div className="filter">
                        <p>{leftCount} items left</p>
                        <div className="buttons">
                            <button onClick={() => handleFilterChaange('all')} className={filter === 'all' ? 'active' : ''}
                                style={filter === 'all' ? { color: '#3A7CFD' } : {}}>All</button>
                            <button onClick={() => handleFilterChaange('active')} className={filter === 'active' ? 'active' : ''}
                                style={filter === 'active' ? { color: '#3A7CFD' } : {}}>Active</button>
                            <button onClick={() => handleFilterChaange('completed')} className={filter === 'completed' ? 'active' : ''}
                                style={filter === 'completed' ? { color: '#3A7CFD' } : {}}>Completed</button>
                        </div>
                        <button onClick={clearCompletedTodos}>Clear Completed</button>
                    </div>
                </div>
            </section>
            <p className="drag-drop">Drag and drop to reorder list</p>
        </>
    )
}
export default Todo