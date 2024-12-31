import React from 'react';

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <span className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-colors duration-300">
      {name}
    </span>
  );
};

export default TechBadge;