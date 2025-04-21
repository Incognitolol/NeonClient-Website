import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="
      bg-[#1f2937]/30 p-6 rounded-xl 
      border-2 border-[#374151] 
      relative transition-all duration-500 group
      hover:-translate-y-2
      hover:border-[#22d3ee]
      hover:bg-[#1f2937]/50
      [box-shadow:0_0_0_0_#0891b2]
      hover:[box-shadow:0_0_15px_1px_#0891b2]
      after:absolute after:inset-0 after:rounded-xl 
      after:transition-all after:duration-500
      after:opacity-0 group-hover:after:opacity-70 
      after:-z-10 after:[box-shadow:0_0_25px_5px_#0891b2]
      before:absolute before:inset-0 before:rounded-xl 
      before:transition-all before:duration-500
      before:opacity-0 group-hover:before:opacity-5
      before:-z-20 before:bg-[#0891b2]
      backdrop-blur-sm
    ">
      <div className="flex items-start gap-4">
        <div className="
          bg-[#1f2937] p-3 rounded-lg 
          text-[#22d3ee] min-w-[3rem] min-h-[3rem] 
          flex items-center justify-center
          transition-all duration-500
          group-hover:bg-[#1f2937]
          relative
          border border-[#374151]
          group-hover:border-[#22d3ee]
        ">
          <div className="relative z-10 transition-all duration-300 group-hover:scale-110">
            <Icon strokeWidth={1.5} className="w-6 h-6" />
          </div>
        </div>
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          <h3 className="
            text-lg font-bold text-[#22d3ee] mb-1
            transition-all duration-300
            group-hover:scale-105
          ">{title}</h3>
          <p className="
            text-gray-400 text-sm
            transition-colors duration-300
            group-hover:text-gray-300
          ">{description}</p>
        </div>
      </div>
    </div>
  );
}; 