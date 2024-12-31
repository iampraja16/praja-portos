import React from 'react';
import { Code2, Database, Server, Wrench } from 'lucide-react';
import SkillCard from './SkillCard';
import TechBadge from './TechBadge';

const About = () => {
  const frontendTech = ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'];
  const backendTech = ['Node.js', 'Express', 'RESTful APIs'];
  const databaseTech = ['PostgreSQL', 'MongoDB'];
  const toolsTech = ['Git', 'Docker', 'VS Code'];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Profile Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group mx-auto lg:mx-0 max-w-sm">
              <div className="relative z-10">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl shadow-blue-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Profile"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>

            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">Frontend Engineer</h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate about creating beautiful and performant web applications with modern technologies.
                Focused on writing clean, maintainable code and delivering exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-500">Technical Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard 
                  icon={<Code2 className="text-blue-500" size={24} />}
                  title="Frontend Development"
                  technologies={frontendTech}
                />
                <SkillCard 
                  icon={<Server className="text-purple-500" size={24} />}
                  title="Backend Development"
                  technologies={backendTech}
                />
                <SkillCard 
                  icon={<Database className="text-green-500" size={24} />}
                  title="Database"
                  technologies={databaseTech}
                />
                <SkillCard 
                  icon={<Wrench className="text-yellow-500" size={24} />}
                  title="Tools & DevOps"
                  technologies={toolsTech}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-500">Current Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[...frontendTech, ...backendTech].map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;