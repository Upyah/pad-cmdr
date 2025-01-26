import React, { useState } from 'react';
import ButtonGrid from './ButtonGrid';
import ButtonConfig from './ButtonConfig';
import { Button } from '@/components/ui/button';
import { LaunchpadButton } from '@/types/launchpad';
import { toast } from 'sonner';

const LaunchpadEditor = () => {
  const [buttons, setButtons] = useState<LaunchpadButton[]>(() => {
    const initialButtons: LaunchpadButton[] = [];
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        initialButtons.push({
          id: `${x}-${y}`,
          x,
          y,
          action: {
            type: 'midi',
            note: x + y * 8,
            velocity: 127,
          },
        });
      }
    }
    return initialButtons;
  });

  const [selectedButton, setSelectedButton] = useState<LaunchpadButton | null>(null);

  const handleButtonUpdate = (updatedButton: LaunchpadButton) => {
    setButtons(buttons.map(button => 
      button.id === updatedButton.id ? updatedButton : button
    ));
    toast.success('Button configuration updated');
  };

  const handleSaveConfig = () => {
    const config = JSON.stringify(buttons, null, 2);
    const blob = new Blob([config], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'launchpad-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Configuration saved successfully');
  };

  return (
    <div className="flex gap-8 p-6">
      <div className="flex-1">
        <ButtonGrid
          buttons={buttons}
          selectedButton={selectedButton}
          onSelectButton={setSelectedButton}
        />
        <div className="mt-4">
          <Button onClick={handleSaveConfig} className="bg-gradient-to-r from-launchpad-accent1 to-launchpad-accent2">
            Save Configuration
          </Button>
        </div>
      </div>
      <div className="w-80">
        <ButtonConfig
          button={selectedButton}
          onUpdate={handleButtonUpdate}
        />
      </div>
    </div>
  );
};

export default LaunchpadEditor;