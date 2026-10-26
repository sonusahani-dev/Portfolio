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
              Aspiring MERN Stack Developer with strong foundations in web development and programming. Proficient in building scalable and responsive applications using MongoDB, Express.js, React.js, and Node.js. Seeking opportunities to apply skills, contribute to impactful projects, and grow as a full-stack developer.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                <span>Gurugram, Haryana, India</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-400 mr-2"></i>
                <span>sonusahani.dev@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-blue-400 mr-2"></i>
                <span>+91 7080085907</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 flex items-center justify-center overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 0 40px rgba(102, 126, 234, 0.4)' }}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Sonu Sahani"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;