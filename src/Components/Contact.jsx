import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you need a complete web application or want to improve an existing one, I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-400 text-xl w-8"></i>
                <span>john.smith@email.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-blue-400 text-xl w-8"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-400 text-xl w-8"></i>
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-2xl text-gray-400 hover:text-blue-400 transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-blue-400 transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-blue-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-blue-400 transition">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-400 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-3 rounded-lg font-semibold text-white">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;