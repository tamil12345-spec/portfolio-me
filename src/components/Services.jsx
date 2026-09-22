export default function Services() {
  const services = [
    {
      name: "HTML",
      icon: "./assets/html-icon.png",
    },
    {
      name: "CSS",
      icon: "./assets/css-icon.png",
    },
    {
      name: "Javascript",
      icon: "./assets/js-icon.png",
    },
    {
      name: "React",
      icon: "./assets/react-icon.png",
    },
    {
      name: "MongoDB",
      icon: "./assets/mongodb-icon.png",
    },
    {
      name: "Tailwind CSS",
      icon: "./assets/tailwindcss-icon.png",
    },
    {
      name: "Node Js",
      icon: "./assets/nodejs-icon.png",
    },
    {
      name: "Express Js",
      icon: "./assets/expressjs-icon.png",
    },
    {
      name: "Advanced JS",
      icon: "./assets/python-icon.png",
    },

    {
      name: "MySQL",
      icon: "./assets/mysql-icon.png",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i know</h4>
      <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a dedicated Full-Stack Developer focused on creating responsive,
        efficient, and visually appealing web applications.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-2 py-4 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={service.icon} alt="" className="w-10 mx-auto" />
            <h3 className="text-lg my-4 mx-auto text-center text-gray-700 dark:text-white">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
