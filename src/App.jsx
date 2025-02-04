import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="main static pt-16 md:pt-24">
        <Nav />
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
    </>
  );
}

export default App;
