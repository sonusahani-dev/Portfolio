import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      icon: 'fa-solid fa-city',
      color: 'text-orange-400',
      title: 'MERN Stack Certified Developer',
      issuer: 'Techpile Technology Pvt. Ltd.',
      year: '2025'
    },
        {
      icon: 'fas fa-trophy',
      color: 'text-yellow-400',
      title: 'Best Frontend Developer',
      issuer: 'Sagar Institute of Technology & Management',
      year: '2024'
    },
    {
      icon: 'fa-solid fa-republican',
      color: 'text-blue-400',
      title: 'Php Certified Developer',
      issuer: 'Softpro India Lko.',
      year: '2022'
    },
    // {
    //   icon: 'fab fa-react',
    //   color: 'text-blue-400',
    //   title: 'React Expert Certification',
    //   issuer: 'Meta (Facebook)',
    //   year: '2022'
    // },
    // {
    //   icon: 'fas fa-medal',
    //   color: 'text-purple-400',
    //   title: 'Hackathon Winner',
    //   issuer: 'SF Tech Challenge',
    //   year: '2021'
    // },
    // {
    //   icon: 'fas fa-star',
    //   color: 'text-green-400',
    //   title: 'Employee of the Year',
    //   issuer: 'StartupXYZ',
    //   year: '2021'
    // }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Certifications & Awards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="card p-6 rounded-xl text-center">
              <i className={`${cert.icon} text-4xl ${cert.color} mb-4`}></i>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;