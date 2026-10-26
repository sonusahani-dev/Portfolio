import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', percentage: 95 },
    { name: 'Next.js', percentage: 88 },
    { name: 'TypeScript', percentage: 88 },
    { name: 'Redux.js', percentage: 82 },
    { name: 'Tailwind CSS', percentage: 85 },
    { name: 'Bootstrap 5', percentage: 90 }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85 },
    { name: 'Express.js', percentage: 83 },
    { name: 'REST API', percentage: 90 },
    { name: 'Authentication & RBAC', percentage: 82 },
    { name: 'API Integration', percentage: 88 },
    { name: 'Error Handling', percentage: 85 }
  ];

  const databaseSkills = [
    { name: 'MongoDB', percentage: 85 },
    { name: 'PostgreSQL', percentage: 80 },
    { name: 'MySQL', percentage: 78 },
    { name: 'Redis', percentage: 75 }
  ];

  const devToolSkills = [
    { name: 'Git / GitHub / GitLab', percentage: 90 },
    { name: 'Docker', percentage: 72 },
    { name: 'Postman / Swagger', percentage: 88 },
    { name: 'VS Code', percentage: 95 },
    { name: 'Netlify / GoDaddy', percentage: 80 },
    { name: 'Responsive Design', percentage: 90 }
  ];

  const SkillBar = ({ skill }) => (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">⚛️ Frontend</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">🖥️ Backend & APIs</h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">🗄️ Databases</h3>
            <div className="space-y-5">
              {databaseSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">🛠️ Dev Tools & Deployment</h3>
            <div className="space-y-5">
              {devToolSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;