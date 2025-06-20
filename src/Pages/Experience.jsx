import React from 'react';
import googleIcon from '../assets/logo.png';
import appleIcon from '../assets/logo.png';

const Experience = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">EXPERIENCE</h2>

        {/* Experience 1 */}
        <div className="flex items-start gap-4 mb-10">
          <img src={googleIcon} alt="Google" className="h-8 w-8 mt-1" />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Grass Solution Pvt. Ltd.</h3>
              <span className="text-sm text-gray-400"> 1 June 2023-20 August 2023</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Full Stack Development Internship<br></br>
Domain: MERN Stack<br></br>
During my internship at Grass Solution Pvt. Ltd., I gained practical experience in full stack web development using the MERN stack
 (MongoDB, Express.js, React.js, Node.js). I worked on building dynamic user interfaces, implementing RESTful APIs, and integrating
  frontend with backend services

            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex items-start gap-4 mb-10">
          <img src={appleIcon} alt="Apple" className="h-8 w-8 mt-1" />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">GIP Technologies Pvt. Ltd </h3>
              <span className="text-sm text-gray-400"> 5 June 2023-20 July 2023</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Role: Frontend Developer Internship<br></br>
Key Skills:  HTML ,CSS ,Javascript and ReactJS <br></br>
The best web hosting company in India - Global IT Providers - a platform that facilitates choice, simplicity & performance.
 A dedicated server hosting provider, to facilitate you stay focused on what you do best, win as an individual .
            </p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Experience;
