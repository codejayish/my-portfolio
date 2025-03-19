import React from 'react';
import prajayPhoto from '../assets/prajay_photo.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-tr-full opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:text-left mb-8 md:mb-12">
          {/* Profile Image in Circle */}
          <div className="w-48 h-48 mb-6 md:mb-0 md:mr-10 flex-shrink-0">
            <img 
              src={prajayPhoto} 
              alt="Prajay Mudavath" 
              className="w-full h-full object-cover object-center rounded-full shadow-lg border-4 border-white"
            />
          </div>
          
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Prajay Mudavath
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">
              Mathematics and Computing @ IIT Kharagpur
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl">
              Building solutions that matter. Competitive programmer. Problem solver.
            </p>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a 
            href="https://www.linkedin.com/in/prajay-mudavath-01b080237" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/prajay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <a 
            href="mailto:mudavathprajay@gmail.com"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Contact Me
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;