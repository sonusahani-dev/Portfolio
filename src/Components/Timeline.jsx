import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      title: 'Senior React Developer at TechCorp',
      period: '2022 - Present',
      description: 'Leading frontend development and mentoring team members'
    },
    {
      title: 'Frontend Developer at StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed multiple production applications and mobile apps'
    },
    {
      title: 'Junior Web Developer at WebSolutions',
      period: '2019 - 2020',
      description: 'Started professional career building websites for clients'
    },
    {
      title: 'Graduated from Stanford University',
      period: '2019',
      description: 'Bachelor of Science in Computer Science, Magna Cum Laude'
    }
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