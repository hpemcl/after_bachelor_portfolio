import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SBN() {
  const [isHovered, setIsHovered] = useState(false);

  // Scroll til toppen ved sideskift
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-5 py-10 bg-gradient-to-b from-primary to-accent text-text">
      <div className="max-w-6xl w-full">
        {/* HEADER */}
        <motion.h1
          className="text-3xl md:text-6xl font-heading text-background text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sund By Netværket
        </motion.h1>
        <motion.p
          className="text-center text-sm md:text-lg font-body text-background mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A digital platform dedicated to promoting health and community well-being through innovative web solutions.
        </motion.p>

        {/* INFO SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          {[
            { title: "Client", value: "Sund By Netværket" },
            { title: "Timeline", value: "6 months (Completed: Feb 2025)" },
            { title: "Services", value: "Web Development & UX Design" },
            { title: "Website", value: <a href="https://sund-by-net.dk/" className="underline text-background">sund-by-net.dk</a> }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-background p-3 md:p-4 rounded-lg text-background font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xs md:text-sm uppercase text-secondary">{item.title}</h3>
              <p className="text-base md:text-lg font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE WITH SMOOTH OVERLAY */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg mb-10 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/images/sbn-billede.png"
            alt="Sund By Netværket"
            className="w-full transition-opacity duration-500"
            animate={{ opacity: isHovered ? 1 : 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isHovered ? 0 : 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* NEW LAYOUT - LEFT TEXT, RIGHT BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm md:text-xl font-body text-background uppercase">
              Client - Digital Health & Community Engagement
            </h3>
            <h2 className="text-2xl md:text-4xl font-heading text-background mt-2">
              Building a platform that supports healthier communities.
            </h2>
          </motion.div>

          {/* RIGHT SIDE - BOXES */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Challenge",
                description: "Sund By Netværket needed a modern and accessible website that effectively communicated their health initiatives and community programs."
              },
              {
                title: "Goal",
                description: "To create a user-friendly and engaging digital experience that highlights Sund By Netværket’s mission and connects communities through health-focused initiatives."
              },
              {
                title: "Result",
                description: "A fully optimized and accessible website that improves information sharing, enhances engagement, and supports the organization's health-driven vision."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-background p-4 md:p-6 rounded-lg text-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
          <Link to="/coffeenr1" onClick={() => window.scrollTo(0, 0)}>
            <motion.button
              className="bg-secondary text-white font-body px-6 py-3 rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Next Project: Coffee No.1 →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SBN;
