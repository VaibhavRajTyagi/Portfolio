import EducationTimeline from "./EducationTimeline";


const About = () => {
  return (
    <div className="mt-40 mb-12 text-black dark:text-white">
      <div className="heading  text-4xl text-center mx-4 my-12 md:mx-8 font-bold font-oswald">
        <h1>About</h1>
      </div>
      <div className="disc m-4 px-4 text-center">
        <p className="font-geist">
          Hey, I&apos;m Vaibhav a 2024 Masters Of Computer Applications graduate
          from the College Of Engineering Roorkee. I&apos;m a beginner
          full-stack engineer, with particular proficiency in ReactJS and
          front-end. I like building and designing monochromatic, minimalist and modern
          looking websites. I&apos;m still in the learning process and will
          continually keep upgrading my projects along with my knowledge and
          skills.
        </p>
      </div>
      <div className="education w-full dark:bg-black flex justify-center mt-12">
        <div className="section-padding w-full mx-40">
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
};

export default About;
