import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-15">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="gradient-text">
            <Typewriter
              words={['Full Stack Developer', 'Frontend Specialist', 'React Next.js & TypeScript  Enthusiast']}
              loop={true}
              cursor
              cursorStyle={"|"}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Crafting exceptional web experiences with modern technologies
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#projects" className="btn-primary px-8 py-3 rounded-lg font-semibold text-white">View My Work</a>
          <a href="#contact" className="border border-gray-500 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
