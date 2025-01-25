import profileImage from "../assets/images/pfp.png";

const Home = () => {
  return (
    <>
      <div className="landingDiv flex-grow h-full bg-black text-white flex justify-center items-center gap-24 m-4">
        <div className="TextDiv flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="text-blue-500">Vaibhav Raj Tyagi</span>.
          </h1>
          <p className="text-lg">I&apos;m a Full Stack Developer.</p>
        </div>
        <div className="ImageDiv border-4 border-dotted border-white overflow-hidden object-cover w-80 h-80 rounded-full">
          <img className="bg-[#141313]" src={profileImage} alt="PFP" />
        </div>
      </div>
    </>
  );
};

export default Home;
