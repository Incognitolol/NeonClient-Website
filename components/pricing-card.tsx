import React, { useState } from 'react';
import { TOSModal } from './tos-modal';

interface PricingCardProps {
  title: string;
  description: string;
  compatibility: string;
  price: string;
  isPremium?: boolean;
  isPermanent?: boolean;
  features: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  compatibility,
  price,
  features,
  isPremium = false,
  isPermanent = false
}) => {
  const [isTOSOpen, setIsTOSOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsTOSOpen(true);
  };

  const handleTOSAccept = () => {
    setIsTOSOpen(false);
    // TODO: Implement actual purchase flow logic here if theres an api for it
    console.log('TOS accepted, proceeding with purchase for:', title);
  };

  const isComingSoon = features.length === 1 && features[0] === "Coming Soon!";

  const buttonClass = `w-full py-3 rounded-lg font-semibold relative overflow-hidden group/button ${
    isComingSoon 
      ? 'bg-[#374151] text-gray-400 cursor-not-allowed' 
      : isPremium 
        ? 'bg-[#06b6d4] text-white hover:bg-[#0891b2]' 
        : 'bg-[#374151] text-white hover:bg-[#4b5563]'
  }`;

  return (
    <>
      <TOSModal 
        isOpen={isTOSOpen}
        onClose={() => setIsTOSOpen(false)}
        onAccept={handleTOSAccept}
      />

      <div className={`
        bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-8 
        relative transition-all duration-500 group
        hover:transform hover:-translate-y-2 hover:bg-[#1f2937]/50
        border-2 ${isPremium ? 'border-[#22d3ee]' : 'border-[#1f2937]'}
        hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
        after:absolute after:inset-0 after:rounded-xl after:transition-opacity after:duration-500
        after:opacity-0 group-hover:after:opacity-100 after:-z-10
        ${isPremium 
          ? 'group-hover:border-[#22d3ee] after:shadow-[0_0_40px_15px_rgba(34,211,238,0.25)]' 
          : 'group-hover:border-[#22d3ee] after:shadow-[0_0_30px_10px_rgba(34,211,238,0.15)]'
        }
        before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-500
        before:opacity-0 group-hover:before:opacity-100 before:-z-20
        ${isPremium 
          ? 'before:bg-gradient-to-b before:from-[#22d3ee]/20 before:via-[#22d3ee]/10 before:to-transparent' 
          : 'before:bg-gradient-to-b before:from-[#22d3ee]/10 before:via-[#22d3ee]/5 before:to-transparent'
        }
      `}>
        {isPremium && (
          <span className="absolute top-3 right-3 bg-[#22d3ee] text-black text-xs font-semibold px-2 py-1 rounded">
            PREMIUM
          </span>
        )}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-[#22d3ee] group-hover:scale-105">{title}</h3>
          <p className="text-gray-400 mb-2 transition-all duration-300 group-hover:text-gray-300">{description}</p>
          <p className="text-gray-400 mb-6 transition-all duration-300 group-hover:text-gray-300">{compatibility}</p>
          <div className="flex items-baseline mb-8">
            <span className="text-4xl font-bold text-white transition-all duration-300 group-hover:text-[#22d3ee] group-hover:scale-110">€{price}</span>
            <span className="text-gray-400 ml-2 transition-all duration-300 group-hover:text-gray-300">{isPermanent ? 'one-time' : '/month'}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300 transition-all duration-300 group-hover:translate-x-1 hover:text-white">
                <span className="w-2 h-2 bg-[#22d3ee] rounded-full mr-3 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                {feature}
              </li>
            ))}
          </ul>
          <button 
            onClick={isComingSoon ? undefined : handlePurchaseClick}
            disabled={isComingSoon}
            className={buttonClass}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover/button:scale-105">
              {isComingSoon ? 'Coming Soon' : (isPermanent ? 'Purchase' : 'Subscribe')}
            </span>
            
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute inset-0 transition-colors duration-300 ${
                isComingSoon 
                  ? 'group-hover/button:bg-[#4b5563]'
                  : isPremium
                    ? 'group-hover/button:bg-[#0891b2]'
                    : 'group-hover/button:bg-[#4b5563]'
              }`} />
              
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
                transition-transform duration-700 ease-out group-hover/button:scale-[20] ${
                isComingSoon 
                  ? 'bg-gray-500/20'
                  : isPremium
                    ? 'bg-[#22d3ee]/20'
                    : 'bg-gray-400/20'
              }`} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
                transition-transform duration-500 ease-out group-hover/button:scale-[15] ${
                isComingSoon 
                  ? 'bg-gray-500/10'
                  : isPremium
                    ? 'bg-[#22d3ee]/10'
                    : 'bg-gray-400/10'
              }`} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}; 