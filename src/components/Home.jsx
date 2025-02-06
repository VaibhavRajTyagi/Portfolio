import profileImage from "../assets/images/anime-pfp.jpeg";
import resume from "../assets/Files/Recent_CV.pdf"
import Contact_icons from "./Contact_icons";

const Home = () => {


  return (
    <>
      <div className="landingDiv flex-grow h-full dark:bg-black dark:text-white flex flex-col md:flex-row justify-center items-center gap-20 md:gap-16 lg:gap-24 mt-24 md:mt-20 px-4">
        <div className="TextDiv flex flex-col justify-center items-center text-center lg:text-left">
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="text-blue-500">Vaibhav Raj Tyagi</span>.
          </h1>
          <p className="text-base md:text-lg">A Full Stack Developer.</p>
        </div>
        <div className="ImageDiv border-4 border-dotted border-black dark:border-white overflow-hidden object-cover w-60 h-60 md:w-68 md:h-68 lg:w-80 lg:h-80 rounded-full">
          <img className="dark:bg-[#141313] w-full h-full object-cover" src={profileImage} alt="PFP" />
        </div>
      </div>
      <Contact_icons />
    </>
  );
};

export default Home;
