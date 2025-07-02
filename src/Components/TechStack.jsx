import React from 'react';

const TechStack = () => {
  const technologies = [
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-js-square', name: 'JavaScript (ES6)' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-npm', name: 'npm Packages' },
    { icon: 'fab fa-evernote', name: 'PostgreSQL' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fab fa-server', name: 'MySQL' },
    { icon: 'fas fa-server', name: 'PostgreSQL' }
  ];

  return (
    <section id="techstack" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="card p-6 rounded-xl text-center">
              <i className={`${tech.icon} tech-icon`}></i>
              <h4 className="font-semibold">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;