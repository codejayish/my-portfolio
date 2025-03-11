import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      skills: ["Competitive Programming", "Data Structures", "Algorithms", "Object-Oriented Programming", "Problem Solving"]
    },
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "SQL", "Dart", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks/Libraries",
      skills: ["C++ STL", "NumPy", "Pandas", "OpenCV", "Node.js", "Express.js", "React.js", "Flask", "TensorFlow"]
    },
    {
      title: "Software/Tools",
      skills: ["Google Colab", "Visual Studio Code", "Git", "GitHub", "Jupyter Notebook", "MySQL", "PowerShell", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;