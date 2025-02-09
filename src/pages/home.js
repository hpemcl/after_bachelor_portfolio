import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl text-center lg:text-left">
        
        {/* Tekst sektion */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h1 className="font-heading text-4xl lg:text-5xl text-primary">
            Hi, I'm Hannah <br /> Web Designer & Developer
          </h1>
          <p className="font-body text-base lg:text-lg">
            I specialize in creating visually appealing and highly functional websites. 
            My designs are intuitive, modern, and aligned with business needs.
          </p>
          <a 
            href="/assets/HannahClausen-CV.pdf" 
            download
            className="bg-primary text-base text-white font-body font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-accent transition duration-300"
          > 
            Download My CV
          </a>
        </div>

        {/* Billede sektion med centreret alignment på tablet */}
        <motion.div 
          className="relative flex justify-center items-center w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0"
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
              src="/images/ny-pb.jpg" 
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
