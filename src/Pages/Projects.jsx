import React from 'react';
import htmlProject from '../assets/logo.png'; // Replace with your real image
import cssProject from '../assets/logo.png';   // Replace with your real image

const Projects = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-10">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={htmlProject} alt="HTML Project" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <p className="text-xs text-gray-400 mb-1">CLICK HERE TO VISIT</p>
              <h3 className="text-lg font-semibold mb-2">HTML TUTORIAL</h3>
              <a
                href="https://example.com/html-tutorial" // replace with your link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit Project →
              </a>
            </div>
          </div>

          {/* Project Card 2
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={cssProject} alt="CSS Project" className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
              <p className="text-xs text-gray-400 mb-1">CLICK HERE TO VISIT</p>
              <h3 className="text-lg font-semibold mb-2">CSS TUTORIAL</h3>
              <a
                href="https://example.com/css-tutorial" // replace with your link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit Project →
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
