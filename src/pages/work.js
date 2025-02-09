import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Sund By Netværket",
    image: "/images/sbn-billede.png",
    link: "/sbn",
    category: "CMS Website - WordPress",
  },
  {
    title: "Coffee NO.1",
    image: "/images/coffeenr1-billede.png",
    link: "/coffeenr1",
    category: "CMS Website - WIX",
  },
  {
    title: "Karin Margarita Frei",
    image: "/images/kmf-billede.png",
    link: "/kmf",
    category: "CMS Website - WordPress",
  },
  {
    title: "Bachelor Project",
    image: "/images/bachelorbillede.png",
    link: "/bachelorprojekt",
    category: "Bachelor Project - CMS & React",
  },
];

const Work = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-5 py-16"
      style={{
        background: "linear-gradient(to bottom, #C09891, #4c342b)",
      }}
    >
      <motion.h1
        className="text-4xl lg:text-6xl font-heading text-white text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work
      </motion.h1>
      <motion.p
        className="text-text lg:text-lg text-base text-center font-body max-w-2xl mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My latest web design projects and see how we can help bring your ideas to life.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Link to={project.link} className="block relative">
              {/* IMAGE + OVERLAY */}
              <div className="relative w-full h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-0"></div>
              </div>

              {/* TEXT INFO */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#4c342b] to-transparent p-4 text-white">
                <h2 className="text-lg font-medium font-heading">{project.title}</h2>
                <p className="text-sm font-body">{project.category}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
