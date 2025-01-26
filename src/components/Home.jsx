import profileImage from "../assets/images/pfp.png";
import Contact_icons from "./Contact_icons";

const Home = () => {
  

  return (
    <>
      <div className="landingDiv flex-grow h-full bg-black text-white flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-10 md:mt-20 px-4">
        <div className="TextDiv flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="text-blue-500">Vaibhav Raj Tyagi</span>.
          </h1>
          <p className="text-base md:text-lg">I&apos;m a Full Stack Developer.</p>
        </div>
        <div className="ImageDiv border-4 border-dotted border-white overflow-hidden object-cover w-60 h-60 md:w-80 md:h-80 rounded-full">
          <img className="bg-[#141313] w-full h-full object-cover" src={profileImage} alt="PFP" />
        </div>
      </div>

      <Contact_icons/>
      
    </>
  );
};

export default Home;
