import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Hi, I'm <span className="text-blue-500">Praja</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          IoT Developer | Machine Learning Enthusiast
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/iampraja16" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-praja-dewanata/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:yada.mo171094@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;