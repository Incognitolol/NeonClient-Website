import { FC } from 'react';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export const AnimatedTitle: FC<AnimatedTitleProps> = ({ children, className = '', subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 
        className={`text-4xl font-bold mb-4 bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#22d3ee] 
        bg-clip-text text-transparent bg-300% animate-gradient ${className}`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}; 