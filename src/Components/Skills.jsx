import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'React.js', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Next.js', percentage: 88 },
    { name: 'REST APIs', percentage: 80 }
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Team Collaboration', percentage: 92 },
    { name: 'Communication', percentage: 88 },
    { name: 'Project Management', percentage: 85 },
    { name: 'Leadership', percentage: 80 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;