import { useState } from "react";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);

  const work = [
    {
      id: "1",
      projectName: "Tour Booking app - Full Stack",
      icon: "./assets/work-11.png",
      image: "./assets/work-1.png",
      description:
        "A full-stack tour booking platform with destination discovery, package booking, user dashboards, and secure payment integration.",
      fullDescription: `🔹 Full Description
Tour Booking App is a scalable full-stack travel management application that enables users to explore destinations, discover tour packages, and book trips seamlessly. It provides features such as destination browsing, package details, booking management, and user profiles for a smooth travel experience.The platform supports multiple roles including users, tour organizers, and admins, with dedicated dashboards for managing bookings, tour packages, users, and platform activities.The system integrates secure online payment processing, allowing users to complete bookings safely and track their booking status. Organizers can create and manage tour packages, monitor bookings, and manage customer details, while admins oversee overall platform activity.
  🔹 Tech Stack
React, TailwindCSS, Redux Toolkit, Node.js, Express.js, MongoDB, Stripe API`,
      link: "https://harmonious-meringue-959647.netlify.app/",
      github: "https://github.com/tamil12345-spec/tour-frontend.git",
      backendLink: "https://tour-backend-8c7w.onrender.com",
      backendGithub: "https://github.com/tamil12345-spec/tour-backend.git",
      tech: ["React", "Tailwind", "Node", "MongoDB", "Context API"],
    },

    {
      id: "3",
      projectName: "Online Food Delivery System- Full Stack",
      icon: "./assets/work-4.png",
      image: "./assets/work-41.png",
      description:
        "Online Food Delivery System — Full-Stack MERN Application with Restaurant Discovery, Online Ordering & Secure Payments",
      fullDescription: `Online Food Delivery System is a full-stack food ordering application built using the MERN stack, enabling users to discover restaurants, browse menus, customize food items, and place orders seamlessly. It provides restaurant search and filtering based on cuisine, location, ratings, and price range.
    The application includes real-time order status tracking, allowing users to monitor their orders through stages such as Preparing, Out for Delivery, and Delivered. Users can manage their cart, save favorite restaurants and menu items, view order history, and provide feedback and ratings. 
  🔹 TECH STACK

Frontend

React.js

Tailwind CSS

React Router

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

Authentication

JWT (JSON Web Token)

Payment Integration

Razorpay

Other Tools & Libraries

Axios (API calls)

CORS

React Hot Toast (notifications UI)

REST API`,   
      link: "https://splendorous-cat-9f9c5f.netlify.app/",
      github: "https://github.com/tamil12345-spec/foodie.git",
      backendLink: "https://food-back-0l68.onrender.com",
      backendGithub: "https://github.com/tamil12345-spec/food-back.git",
      tech: ["React", "Context API", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    },
    
   
    {
      id: "2",
      projectName: "Smart Expense Tracker - Full Stack",
      icon: "./assets/work-32.png",
      image: "./assets/work-3.png",
      description:
        "A smart expense tracking application with income and expense management, category-based insights, and interactive financial charts.",
      fullDescription: `🔹 Full Description
Smart Expense Tracker is a responsive financial management application that helps users efficiently track and manage their income and expenses. It provides an intuitive dashboard with real-time updates, category-based filtering, and visual insights to help users understand their spending patterns.Users can easily add, edit, and delete transactions while monitoring their total income, expenses, and balance. Interactive charts provide a clear overview of spending across different categories and financial trends.The application uses Context API for efficient state management and Tailwind CSS to create a clean, responsive, and user-friendly interface across different devices.
🔹 Tech Stack
React, Context API, Recharts, TailwindCSS`,
      link: " https://capable-piroshki-687510.netlify.app/login",
      github:
        "https://github.com/tamil12345-spec/Smart-Expense-Tracker-frontend.git",
      backendLink: "https://smart-expense-tracker-backend-8uns.onrender.com",
      backendGithub:
        "https://github.com/tamil12345-spec/Smart-Expense-Tracker-backend.git",
      tech: ["React", "Context API", "Recharts", "TailwindCSS","Node.js", "MongoDB"],
    },

  ];

  return (
    <>
      <div id="work" className="w-full px-4 sm:px-8 lg:px-[10%] py-16">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          My Projects
        </h2>

        {/* ✅ GRID FIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedWork(item)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col overflow-hidden">
              {/* Image */}
              <img
                src={item.icon}
                alt={item.projectName}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {item.projectName}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 text-sm mt-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline">
                    🔗 Frontend URL
                  </a>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:underline">
                    🐙 Frontend GitHub
                  </a>
                </div>
                {item.backendLink && (
                  <div className="flex gap-4 text-sm mt-2">
                    <a
                      href={item.backendLink}
                      target="_blank"
                      className="text-blue-500">
                      🔗 Backend URL
                    </a>

                    <a
                      href={item.backendGithub}
                      target="_blank"
                      className="text-gray-700">
                      🐙 Backend GitHub
                    </a>
                  </div>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ MODAL FIX */}
        {selectedWork && (
          <div
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
              <h2 className="text-xl font-bold text-blue-600 mb-4">
                {selectedWork.projectName}
              </h2>

              <img
                src={selectedWork.image}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <p className="text-gray-600 text-sm mb-4">
                {selectedWork.fullDescription}
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href={selectedWork.link}
                  target="_blank"
                  className="text-blue-500">
                  🔗 Frontend URL
                </a>

                <a
                  href={selectedWork.github}
                  target="_blank"
                  className="text-gray-700">
                  🐙 Frontend GitHub
                </a>
              </div>

              {selectedWork.backendLink && (
                <div className="flex gap-4 text-sm mt-2">
                  <a
                    href={selectedWork.backendLink}
                    target="_blank"
                    className="text-blue-500">
                    🔗 Backend URL
                  </a>

                  <a
                    href={selectedWork.backendGithub}
                    target="_blank"
                    className="text-gray-700">
                    🐙 Backend GitHub
                  </a>
                </div>
              )}

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedWork.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What i got</h4>
        <h2 className="text-center text-5xl font-Ovo">My Certificate</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Certified Full-Stack Developer with practical experience in building
          responsive web applications and implementing core frontend and backend
          functionalities using modern web technologies.
        </p>

        <div className="flex justify-center w-full ">
          <div>
            <img
              src="./assets/certificate.png"
              className="w-full"
              alt="certificate"
            />
          </div>
        </div>
      </div>
    </>
  );
}
