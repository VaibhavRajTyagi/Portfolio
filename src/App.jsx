import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

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
        <section id="contact">
          <Contact />
        </section>
        <footer className="text-center bg-slate-500 py-2 md:py-4 text-sm md:text-base">
          Made by Vaibhav Raj Tyagi.
        </footer>
      </div>
    </>
  );
}

export default App;
