import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoIcon } from '@/components/icons';
import {
  LayoutGrid,
  Box,
  Settings,
  Users,
  LogOut,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  { name: 'Modules', href: '/dashboard/modules', icon: Box },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Profile', href: '/dashboard/profile', icon: Users },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0f1420] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1f2937] border-r border-[#374151]">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-3">
            <LogoIcon className="w-8 h-8" />
            <span className="text-xl font-bold text-[#22d3ee]">Neon Client</span>
          </Link>
        </div>

        <nav className="mt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = router.pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#22d3ee] bg-[#374151]'
                    : 'text-gray-400 hover:text-white hover:bg-[#374151]/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-[#374151]">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="h-16 bg-[#1f2937] border-b border-[#374151] px-8 flex items-center">
          <h1 className="text-xl font-semibold text-white">
            {navItems.find((item) => item.href === router.pathname)?.name || 'Dashboard'}
          </h1>
        </div>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}