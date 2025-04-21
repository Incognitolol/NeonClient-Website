import { LogoIcon } from '@/components/icons';
import Link from 'next/link';
import { StatusIndicator } from './status-indicator';

interface FooterProps {
  onTOSClick: () => void;
}

export const Footer = ({ onTOSClick }: FooterProps) => {
  return (
    <footer className="py-16 border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon className="w-10 h-10" />
              <span className="text-xl font-bold text-[#22d3ee]">Neon Client</span>
            </div>
            <p className="text-gray-400 mb-6">
            Offers multi-server support, active development, affordable pricing, and bypasses most anti-cheats
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-[#22d3ee] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="https://status.crunchservices.xyz/status/neon" className="text-gray-400 hover:text-[#22d3ee] transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-[#22d3ee] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="https://docs.neonclient.com" className="text-gray-400 hover:text-[#22d3ee] transition-colors">
                  Addons
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={onTOSClick}
                  className="text-gray-400 hover:text-[#22d3ee] transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#22d3ee] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f2937] flex flex-col md:flex-row items-center justify-between gap-4">
          <StatusIndicator />
          <div className="text-center md:text-left">
            <p className="text-gray-500">© 2025 Neon Client. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Not affiliated with Mojang Studios or Microsoft.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 