import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { useState, useEffect } from "react";

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [DarkMode]);

  const toggleDarkMode = () =>{
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
      <section id="contact">
        <Contact />
      </section>
      <footer className="text-center bg-gray-400 py-1 md:py-2 text-sm md:text-base">
        Made with ❤️ by Vaibhav Raj Tyagi.
      </footer>
    </div>
  );
}

export default App;
