import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center py-20 px-6 md:px-12 lg:px-2"
    style={{
        background: "linear-gradient(to bottom, #C09891, #4c342b)",
      }}
    
    >
      
      {/* Let's Talk Section */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-heading text-text">
          Let's Talk
        </h1>
        <p className="mt-4 text-base md:text-lg font-body text-black">
          Have a project in mind? Looking for a creative web developer and designer? 
          Feel free to reach out, and let's create something amazing together.
        </p>

        {/* Buttons: Send Email & Download CV */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Send Email Button */}
          <motion.a
            href="mailto:your-email@example.com"
            className="bg-primary text-white font-body px-6 py-3 rounded-lg shadow-lg hover:bg-accent transition-all duration-300 flex items-center justify-center w-48"
            whileHover={{ scale: 1.05 }}
          >
            Send an Email
          </motion.a>

          {/* Download CV Button */}
          <motion.a
            href="/assets/HannahClausen-CV.pdf"
            download
            className="bg-secondary text-white font-body px-6 py-3 rounded-lg shadow-lg hover:bg-accent transition-all duration-300 flex items-center justify-center w-48"
            whileHover={{ scale: 1.05 }}
          >
            Download My CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
