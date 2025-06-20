import React from 'react';
import Project1 from '../assets/photo1.png'; // Replace with your real image
import Project2 from '../assets/photo2.png';   // Replace with your real image

const Projects = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-10">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={Project1} alt="HTML Project" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <p className="text-xs text-gray-400 mb-1">CLICK HERE TO VISIT</p>
              <h3 className="text-lg font-semibold mb-2">FOOD website</h3>
              <a
                href="https://zamato-mall-website.vercel.app/" // replace with your link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit Project →
              </a>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={Project2} alt="HTML Project" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <p className="text-xs text-gray-400 mb-1">CLICK HERE TO VISIT</p>
              <h3 className="text-lg font-semibold mb-2">Parul result website</h3>
              <a
                href="https://website-ten-pi-54.vercel.app/" // replace with your link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit Project →
              </a>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={Project2} alt="HTML Project" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <p className="text-xs text-gray-400 mb-1">CLICK HERE TO VISIT</p>
              <h3 className="text-lg font-semibold mb-2">Parul result website</h3>
              <a
                href="https://website-ten-pi-54.vercel.app/" // replace with your link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
