import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      initials: 'SR',
      gradient: 'from-blue-400 to-purple-600',
      name: 'Sarah Rodriguez',
      position: 'CTO, TechCorp',
      quote: '"John is an exceptional developer who consistently delivers high-quality work. His expertise in React and ability to mentor others makes him invaluable to our team."'
    },
    {
      initials: 'MJ',
      gradient: 'from-green-400 to-blue-600',
      name: 'Michael Johnson',
      position: 'Product Manager',
      quote: '"Working with John was a pleasure. He understood our requirements perfectly and delivered a beautiful, functional application that exceeded our expectations."'
    },
    {
      initials: 'AL',
      gradient: 'from-purple-400 to-pink-600',
      name: 'Anna Lee',
      position: 'UI/UX Designer',
      quote: '"John\'s attention to detail and ability to implement pixel-perfect designs is remarkable. He\'s also great at suggesting improvements that enhance user experience."'
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What People Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.quote}</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;