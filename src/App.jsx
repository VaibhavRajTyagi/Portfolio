import profileImage from "./assets/IMG_9996.png";
import Nav from "./components/navbar";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <div className="main static pt-24">
        <Nav />
        <div className="landingDiv flex-grow h-full bg-black text-white flex justify-center items-center gap-24 m-4">
          <div className="TextDiv flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">
              Hello, I&apos;m{" "}
              <span className="text-green-500">Vaibhav Raj Tyagi</span>.
            </h1>
            <p className="text-lg">I&apos;m a Full Stack Developer.</p>
          </div>
          <div className="ImageDiv border-4 border-dotted border-white overflow-hidden object-cover w-80 h-80 rounded-full">
            <img
              className="bg-[#141313]"
              src={profileImage}
              alt="PFP"
            />
          </div>
        </div>
        <Contact className="h-full w-full" />
        <footer className="text-center bg-slate-500">
          Made by Vaibhav Raj Tyagi.
        </footer>
      </div>
    </>
  );
}

export default App;
