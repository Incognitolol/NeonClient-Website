import DashboardLayout from '@/components/dashboard/layout';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Dashboard() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redeemKey, setRedeemKey] = useState('');
  const [betaMode, setBetaMode] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#22d3ee]">Account Information</h1>
          <p className="text-gray-400">Welcome to the Neon dashboard! Here, you can manage your account settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* User Info */}
            <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-white font-medium">Incognito</h2>
                  <p className="text-gray-400 text-sm">RNOIncognito@antiskid.club</p>
                </div>
                <span className="px-2 py-1 bg-[#22d3ee] text-black text-xs font-semibold rounded">LIFETIME</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Discord:</span>
                <span className="text-white">@RNOIncognito</span>
              </div>
            </div>

            {/* Hardware IDs */}
            <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-white">Hardware IDs</h2>
                <span className="text-xs text-gray-400">(2 max)</span>
              </div>
              
              <div className="space-y-4">
                {/* HWID 1 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">HWID #1</span>
                    <button className="text-xs text-[#22d3ee] hover:text-[#06b6d4]">Reset</button>
                  </div>
                  <div className="bg-[#0f1420] rounded px-3 py-2 font-mono text-sm text-white">
                    abc-abc-abcd-abcd
                  </div>
                </div>

                {/* HWID 2 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">HWID #2</span>
                    <button className="text-xs text-[#22d3ee] hover:text-[#06b6d4]">Set</button>
                  </div>
                  <div className="bg-[#0f1420] rounded px-3 py-2 font-mono text-sm text-gray-500">
                    Not set
                  </div>
                </div>
              </div>
            </div>

            {/* Beta Mode Toggle */}
            <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-medium text-white mb-1">Beta Mode</h2>
                  <p className="text-sm text-gray-400">Access experimental features</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    className="sr-only peer"
                    checked={betaMode}
                    onChange={(e) => setBetaMode(e.target.checked)}
                  />
                  <div className={`w-11 h-6 rounded-full peer ${
                    betaMode ? 'bg-[#22d3ee]' : 'bg-[#374151]'
                  } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all`}>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Password Change */}
            <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-lg font-medium text-white mb-4">Password Change</h2>
              <div className="space-y-3">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full bg-[#0f1420] border border-[#374151] rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#22d3ee]"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-[#0f1420] border border-[#374151] rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#22d3ee]"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full bg-[#0f1420] border border-[#374151] rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#22d3ee]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="w-full bg-[#22d3ee] text-black font-medium rounded px-4 py-2 text-sm hover:bg-[#06b6d4] transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Key Redemption */}
            <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-lg font-medium text-white mb-4">Redeem Key</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your key"
                  className="flex-1 bg-[#0f1420] border border-[#374151] rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#22d3ee]"
                  value={redeemKey}
                  onChange={(e) => setRedeemKey(e.target.value)}
                />
                <button className="bg-[#22d3ee] text-black font-medium rounded px-4 py-2 text-sm hover:bg-[#06b6d4] transition-colors whitespace-nowrap">
                  Redeem
                </button>
              </div>
            </div>

            {/* Request Change */}
            <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-lg font-medium text-white mb-2">Request Change</h2>
              <p className="text-sm text-gray-400 mb-4">Need to update your username or email?</p>
              <button className="w-full bg-[#374151] text-white font-medium rounded px-4 py-2 text-sm hover:bg-[#4b5563] transition-colors">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}