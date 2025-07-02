import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Lead frontend development for multiple high-traffic applications serving 100K+ users. Mentored junior developers and established best practices for the development team.',
      achievements: [
        'Reduced application load time by 40% through performance optimization',
        'Implemented automated testing reducing bugs by 60%',
        'Led migration from legacy jQuery to modern React architecture'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Developed responsive web applications and mobile apps using React and React Native. Collaborated with design team to implement pixel-perfect UI components.',
      achievements: [
        'Built 5+ production applications from scratch',
        'Implemented responsive design for mobile-first approach',
        'Integrated third-party APIs and payment systems'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'WebSolutions Agency',
      period: '2019 - 2020',
      location: 'New York, NY',
      description: 'Started my professional journey developing websites for small businesses and learning modern web development practices.',
      achievements: [
        'Created 20+ responsive websites for clients',
        'Learned React.js and modern development workflows',
        'Collaborated with senior developers on larger projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <div className="text-gray-400">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, aIndex) => (
                  <li key={aIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;