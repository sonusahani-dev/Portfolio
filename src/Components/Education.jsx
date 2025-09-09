import React from 'react';

const Education = () => {
  const educationItems = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Sagar institute of Technology & Management, Barabanki',
      period: '2022 - 2025',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with a 7.18 CGPA.'
    },
    {
      icon: 'fas fa-school',
      title: 'Diploma',
      institution: 'Jawahar Lal Nehru Polytechnic, Mahmoodabad, Sitapur',
      period: '2019-2022',
      description: 'Focused on software engineering, covering HTML, CSS, JavaScript, Php, and database management. completed with 74.50%'
    },
        {
      icon: 'fas fa-school',
      title: 'Intermediate',
      institution: 'Saraswati Vidya Mandir, Arya Nagar (North) Gorakhpur',
      period: '2018-2019',
      description: 'Focused on my Schooling and completed with 76%'
    },
            {
      icon: 'fas fa-school',
      title: 'High School',
      institution: 'S K P I C Pedari Buzurg Siddharth Nagar',
      period: '2016-2017',
      description: 'Focused on my Schooling and completed with 75.50%'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div key={index} className="card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <i className={`${item.icon} text-3xl text-blue-400 mr-4`}></i>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-blue-400">{item.institution}</p>
                  <p className="text-gray-400">{item.period}</p>
                </div>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;