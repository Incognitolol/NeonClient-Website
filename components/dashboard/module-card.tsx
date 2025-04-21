import { useState } from 'react';
import { X } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  modules: {
    name: string;
    keybind: string | null;
  }[];
}

export const ModuleCard = ({ title, modules }: ModuleCardProps) => {
  const [activeKeybindModule, setActiveKeybindModule] = useState<string | null>(null);

  const handleKeybindClick = (moduleName: string) => {
    setActiveKeybindModule(moduleName);
  };

  const handleKeyPress = (e: KeyboardEvent, moduleName: string) => {
    e.preventDefault();
    // Mock function to set keybind - would be replaced with actual API call
    console.log(`Setting keybind for ${moduleName} to ${e.key}`);
    setActiveKeybindModule(null);
  };

  return (
    <div className="bg-[#1f2937]/30 backdrop-blur-sm rounded-xl p-6 border border-[#1f2937]">
      <h3 className="text-[#22d3ee] text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {modules.map((module) => (
          <div key={module.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22d3ee]" />
              <span className="text-white">{module.name}</span>
            </div>
            <button
              onClick={() => handleKeybindClick(module.name)}
              className="px-3 py-1 text-sm bg-[#374151] text-gray-300 rounded hover:bg-[#4b5563] transition-colors"
            >
              {module.keybind || 'None'}
            </button>
          </div>
        ))}
      </div>

      {/* Keybind Modal */}
      {activeKeybindModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1f2937] rounded-xl p-6 w-96 border border-[#374151]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#22d3ee] text-lg font-semibold">Set Keybind</h3>
              <button
                onClick={() => setActiveKeybindModule(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center space-y-4">
              <p className="text-gray-300">
                Press any key to set as keybind for {activeKeybindModule}
              </p>
              <p className="text-[#22d3ee]">Listening for keypress...</p>
              <div className="flex gap-2 justify-end mt-6">
                <button
                  onClick={() => setActiveKeybindModule(null)}
                  className="px-4 py-2 bg-[#374151] text-white rounded hover:bg-[#4b5563] transition-colors"
                >
                  Clear Keybind
                </button>
                <button
                  onClick={() => setActiveKeybindModule(null)}
                  className="px-4 py-2 bg-[#22d3ee] text-black rounded hover:bg-[#0891b2] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};