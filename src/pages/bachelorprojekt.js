import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BachelorProjekt() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-5 py-10 bg-gradient-to-b from-primary to-accent text-text">
      <div className="max-w-6xl w-full">
        {/* HEADER */}
        <motion.h1
          className="text-3xl md:text-6xl font-heading text-background text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bachelor Project
        </motion.h1>
        <p className="text-center text-sm md:text-lg font-body text-background mb-10">
          My final bachelor's project, where I developed a website using WordPress as a headless CMS and React for the frontend for Sund By Netværket. The project demonstrated my ability to combine CMS and modern web technologies, and I achieved the highest grade, 12, for my work.
        </p>

        {/* INFO SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          {[
            { title: "Client", value: "Sund By Netværket" },
            { title: "Timeline", value: "12 weeks" },
            { title: "Services", value: "Headless CMS, Web Development" },
            { title: "Website", value: <a href="https://sund-by-net.dk/" className="underline text-background">sund-by-net.dk</a> }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-background p-3 md:p-4 rounded-lg text-background font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xs md:text-sm uppercase text-secondary">{item.title}</h3>
              <p className="text-base md:text-lg font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE WITH SMOOTH OVERLAY */}
        <div
          className="relative rounded-lg overflow-hidden shadow-lg mb-10 cursor-pointer"
          onTouchStart={() => setIsHovered(!isHovered)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src="/images/bachelorbillede.png"
            alt="Bachelor Project"
            className="w-full transition-opacity duration-500"
            animate={{ opacity: isHovered ? 1 : 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isHovered ? 0 : 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* NEW LAYOUT - LEFT TEXT, RIGHT BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            <h3 className="text-sm md:text-xl font-body text-background uppercase">
              Prof. Bachelor Project
            </h3>
            <h2 className="text-2xl md:text-4xl font-heading text-background mt-2">
              Headless CMS & Modern Frontend Development.
            </h2>
          </div>

          {/* RIGHT SIDE - BOXES */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Challenge",
                description: "Sund By Netværket needed a modern, dynamic, and scalable website that could be easily managed by non-technical staff, while maintaining fast performance and accessibility."
              },
              {
                title: "Goal",
                description: "To build a professional website using WordPress as a headless CMS for easy content management, combined with a React frontend to ensure fast performance, SEO optimization, and an engaging user experience."
              },
              {
                title: "Result",
                description: "A fully functional, high-performing website with a seamless WordPress-React integration. The project successfully demonstrated how modern web development can enhance both content management and frontend interactivity."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-background p-4 md:p-6 rounded-lg text-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-heading">{item.title}</h3>
                <p className="mt-2 text-xs md:text-sm font-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NEXT PROJECT BUTTON */}
        <div className="mt-16 text-center">
          <Link to="/sbn">
            <motion.button
              className="bg-secondary text-white font-body px-6 py-3 rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Next Project: Sund By Netværket →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BachelorProjekt;
