import React from 'react';

const Blog = () => {
  const articles = [
    {
      gradient: 'from-blue-500 to-purple-600',
      icon: 'fas fa-code',
      date: 'December 15, 2023',
      title: 'Advanced React Patterns You Should Know',
      description: 'Explore advanced React patterns that can help you write more maintainable and scalable applications.'
    },
    {
      gradient: 'from-green-500 to-blue-600',
      icon: 'fas fa-rocket',
      date: 'November 28, 2023',
      title: 'Optimizing React App Performance',
      description: 'Learn practical techniques to improve your React application\'s performance and user experience.'
    },
    {
      gradient: 'from-purple-500 to-pink-600',
      icon: 'fas fa-mobile-alt',
      date: 'November 10, 2023',
      title: 'Building Cross-Platform Apps with React Native',
      description: 'A comprehensive guide to getting started with React Native development for mobile applications.'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="card rounded-xl overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                <i className={`${article.icon} text-4xl text-white`}></i>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.description}</p>
                <a href="#" className="text-blue-400 hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;