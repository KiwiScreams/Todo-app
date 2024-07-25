import "./Todo.css"
function Todo() {
    return (
        <>
            <section className="todo-container">
                <div className="input-container">
                    <div className="round"></div>
                    <input type="text" name="todo-input" id="todo-input" placeholder="Create a new todo…" />
                </div>
            </section>
        </>
    )
}
export default Todo