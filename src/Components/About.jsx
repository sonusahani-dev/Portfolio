import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hello! I'm Sonu Sahani</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate MERN Stack developer with 1+ years of experience creating beautiful, functional, and user-friendly applications. I specialize in modern JavaScript frameworks and have a keen eye for design and user experience.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                <span>Jankipuram sec-H, Lucknow</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-400 mr-2"></i>
                <span>sonusahani.dev@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;