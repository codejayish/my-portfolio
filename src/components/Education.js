import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Indian Institute of Technology (IIT), Kharagpur</h3>
                <p className="text-lg text-gray-600">Bachelor Of Science - Master Of Science, Mathematics and Computing</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  December 2021 - Present
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700"><span className="font-medium">GPA:</span> 8.61/10</p>
              <div className="mt-2">
                <h4 className="font-semibold text-gray-700">Relevant Coursework:</h4>
                <div className="mt-1 text-gray-600">
                  <p><span className="font-medium">Computer Science:</span> Programming and Data Structures, Theory of Computations, Computer Organization and Architecture, Design and Analysis of Algorithms, Database Management Systems, Computational Geometry</p>
                  <p className="mt-1"><span className="font-medium">AI & ML:</span> AI & ML, Statistical Foundations for AI and ML</p>
                  <p className="mt-1"><span className="font-medium">Mathematics:</span> Calculus, Linear Algebra, Probability and Statistics, Stochastic Processes and Applications, Combinatorics and Graph Theory, Big Data Analysis, Number Theory</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Narayana Junior College, Hyderabad</h3>
                <p className="text-lg text-gray-600">Class 12, Telangana Board of Intermediate Education</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  May 2019 - April 2021
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700"><span className="font-medium">Score:</span> 96.4%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;