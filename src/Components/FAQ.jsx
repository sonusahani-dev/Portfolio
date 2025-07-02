import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Next.js, TypeScript, Node.js, and modern web development technologies. I also have experience with React Native for mobile development and various backend technologies.'
    },
    {
      question: 'Do you work on both frontend and backend?',
      answer: 'Yes, I\'m a full-stack developer with strong frontend skills and solid backend experience. I can handle complete web application development from database design to user interface implementation.'
    },
    {
      question: 'What\'s your typical project timeline?',
      answer: 'Project timelines vary based on complexity and requirements. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during project planning.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, I offer ongoing maintenance and support services. This includes bug fixes, updates, performance optimization, and feature enhancements based on your needs.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! I can help with code reviews, refactoring, performance optimization, adding new features, or migrating to newer technologies. I\'m comfortable working with existing codebases.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;