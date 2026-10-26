import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Matchbest Software Pvt. Ltd.',
      period: 'Sept 2025 - Present',
      location: 'Gurugram, India',
      description: 'Working on scalable AI and CRM platforms using microservices architecture. Integrated AI models with credit-based systems and developed full-featured CRM/CMS solutions.',
      achievements: [
        'Xelta.ai — Built scalable AI platform with microservices; integrated BytePlus & Kling AI models with a credit-based system using Next.js, TypeScript, Node.js, Express, Redis, Docker, PostgreSQL/MongoDB',
        'Xelta CMS — Developed CRM/CMS system with React.js, TypeScript, HTML, CSS, Bootstrap; integrated RESTful APIs with real-time data handling and efficient state management',
        'AVA-CRM — Built CRM frontend using React.js & TypeScript; integrated voice bot APIs and ensured real-time data synchronization via REST APIs'
      ]
    },
    {
      title: 'MERN Stack Intern',
      company: 'Techpile Technology Pvt. Ltd.',
      period: '2024 - 2025',
      location: 'Lucknow, India',
      description: 'Completed MERN Full Stack training, gaining hands-on experience in MongoDB, Express.js, React, and Node.js for building full-stack web applications.',
      achievements: [
        'Gained hands-on experience with the complete MERN stack (MongoDB, Express.js, React, Node.js)',
        'Developed and deployed multiple full-stack web applications during internship',
        'Worked on RESTful API design, integration, and JWT authentication'
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