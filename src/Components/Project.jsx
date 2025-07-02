import React from 'react';

const Projects = () => {
  const projects = [
    {
      gradient: 'from-blue-500 to-purple-600',
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      tags: [
        { name: 'React', color: 'bg-blue-600' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'MongoDB', color: 'bg-purple-600' }
      ],
      links: [
        { text: 'Live Demo', url: '#' },
        { text: 'GitHub', url: '#' }
      ]
    },
    {
      gradient: 'from-green-500 to-blue-600',
      icon: 'fas fa-chart-line',
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      tags: [
        { name: 'React', color: 'bg-blue-600' },
        { name: 'D3.js', color: 'bg-yellow-600' },
        { name: 'Firebase', color: 'bg-red-600' }
      ],
      links: [
        { text: 'Live Demo', url: '#' },
        { text: 'GitHub', url: '#' }
      ]
    },
    {
      gradient: 'from-purple-500 to-pink-600',
      icon: 'fas fa-mobile-alt',
      title: 'Task Management App',
      description: 'Cross-platform mobile app for task and project management.',
      tags: [
        { name: 'React Native', color: 'bg-blue-600' },
        { name: 'Redux', color: 'bg-purple-600' },
        { name: 'GraphQL', color: 'bg-green-600' }
      ],
      links: [
        { text: 'App Store', url: '#' },
        { text: 'GitHub', url: '#' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card rounded-xl overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-4xl text-white`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`${tag.color} text-xs px-2 py-1 rounded`}>{tag.name}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} className="text-blue-400 hover:underline">{link.text}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;