import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 max-w-5xl text-center lg:text-left">
        
        {/* Tekst sektion */}
        <div className="flex flex-col items-center lg:items-start p-0 space-y-2">
          <h1 className="font-heading text-4xl lg:text-5xl text-primary pt-2">
            Hi, I'm Hannah <br /> Web Designer & Developer
          </h1>
          <p className="font-body text-sm lg:text-lg lg:py-4 py-2">
            I specialize in creating visually appealing and highly functional websites. 
            My designs are intuitive, modern, and aligned with business needs.
          </p>
          <a 
            href="/cv/Hannah_Resume.pdf" 
            download
            className="bg-primary text-white font-body font-medium px-4 py-2 lg:px-6 lg:py-3 rounded-lg shadow-md hover:bg-accent transition duration-300 mx-auto lg:mx-0 lg:self-start"
          >
            Download My CV
          </a>
        </div>

        {/* Billede sektion med baggrunds-kort */}
        <motion.div 
          className="relative grid place-items-center w-full max-w-xs sm:max-w-sm h-auto"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, rotate: 10 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Baggrunds-kort */}
          <motion.div
            className="absolute w-full h-full bg-accent rounded-2xl shadow-lg"
            style={{ rotate: '-4deg' }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Forgrunds-billedet */}
          <div className="relative z-10">
            <img 
              src="/images/HannahClausen-profilbillede.png" 
              alt="Hannah Clausen" 
              className="w-full max-w-xs sm:max-w-sm object-cover rounded-lg"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
