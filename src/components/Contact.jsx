const Contact = () => {
  const hoverColor = () => {
    return 'hover:text-green-500';
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white p-7">
      <p>For collaboration or for projects, you can directly contact me on the below links.</p>
      <a className={hoverColor()} href="">Gmail</a>
      <a className={hoverColor()} href="">Github</a>
      <a className={hoverColor()} href="">LinkedIn</a>
    </div>
  );
};

export default Contact;
