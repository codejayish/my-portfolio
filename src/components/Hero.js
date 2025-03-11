import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Prajay Mudavath</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mathematics and Computing @ IIT Kharagpur</h2>
        <p className="text-lg md:text-xl mb-8">Building solutions that matter. Competitive programmer. Problem solver.</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://linkedin.com/in/prajay-mudavath" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/prajay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:mudavathprajay@gmail.com"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;