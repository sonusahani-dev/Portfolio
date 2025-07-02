import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Next.js, and TypeScript.'
    },
    {
      icon: 'fas fa-database',
      title: 'Backend Development',
      description: 'Engineered hybrid data layers: MongoDB for flexible content, PostgreSQL for transactional integrity.'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Integration',
      description: 'Seamless API integration and database connectivity for full-stack solutions.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance Optimization',
      description: 'Speed optimization and performance tuning for better user experience.'
    },
    {
      icon: 'fas fa-users',
      title: 'Consulting & Mentoring',
      description: 'Technical guidance and mentoring for teams and individual developers.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 rounded-xl text-center">
              <i className={`${service.icon} text-4xl text-blue-400 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;