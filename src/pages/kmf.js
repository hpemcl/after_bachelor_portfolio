import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function KMF() {
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Karin Margarita Frei
        </motion.h1>
        <motion.p
          className="text-center text-sm md:text-lg font-body text-background mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A personal website sharing the journey of overcoming stress and embracing harmony in life.
        </motion.p>

        {/* INFO SECTION */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { title: "Client", value: "Karin Margarita Frei" },
            { title: "Timeline", value: "6 months" },
            { title: "Services", value: "Web Design, Storytelling & SEO" },
            { title: "Website", value: <a href="https://www.karinmargaritafrei.com/" className="underline text-background">karinmargaritafrei.com</a> }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-background p-3 md:p-4 rounded-lg text-background font-body"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs md:text-sm uppercase text-secondary">{item.title}</h3>
              <p className="text-base md:text-lg font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* IMAGE WITH SMOOTH OVERLAY */}
        <div
          className="relative rounded-lg overflow-hidden shadow-lg mb-10 cursor-pointer"
          onTouchStart={() => setIsHovered(!isHovered)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src="/images/kmf-billede.png"
            alt="Karin Margarita Frei"
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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-sm md:text-xl font-body text-background uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Client - Life, choices & balance
            </motion.h3>
            <motion.h2 
              className="text-2xl md:text-4xl font-heading text-background mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A journey towards self-discovery and harmony.
            </motion.h2>
          </div>

          {/* RIGHT SIDE - BOXES */}
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Challenge",
                description: "After years of overworking and experiencing stress, the client needed a platform to share personal experiences and help others find balance in life."
              },
              {
                title: "Goal",
                description: "To create an emotionally engaging and calming website that reflects her journey, combining storytelling with a visually harmonious design."
              },
              {
                title: "Result",
                description: "A website that feels like a peaceful sanctuary, sharing insights, experiences, and inspirations for a balanced life after burnout."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-background p-4 md:p-6 rounded-lg text-text"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base md:text-lg font-heading">{item.title}</h3>
                <p className="mt-2 text-xs md:text-sm font-body">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* NEXT PROJECT BUTTON */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/bachelorprojekt" onClick={() => window.scrollTo(0, 0)}>
            <motion.button
              className="bg-secondary text-white font-body px-6 py-3 rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Next Project: Bachelor Project →
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default KMF;
