import Todo from "../../components/todo/Todo"
import "./Home.css"
import { useCallback, useState } from "react";
function Home() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.style.setProperty(
            '--background-image-light',
            `../../assets/images/bg-desktop-light.jpg`
          );
          document.documentElement.style.setProperty(
            '--background-image-dark',
            `../../assets/images/bg-desktop-dark.jpg`
          );
          document.documentElement.style.setProperty(
            '--background-image',
            newTheme === 'light' ? `var(--background-image-light)` : `var(--background-image-dark)`
          );
          document.documentElement.style.setProperty(
            '--background-color',
            newTheme === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)'
          );
      };
    return (
        <>
            <section className="main-container" data-theme={theme}>
                <div className="main-header">
                    <h1>TODO</h1>
                    <div className={`theme-switch ${theme === 'light' ? 'moon' : 'sun'}`} onClick={toggleTheme}>
                    </div>
                </div>
                <Todo />
            </section>
        </>
    )
}
export default Home