import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="card p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Stay Connected</h2>
          <p className="text-gray-300 mb-8">Subscribe to my newsletter for the latest updates on web development, React tips, and industry insights.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-400" />
            <button type="submit" className="btn-primary px-8 py-3 rounded-lg font-semibold text-white whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-sm text-gray-400 mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;