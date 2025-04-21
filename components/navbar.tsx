import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { LogoIcon } from './icons';

interface NavbarProps {
  onTOSClick: () => void;
}

export const Navbar = ({ onTOSClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = useCallback((sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const targetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['features', 'status', 'pricing'];
      const navbarHeight = 80;
      const currentPosition = window.scrollY + navbarHeight + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-500 ${
      isScrolled ? 'nav-blur shadow-lg shadow-[#22d3ee]/5 py-3' : 'bg-transparent'
    }`}>
      <Link href="/" className="logo-container">
        <LogoIcon className="w-8 h-8 logo-icon transition-all duration-300" />
        <span className="logo-text text-xl font-medium">Neon Client</span>
      </Link>

      {/* Desktop navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <a
          href="#features"
          onClick={(e) => scrollToSection('features', e)}
          className={`nav-link text-gray-400 hover:text-white transition-all duration-300 ${
            activeSection === 'features' ? 'active text-white' : ''
          }`}
        >
          Features
        </a>
        <Link href="https://status.crunchservices.xyz/status/neon" className="gradient-border px-4 py-2 text-gray-400 hover:text-white transition-all duration-300">
          Status
        </Link>
        <a
          href="#pricing"
          onClick={(e) => scrollToSection('pricing', e)}
          className={`nav-link text-gray-400 hover:text-white transition-all duration-300 ${
            activeSection === 'pricing' ? 'active text-white' : ''
          }`}
        >
          Pricing
        </a>
        <Link href="https://docs.neonclient.com/" className="gradient-border px-4 py-2 text-gray-400 hover:text-white transition-all duration-300">
          Addons
        </Link>
        <button 
          onClick={onTOSClick}
          className="gradient-border px-4 py-2 text-gray-400 hover:text-white transition-all duration-300"
        >
          TOS
        </button>
      </div>

      <button 
        className="lg:hidden flex flex-col justify-between w-8 h-6 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="block w-full h-0.5 bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] rounded transition-all duration-300" />
        <span className="block w-full h-0.5 bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] rounded transition-all duration-300" />
        <span className="block w-full h-0.5 bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] rounded transition-all duration-300" />
      </button>

      <div className={`lg:hidden fixed top-0 right-0 w-4/5 h-screen nav-blur transform transition-transform duration-500 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a
            href="#features"
            onClick={(e) => scrollToSection('features', e)}
            className="text-xl text-gray-400 hover:text-white transition-all duration-300 nav-link"
          >
            Features
          </a>
          <Link href="https://status.crunchservices.xyz/status/neon" className="text-xl gradient-border px-6 py-2 text-gray-400 hover:text-white transition-all duration-300">
            Status
          </Link>
          <a
            href="#pricing"
            onClick={(e) => scrollToSection('pricing', e)}
            className="text-xl text-gray-400 hover:text-white transition-all duration-300 nav-link"
          >
            Pricing
          </a>
          <Link href="#" className="text-xl gradient-border px-6 py-2 text-gray-400 hover:text-white transition-all duration-300">
            Addons
          </Link>
          <button 
            onClick={onTOSClick}
            className="text-xl gradient-border px-6 py-2 text-gray-400 hover:text-white transition-all duration-300"
          >
            TOS
          </button>
        </div>
      </div>
    </nav>
  );
};
