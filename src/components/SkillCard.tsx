import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  technologies: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, technologies }) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <ul className="space-y-2">
        {technologies.map((tech) => (
          <li key={tech} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            • {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;