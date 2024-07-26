import Todo from "../../components/todo/Todo"
import "./Home.css"
import themeIcon from "../../assets/images/icon-moon.svg"
function Home() {
    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    // }
    return (
        <>
            <section className="main-container" data-theme={theme}>
                <div className="main-header">
                    <h1>TODO</h1>
                    {/* <div className="theme-switch" onClick={toggleTheme}>
                        <img src={themeIcon} alt="theme-icon" className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`} /></div>*/}
                </div>
                <Todo />
            </section>
        </>
    )
}
export default Home