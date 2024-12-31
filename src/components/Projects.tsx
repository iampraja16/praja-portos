import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with advanced features',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Project 3',
      description: 'Mobile-first social media dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tech: ['React Native', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;