import React from 'react';

const Projects = () => {
  const professionalProjects = [
    {
      gradient: 'from-violet-600 to-indigo-700',
      icon: 'fa-solid fa-robot',
      title: 'Xelta.ai',
      badge: 'AI Platform',
      description: 'Scalable AI platform built with microservices architecture. Integrated BytePlus & Kling AI models with a credit-based billing system.',
      tags: [
        { name: 'Next.js', color: 'bg-indigo-600' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Redis', color: 'bg-red-600' },
        { name: 'Docker', color: 'bg-sky-600' },
        { name: 'PostgreSQL', color: 'bg-purple-600' }
      ],
      links: [
        { text: 'Live Demo', url: 'https://xelta.ai/', external: true },
      ]
    },
    {
      gradient: 'from-cyan-600 to-blue-700',
      icon: 'fa-solid fa-table-columns',
      title: 'Xelta CMS',
      badge: 'CRM / CMS',
      description: 'Full-featured CRM/CMS system with real-time data handling, state management, and seamless RESTful API integration.',
      tags: [
        { name: 'React.js', color: 'bg-cyan-600' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Bootstrap', color: 'bg-purple-600' },
        { name: 'REST API', color: 'bg-green-600' }
      ],
      links: []
    },
    {
      gradient: 'from-emerald-600 to-teal-700',
      icon: 'fa-solid fa-headset',
      title: 'AVA-CRM',
      badge: 'CRM',
      description: 'CRM frontend with integrated voice bot APIs, real-time data updates, and seamless REST API synchronization.',
      tags: [
        { name: 'React.js', color: 'bg-emerald-600' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Voice Bot API', color: 'bg-teal-600' },
        { name: 'REST API', color: 'bg-green-600' }
      ],
      links: [
        { text: 'Live Demo', url: 'https://crm.avasuite.ai/', external: true },
      ]
    },
  ];

  const personalProjects = [
    {
      gradient: 'from-blue-500 to-purple-600',
      icon: 'fa-solid fa-house-chimney-medical',
      title: 'Hospital Management System',
      description: 'Full-stack HMS with TypeScript, Node.js, JWT authentication, and PostgreSQL. Built RESTful APIs and managed medical records.',
      tags: [
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Next.js', color: 'bg-indigo-600' },
        { name: 'PostgreSQL', color: 'bg-purple-600' }
      ],
      links: [
        { text: 'GitHub', url: 'https://github.com/sonusahani-dev/HMS', external: true }
      ]
    },
    {
      gradient: 'from-purple-500 to-pink-600',
      icon: 'fa-solid fa-photo-film',
      title: 'Pixelsphere',
      description: 'Photo sharing platform with React.js, Redux state management, and Restful API integration.',
      tags: [
        { name: 'Next.js', color: 'bg-blue-600' },
        { name: 'Redux', color: 'bg-purple-600' },
        { name: 'REST API', color: 'bg-green-600' }
      ],
      links: [
        { text: 'Live Demo', url: 'https://pixelsphere.netlify.app/', external: true },
        { text: 'GitHub', url: 'https://github.com/sonusahani-dev/pixelsphere', external: true }
      ]
    },
    {
      gradient: 'from-amber-500 to-orange-600',
      icon: 'fa-solid fa-hotel',
      title: 'Destination-Hotel App',
      description: 'MERN hotel booking app with dynamic schemas, CRUD operations, and Context API state management.',
      tags: [
        { name: 'React.js', color: 'bg-yellow-600' },
        { name: 'Context API', color: 'bg-red-600' },
        { name: 'REST API', color: 'bg-pink-600' }
      ],
      links: [
        { text: 'GitHub', url: 'https://github.com/sonusahani-dev/general-assessment-sonu-sahani', external: true }
      ]
    },
    {
      gradient: 'from-green-500 to-blue-600',
      icon: 'fa-solid fa-utensils',
      title: 'Swiggy Replica',
      description: 'Swiggy clone built with HTML, CSS, and Bootstrap replicating the food delivery UI/UX.',
      tags: [
        { name: 'HTML', color: 'bg-orange-600' },
        { name: 'CSS', color: 'bg-yellow-600' },
        { name: 'Bootstrap', color: 'bg-purple-600' }
      ],
      links: [
        { text: 'GitHub', url: 'https://github.com/sonusahani-dev/swiggy', external: true }
      ]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="card rounded-xl overflow-hidden flex flex-col">
      <div className={`h-44 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center relative`}>
        <i className={`${project.icon} text-4xl text-white mb-2`}></i>
        {project.badge && (
          <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
            {project.badge}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className={`${tag.color} text-xs px-2 py-1 rounded`}>{tag.name}</span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="flex gap-4 mt-auto">
            {project.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm font-medium transition-colors"
              >
                {link.text} {link.external && <i className="fas fa-external-link-alt text-xs ml-1"></i>}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Featured Projects</h2>
        <p className="text-center text-gray-400 mb-16">A mix of professional work and personal builds</p>

        {/* Professional Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></span>
            <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
              <i className="fas fa-briefcase text-sm"></i> Professional Projects
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50"></span>
            <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
              <i className="fas fa-code text-sm"></i> Personal Projects
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50"></span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
