import React from 'react';

function Home() {
  return (
    <section className="bg-background min-h-screen flex flex-col items-center justify-center px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl text-center md:text-left">
        {/* Tekst sektion */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="font-heading text-5xl text-primary ">
            Hi, I'm Hannah <br /> Web Designer & Developer
          </h1>
          <p className="font-body text-text text-lg">
            I specialize in creating visually appealing and highly functional websites. 
            My designs are intuitive, modern, and aligned with business needs.
          </p>
          <a 
            href="/cv/Hannah_Resume.pdf" 
            download
            className="bg-primary text-white font-body font-medium px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300 w-max"
          >
            Download My CV
          </a>
        </div>

        {/* Billede sektion */}
        <div className="flex justify-center items-center">
          <img 
            src="/images/HannahClausen-profilbillede.png" 
            alt="Hannah Clausen" 
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-8 border-secondary shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
