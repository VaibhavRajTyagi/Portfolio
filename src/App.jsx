import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="main static pt-24">
        <Nav />
        <Home />
        <Contact />
        <footer className="text-center bg-slate-500">
          Made by Vaibhav Raj Tyagi.
        </footer>
      </div>
    </>
  );
}

export default App;
