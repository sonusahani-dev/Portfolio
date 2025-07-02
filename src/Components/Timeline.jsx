import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      title: 'Junior Full Stack Developer at Techpile',
      period: '2024 - Present',
      description: 'Leading frontend and backend development and mentoring team members'
    },
        {
      title: 'Graduated from Aktu University',
      period: '2025',
      description: 'Bachelor of Technology in Computer Science and Engineering'
    },
    {
      title: 'Frontend Developer at Softpro India',
      period: '01 Jan 2021 - 01 June 2021',
      description: 'Developed multiple production applications.'
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Career Journey</h2>
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="card p-6 rounded-xl ml-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-400">{item.period}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;