import React from 'react';
import { LaunchpadButton } from '@/types/launchpad';
import { cn } from '@/lib/utils';

interface ButtonGridProps {
  buttons: LaunchpadButton[];
  selectedButton: LaunchpadButton | null;
  onSelectButton: (button: LaunchpadButton) => void;
}

const ButtonGrid = ({ buttons, selectedButton, onSelectButton }: ButtonGridProps) => {
  return (
    <div className="grid grid-cols-8 gap-2 p-4 bg-launchpad-bg rounded-lg">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onSelectButton(button)}
          className={cn(
            "w-12 h-12 rounded-lg transition-all duration-200",
            "bg-launchpad-button hover:bg-launchpad-button-hover",
            "border-2 border-transparent",
            "focus:outline-none focus:ring-2 focus:ring-launchpad-accent1",
            selectedButton?.id === button.id && "border-launchpad-accent1 animate-button-pulse"
          )}
        />
      ))}
    </div>
  );
};

export default ButtonGrid;