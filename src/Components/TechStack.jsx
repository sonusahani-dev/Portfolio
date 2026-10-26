import React from 'react';

const TechStack = () => {
  const technologies = [
    { icon: 'fab fa-react', name: 'React.js' },
    { icon: 'fab fa-js-square', name: 'JavaScript (ES6)' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap 5' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-github', name: 'GitHub' },
    { icon: 'fab fa-gitlab', name: 'GitLab' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fab fa-npm', name: 'npm' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fas fa-database', name: 'PostgreSQL' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fas fa-bolt', name: 'Redis' },
    { icon: 'fas fa-server', name: 'Express.js' },
    { icon: 'fas fa-wind', name: 'Tailwind CSS' },
    { icon: 'fas fa-code', name: 'TypeScript' },
    { icon: 'fas fa-layer-group', name: 'Next.js' },
    { icon: 'fas fa-arrows-rotate', name: 'Redux.js' },
    { icon: 'fas fa-vial', name: 'Postman' },
    { icon: 'fas fa-file-code', name: 'Swagger API' },
    { icon: 'fas fa-cloud', name: 'Netlify' },
    { icon: 'fas fa-globe', name: 'GoDaddy' }
  ];

  return (
    <section id="techstack" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-200">
              <i className={`${tech.icon} tech-icon`}></i>
              <h4 className="font-semibold text-sm mt-2">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;