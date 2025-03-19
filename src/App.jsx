import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { useState, useEffect } from "react";

function App() {
  const [DarkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  
  useEffect(() => {
    localStorage.setItem('theme', DarkMode ? 'dark' : 'light');
    
    if (DarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [DarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  }

  return (
    <div className="min-h-screen bg-white dark:selection:bg-white dark:selection:text-black dark:bg-black static pt-16 md:pt-24 overflow-x-hidden">
      <Nav toggleDarkMode={toggleDarkMode} isDarkMode={DarkMode} />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <footer className="text-center bg-naturalblack text-white dark:text-gray-400 dark:bg-naturalblack py-1 md:py-1 text-sm md:text-lg md:tracking-wider font-oswald">
        Made with ❤️ by Vaibhav Raj Tyagi.
      </footer>
    </div>
  );
}

export default App;
