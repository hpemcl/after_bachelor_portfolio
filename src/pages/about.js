import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function About() {
  const aboutMeRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" }); // Tjekker om det er mobil/tablet
  const [swiped, setSwiped] = useState(false);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-background text-text pb-20">
      {/* COVER IMAGE - Med overlay og tekst */}
      <motion.div
        className="relative w-full h-screen md:h-[50vh] flex justify-center items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Baggrundsbillede */}
        <img src="/images/bg-aboutme.png" alt="Cover" className="w-full h-full object-cover" />

        {/* Mørkt overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        {/* Tekst ovenpå billedet */}
        <div className="absolute text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-7xl font-heading">Hannah Clausen</h1>
          <p className="mt-4 text-sm md:text-lg font-body max-w-3xl">
            Multimedia Designer & Web Developer specializing in UI/UX and frontend technologies.
            Passionate about crafting visually compelling and user-friendly digital experiences.
          </p>

          {/* SWIPE BUTTON - Mobile Version */}
          {isMobile ? (
            <motion.div
              className="mt-6 flex items-center justify-center w-36 bg-white text-black font-bold text-lg px-6 py-3 rounded-full shadow-lg cursor-pointer"
              initial={{ x: 0 }}
              animate={swiped ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }}
              drag="x"
              dragConstraints={{ left: 0, right: 100 }}
              dragElastic={0.2}
              onDragEnd={() => {
                setSwiped(true);
                scrollToAboutMe();
                setTimeout(() => setSwiped(false), 1000); // Resetter swipe efter 1 sek.
              }}
            >
              Swipe →
            </motion.div>
          ) : null}

          {/* SCROLL DOWN BUTTON - Desktop version (Centreret) */}
          {!isMobile && (
            <motion.div 
              className="mt-8 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 1.5 } }}
              onClick={scrollToAboutMe}
            >
              <img src="/assets/pil.svg" alt="Arrow Down" className="w-6 h-6" />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* CONTENT AREA */}
      <div ref={aboutMeRef} className="w-full max-w-5xl px-6 md:px-12 lg:px-20 flex flex-col space-y-20 mt-10">
        {/* ABOUT ME BOX */}
        <motion.div
          className="lg:border lg:shadow-lg lg:p-10 text-left text-text w-full max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase font-semibold text-primary">About Me</p>
          <h2 className="text-3xl md:text-5xl font-heading mt-2">Your Digital Creative Partner</h2>
          <p className="text-base md:text-lg font-body mt-6">
            I am a Multimedia Designer with a Bachelor's degree in Web Development, specializing in frontend development and UX/UI design.
            My expertise lies in designing and developing visually appealing, user-friendly websites. With strong knowledge of React and various CSS frameworks, I create responsive and seamless user interfaces.
          </p>
          <p className="text-base md:text-lg font-body mt-4">
            Additionally, I have experience in backend development, including PHP and MySQL, providing a comprehensive understanding of web architecture.
            As a frontend developer and UX/UI designer, my goal is to bring my clients' visions to life through functional and aesthetically engaging digital experiences.
          </p>
          <p className="text-base md:text-lg font-body mt-4">I am confident in my ability to deliver exceptional results that exceed my clients' expectations.</p>

          {/* IMAGE (Centered in Box) */}
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="/images/bredtbillede.png" 
              alt="Hannah working" 
              className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[ 
              { title: "Instagram", link: "#", icon: "📷" },
              { title: "LinkedIn", link: "#", icon: "🔗" },
              { title: "Github", link: "#", icon: "🐙" },
              { title: "Linktree", link: "#", icon: "🌿" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="bg-secondary text-white font-body px-6 py-4 rounded-lg shadow-lg hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2 w-full"
                whileHover={{ scale: 1.05 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
