import Todo from "../../components/todo/Todo"
import "./Home.css"
import themeIcon from "../../assets/images/icon-moon.svg"
function Home() {
    return (
        <>
            <section className="main-container">
                <div className="main-header">
                    <h1>TODO</h1>
                    <div>
                        <img src={themeIcon} alt="theme-icon" />
                    </div>
                </div>
                <Todo />
            </section>
        </>
    )
}
export default Home