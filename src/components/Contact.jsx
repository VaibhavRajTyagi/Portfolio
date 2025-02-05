const Contact = () => {
  const hoverColor = () => {
    return 'hover:text-blue-500 transition-colors duration-300';
  };

  return (
    <div className="my-4 py-4 md:px-8">
      <div className="heading flex items-center justify-center">
      <h1 className="dark:text-white text-4xl font-bold">Contact</h1>
      </div>
    <div className="flex flex-col justify-center items-center dark:bg-black dark:text-white p-4 md:p-7 space-y-4 md:space-y-6">
      <p className="text-center text-sm md:text-base px-4 max-w-md">
        For collaboration or for projects, you can directly contact me on the below links.
      </p>
      <div className="flex flex-col text-center md:flex-row gap-3 md:gap-6">
        <a className={hoverColor()} href="">Gmail</a>
        <a className={hoverColor()} href="">Github</a>
        <a className={hoverColor()} href="">LinkedIn</a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
