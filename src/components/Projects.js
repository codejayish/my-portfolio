import React, { useState } from 'react';

const ProjectCard = ({ title, duration, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="mt-2 md:mt-0 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {duration}
          </span>
        </div>
        <div className="text-gray-700">
          <ul className="space-y-2">
            {description.slice(0, isExpanded ? description.length : 2).map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          {description.length > 2 && (
            <button 
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Airline Ticket Booking and Confirmation System",
      duration: "Sep '23 - Oct '23",
      description: [
        "Developed a flight booking website utilizing React, CSS, Node.js, and Express, with MongoDB as the database",
        "Implemented comprehensive user features, including flight search, booking, and secure payment processing",
        "Integrated COVID-19 vaccination verification to ensure passenger safety and health protocol compliance",
        "Developed a robust cancellation and refund system, aligned with company policies, boosting customer satisfaction"
      ]
    },
    {
      title: "Foothread User-Level Thread Library Development — Operating Systems",
      duration: "Feb '24 - Mar '24",
      description: [
        "Designed and implemented a custom user-level threading C library using the clone() system call on Linux",
        "Engineered efficient synchronization primitives, such as mutexes and barriers, leveraging Linux semaphores",
        "Optimized thread management with flexible joinable and detached thread types and custom stack allocation",
        "Successfully validated the library through a multi-threaded application demonstrating correct synchronization"
      ]
    },
    {
      title: "ARIMA based Trading Strategy — Bachelor Thesis project",
      duration: "Aug '24 - Present",
      description: [
        "Generated profit of 3.5, beta of 0.6, and Sharpe ratio of 1.1 via an ARIMA-based strategy for prediction on RELIANCE",
        "Boosted profit to 13% by filtering the positions against volume price based indicators such as RSI, MACD, and OBV",
        "Benchmarked the volatility of RELIANCE against Nifty50 and SENSEX market index by applying the G-ARCH models"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              duration={project.duration}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;