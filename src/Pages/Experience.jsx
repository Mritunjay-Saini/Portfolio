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
              <h3 className="text-lg font-semibold">Lead Software Engineer at Google</h3>
              <span className="text-sm text-gray-400">Nov 2019 – Present</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions
              for Google’s core search algorithms. Collaborating with a dynamic team of engineers, I contributed
              to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex items-start gap-4 mb-10">
          <img src={appleIcon} alt="Apple" className="h-8 w-8 mt-1" />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Junior Software Engineer at Apple</h3>
              <span className="text-sm text-gray-400">Jan 2016 – Dec 2017</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              At Apple, I held the role of Software Architect, playing a key role in shaping the architecture
              of mission-critical software projects. I was responsible for designing scalable and efficient systems,
              and provided technical leadership to cross-functional teams.
            </p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Experience;
