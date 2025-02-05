import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CoffeeNr1() {
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
          Coffee No.1
        </motion.h1>
        <p className="text-center text-sm md:text-lg font-body text-background mb-10">
          A modern and cozy café experience brought to life with a fresh website design.
        </p>

        {/* INFO SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          {[
            { title: "Client", value: "Coffee No.1" },
            { title: "Timeline", value: "3 months" },
            { title: "Services", value: "Web Design & UX" },
            { title: "Website", value: <a href="https://www.coffeeno1.dk/" className="underline text-background">coffeeno1.dk</a> }
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
            src="/images/coffeenr1-billede.png"
            alt="Coffee No.1"
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
              Client - Coffee Shop
            </h3>
            <h2 className="text-2xl md:text-4xl font-heading text-background mt-2">
              A fresh and welcoming digital presence.
            </h2>
          </div>

          {/* RIGHT SIDE - BOXES */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Challenge",
                description: "Coffee No.1 needed a modern and inviting website that captured the warmth and quality of their café experience while ensuring easy navigation for customers."
              },
              {
                title: "Goal",
                description: "To design a visually appealing, easy-to-use website that reflects the brand’s identity and helps customers explore the menu, locations, and offers seamlessly."
              },
              {
                title: "Result",
                description: "A beautifully designed website with a warm, coffee-inspired color palette, improved user experience, and seamless online ordering integration."
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
          <Link to="/kmf" onClick={() => window.scrollTo(0, 0)}>
            <motion.button
              className="bg-secondary text-white font-body px-6 py-3 rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Next Project: Karin Margarita Frei →
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default CoffeeNr1;
