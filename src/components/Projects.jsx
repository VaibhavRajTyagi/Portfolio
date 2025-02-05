import weather_img from "../assets/images/weather_app_thumbnail.png"

const cardContent = [
  {
    title: "Weather App",
    description: "Made using vanilla JS, HTML and CSS. It follows modern design and is responsive for only mobile and desktop screens for now. The app showcases a simple and modern interface which shows weather details for any city.",
    image: weather_img,
    link: "https://weather-app-vanilla-stack.vercel.app/"
  },
  {
    title: "Project 2",
    description: "Description 1",
    image: "image1.jpg",
    link: "https://Google.com"
  },
  {
    title: "Project 3",
    description: "Description 1",
    image: "image1.jpg",
    link: "https://Google.com"
  },
  
];

const Projects = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="title text-center text-3xl md:text-4xl font-bold mt-20 md:mt-40 mb-12 md:mb-20">
        <h1 className="text-black dark:text-white">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cardContent.map((card, index) => (
          <a 
            key={index} 
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-gray-400 dark:border-white p-4 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={card.image} alt={card.title} className="w-full h-64 object-fill rounded-md mb-4" />
            <h2 className="text-xl md:text-2xl text-blue-500 font-semibold mb-2">{card.title}</h2>
            <p className="text-sm md:text-base dark:text-gray-300 font-mono">{card.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects
