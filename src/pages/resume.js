import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="bg-background min-h-screen flex flex-col items-center justify-center px-5 py-10">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <motion.h1
          className="text-4xl lg:text-5xl font-heading text-primary text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-heading text-primary mb-4">
              Education
            </h2>
            <div className="space-y-4 font-body">
              <p>
                <strong>2023 - 2025:</strong> Prof. Bachelor in Web Development
                at Zealand Erhvervsakademi
              </p>
              <p>
                <strong>2021 - 2023:</strong> Multimedia Design (Advanced Digital
                Development) at Zealand Erhvervsakademi
              </p>
              <p>
                <strong>2017 - 2020:</strong> H.C. Ørsted Gymnasium - HTX
                (Mathematics A & Programming B)
              </p>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-heading text-primary mb-4">
              Experience
            </h2>
            <div className="space-y-4 font-body">
              <p>
                <strong>2024 Aug - March 2025:</strong> Sund By Netværket - Web
                Designer/Developer & Student Assistant
              </p>
              <p>
                <strong>2023 - Now:</strong> Gladsaxe Søborg Badminton Club -
                Volunteering SoMe Employee & Website Designer
              </p>
              <p>
                <strong>2021 - Now:</strong> Badminton Coach (Gladsaxe &
                Vallensbæk)
              </p>
              <p>
                <strong>2023 (10 weeks):</strong> Dreamplan.io - Digital
                Designer Intern
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg mt-10 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-heading text-primary mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Design */}
            <div>
              <h3 className="text-lg font-heading text-primary mb-2">Design</h3>
              <ul className="space-y-2">
                {[
                  "Adobe Premiere Pro",
                  "Illustrator",
                  "Photoshop",
                  "Indesign",
                  "Adobe XD",
                  "Figma",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="text-text font-semibold font-body bg-primary text-white px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-lg font-heading text-primary mb-2">
                Frontend
              </h3>
              <ul className="space-y-2">
                {[
                  "HTML/CSS/SCSS",
                  "JavaScript",
                  "TailwindCSS",
                  "Bootstrap",
                  "TypeScript",
                  "React",
                  "Next.js",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="text-text font-body font-semibold bg-primary text-white px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-lg font-heading text-primary mb-2">
                Backend
              </h3>
              <ul className="space-y-2">
                {["PHP", "MySQL", "NoSQL"].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="text-text font-body font-semibold bg-primary text-white px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CMS Systems */}
            <div>
              <h3 className="text-lg font-heading text-primary mb-2">
                CMS Systems
              </h3>
              <ul className="space-y-2">
                {["WordPress", "Wix", "Zakobo"].map((cms, index) => (
                  <motion.li
                    key={index}
                    className="text-text font-body font-semibold bg-primary text-white px-4 py-2 rounded-lg"
                  >
                    {cms}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
