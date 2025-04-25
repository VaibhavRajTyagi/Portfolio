import weather_img from "../assets/images/weather_app_thumbnail.png";
import reviewer_img from "../assets/images/CodeReviewer_thumbnail.png";
import { CiShare1 } from "react-icons/ci";

const cardContent = [
  {
    title: "Weather App",
    description:
      "Made using free weather API. It follows modern design and is responsive for both desktop and mobile screens. The app showcases a simple interface which shows weather details for any city.",
    image: weather_img,
    livelink: "https://weather-app-vanilla-stack.vercel.app/",
    techstack: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "AiCodeR",
    description:
      "A code reviewer powered by AI with a straightforward and modern UI. This code reviewer helps in building better coding practises and habits.",
    image: reviewer_img,
    livelink: "https://aicodereviewer-odi7.onrender.com/",
    techstack: ["React.JS", "Express.JS", "Node.JS", "CSS"],
  },
];

const iconStyle = "min-w-5 min-h-5 text-white dark:text-black ml-2";

const Projects = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="title text-center text-3xl md:text-4xl font-bold mt-40 md:mt-40 mb-12 md:mb-20">
        <h1 className="text-black dark:text-white font-oswald">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cardContent.map((card, index) => (
          <div
            key={index}
            className="card border border-gray-400 dark:border-gray-600 p-4 rounded-lg flex flex-col md:hover:scale-105 duration-300"
          >
            <img
              loading="lazy"
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-fill rounded-md mb-4"
            />
            <h2 className="text-xl md:text-2xl dark:text-white font-semibold mb-2 font-geist">
              {card.title}
            </h2>
            <div className="flex items-center gap-2 text-xs mb-2 font-geist">
              {card.techstack.map((element) => (
                <div
                  key={element}
                  className="border dark:border-gray-600 rounded-2xl dark:text-white px-4 py-1"
                >
                  {element}
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base dark:text-gray-300 font-playfair tracking-wide flex-grow mb-4">
              {card.description}
            </p>
            <div className="mt-auto">
              <a
                href={card.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg dark:bg-white bg-black text-white dark:text-black px-2 text-center text-xs md:text-sm font-geist flex justify-center items-center h-8 md:h-10 w-[26%] md:w-[28%] z-[100]"
              >
                Live link <CiShare1 className={iconStyle} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
