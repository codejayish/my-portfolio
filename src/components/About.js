import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <p className="text-lg mb-4">
            I'm Prajay – a curious mind fueled by problem-solving and a passion for building things that matter. From coding scalable systems to leading initiatives at IIT Kharagpur, I love turning ideas into impact.
          </p>
          <p className="text-lg mb-4">
            Beyond tech, I've fought (literally!) my way to international karate championships, proving that resilience is my second nature. Whether it's crafting backend systems, optimizing processes, or navigating life's challenges, I believe in pushing limits and staying unstoppable.
          </p>
          <p className="text-lg">
            Let's build something amazing!
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Competitive Programming</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>4 star on CodeChef (max rating 1834)</li>
                <li>Specialist on Codeforces (max rating 1573)</li>
                <li>500+ problems solved on LeetCode</li>
                <li>Rank 517 in Codechef Starters 124 (div3)</li>
                <li>Rank 375 in Codeforces Round 954 (div3)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>AIR 1588 in JEE Advanced 2021 (top 1%)</li>
                <li>AIR 690 in JEE Mains 2021 (top 0.07%)</li>
                <li>State Rank 279 in AP EAPCET 2021</li>
                <li>Selected for INSPIRE-SHE Scholarship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;