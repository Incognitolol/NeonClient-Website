import { ModuleCard } from '@/components/dashboard/module-card';
import DashboardLayout from '@/components/dashboard/layout';

// Mock data - would be replaced with API data
const moduleCategories = {
  Combat: [
    { name: 'Kill Aura', keybind: 'R' },
    { name: 'Velocity', keybind: 'V' },
    { name: 'Criticals', keybind: 'C' },
    { name: 'Back Track', keybind: 'B' },
  ],
  Movement: [
    { name: 'Sprint', keybind: null },
    { name: 'Flight', keybind: 'F' },
    { name: 'Speed', keybind: 'M' },
    { name: 'No Slow', keybind: null },
    { name: 'Long Jump', keybind: 'L' },
  ],
  Render: [
    { name: 'Click UI', keybind: 'RSHIFT' },
    { name: 'Visual Rotations', keybind: null },
    { name: 'Post Processing', keybind: null },
    { name: 'ESP', keybind: null },
  ],
  Player: [
    { name: 'Inventory Move', keybind: null },
    { name: 'Breaker', keybind: null },
    { name: 'No Fall', keybind: null },
    { name: 'Auto Armor', keybind: null },
  ],
  Ghost: [
    { name: 'Reach', keybind: null },
    { name: 'Hitboxes', keybind: null },
    { name: 'Auto Clicker', keybind: null },
    { name: 'Aim Assist', keybind: null },
  ],
  Miscellaneous: [
    { name: 'Crasher', keybind: null },
    { name: 'Hit Marker', keybind: null },
    { name: 'Chat Bypass', keybind: null },
    { name: 'Auto Disable', keybind: null },
  ],
};

export default function ModulesPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(moduleCategories).map(([category, modules]) => (
          <ModuleCard key={category} title={category} modules={modules} />
        ))}
      </div>
    </DashboardLayout>
  );
}