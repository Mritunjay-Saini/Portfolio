import React from 'react';
import avatar from '../assets/img.jpg';
import Html from '../assets/html-5.png';
import Css from '../assets/css-3.png';
import Js from '../assets/js.png';
import React1 from '../assets/react.png';
import Nodejs from '../assets/node-js.png';

const Home = () => {
  return (
    <section className="min-h-screen text-black flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-200 animate-gradient">
      {/* Avatar */}
      <img
        src={avatar}
        alt="Avatar"
        className=" transform transition-transform duration-300 hover:scale-110 w-32 h-32 rounded-full border-4 border-gray-700 mb-6"
      />

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold leading-snug">
        I do <span className="text-black">code</span> and<br />
        <span className="text-black">make content </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          about it!
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-gray-600 max-w-xl mt-4 text-sm md:text-base">
        I am a seasoned full-stack software engineer with over 8 years of professional experience,
        specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based
        architectures on the Amazon AWS platform.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition">
          Get In Touch
        </button> */}

        <a
          href="/resume.pdf"
          download
          className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition text-center"
        >
          Download CV
        </a>
      </div>

      {/* Tech Stack */}
      <div className="mt-10">
  <p className="text-sm text-gray-500 mb-3 tracking-widest">EXPERIENCE WITH</p>
  <div className="flex gap-6 justify-center items-center">
    <img src={Html} alt="HTML5" className="h-10 transform transition-transform duration-300 hover:scale-110" />
    <img src={Css} alt="CSS3" className="h-10 transform transition-transform duration-300 hover:scale-110" />
    <img src={Js} alt="Javascript" className="h-9 transform transition-transform duration-300 hover:scale-110" />
    <img src={React1} alt="React" className="h-10 transform transition-transform duration-300 hover:scale-110" />
    <img src={Nodejs} alt="Node js" className="h-10 transform transition-transform duration-300 hover:scale-110" />
  </div>
</div>

    </section>
  );
};

export default Home;
