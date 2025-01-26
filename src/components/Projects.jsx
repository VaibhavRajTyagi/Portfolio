
const cardContent = [
  {
    title: "Project 1",
    description: "Description 1",
    image: "image1.jpg",
  },
  {
    title: "Project 2",
    description: "Description 1",
    image: "image1.jpg",
  },
  {
    title: "Project 3",
    description: "Description 1",
    image: "image1.jpg",
  },
  {
    title: "Project 4",
    description: "Description 1",
    image: "image1.jpg",
  },

];

const Projects = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="title text-center text-3xl md:text-4xl font-bold mt-20 md:mt-40 mb-12 md:mb-20">
        <h1 className="text-white">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cardContent.map((card, index) => (
          <div key={index} className="card border border-white p-4 rounded-lg hover:scale-105 transition-transform duration-300">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm md:text-base text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects
