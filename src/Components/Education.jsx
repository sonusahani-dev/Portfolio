import React from 'react';

const Education = () => {
  const educationItems = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude with a 3.8 GPA.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Full Stack Web Development',
      institution: 'freeCodeCamp',
      period: '2018',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, Node.js, React, and database management.'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div key={index} className="card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <i className={`${item.icon} text-3xl text-blue-400 mr-4`}></i>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-blue-400">{item.institution}</p>
                  <p className="text-gray-400">{item.period}</p>
                </div>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;