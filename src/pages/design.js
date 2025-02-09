import React, { useState } from "react";
import { motion } from "framer-motion";

function Design() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageType, setImageType] = useState(""); // Holder styr på typen af billede (Photography/Digital Design)

  const photographyImages = [
    "/photographyImages/DSC00027-Enhanced-NR.jpg",
    "/photographyImages/DSC08750-Enhanced-NR.jpg",
    "/photographyImages/DSC09076-Enhanced-NR.jpg",
    "/photographyImages/DSC09382-Enhanced-NR.jpg",
    "/photographyImages/DSC00027-Enhanced-NR.jpg",
    "/photographyImages/DSC00238-Enhanced-NR.jpg",
    "/photographyImages/DSC00261-Enhanced-NR.jpg",
    "/photographyImages/DSC09916-Enhanced-NR.jpg",
    "/photographyImages/DSC00345-Enhanced-NR.jpg",
    "/photographyImages/DSC00155-Enhanced-NR.jpg",
    "/photographyImages/8.png",
    "/photographyImages/DSC_0002.jpg",
    "/photographyImages/DSC_0006.jpg",
    "/photographyImages/DSC_0023.jpg",
    "/photographyImages/DSC_0097.jpg",
  ];

  const digitalDesigns = [
    "/digitalDesigns/holdkamp.png",
    "/digitalDesigns/Kortinvitationtilfødselsdag.png",
    "/digitalDesigns/plakatmedqr-kode.png",
  ];

  return (
    <section className="bg-background min-h-screen flex flex-col items-center">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen-75 flex flex-col items-center justify-center text-center text-white py-20">
        <div className="absolute inset-0">
          <img
            src="/images/DSC00222-Enhanced-NR.jpg"
            alt="Design Background"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>

        {/* Tekst og knapper */}
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl lg:text-6xl font-heading font-bold">
            Hannah Clausen
          </h1>
          <p className="mt-4 text-base lg:text-lg font-body leading-relaxed">
            Capturing the intensity and passion of sports, especially badminton.
            I also create promotional content and graphics for social media and
            events.
          </p>
        </motion.div>

        {/* Knapper */}
        <div className="relative z-10 mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#digitalDesign">
            <motion.button
              className="px-8 py-3 bg-primary text-white font-body rounded-lg shadow-lg hover:bg-secondary transition duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Digital Design
            </motion.button>
          </a>
          <a href="#photography">
            <motion.button
              className="px-8 py-3 bg-primary text-white font-body rounded-lg shadow-lg hover:bg-secondary transition duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Photography
            </motion.button>
          </a>
        </div>
      </div>

      {/* PHOTOGRAPHY SECTION */}
      <motion.div id="photography" className="w-full mt-16 pb-20">
        <h2 className="text-3xl font-heading text-primary mb-6 text-center">
          Photography
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {photographyImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setSelectedImage(image);
                setImageType("Photography");
              }}
            >
              <img
                src={image}
                alt={`Photography ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* DIGITAL DESIGN SECTION */}
      <motion.div id="digitalDesign" className="w-full mt-16 pb-20">
        <h2 className="text-3xl font-heading text-primary mb-6 text-center">
          Digital Design
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {digitalDesigns.map((design, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setSelectedImage(design);
                  setImageType("Digital Design");
                }}
              >
                <img
                  src={design}
                  alt={`Digital Design ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Billed-popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tekst øverst på billedet */}
            <div className="absolute top-5 left-1/2 transform translate-y-48 -translate-x-2 bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded">
              {imageType === "Photography"
                ? "Captured by Hannah Clausen"
                : "Created by Hannah Clausen"}
            </div>

            {/* Billede */}
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="h-screen-65 w-auto object-contain rounded-lg"
            />

            {/* Luk-knap i midten */}
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-46 translate-y-64 bg-accent bg-opacity-80 text-white hover:bg-secondary hover:text-black text-lg px-4 py-2 rounded-full cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Design;
