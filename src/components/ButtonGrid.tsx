import React from 'react';
import { LaunchpadButton } from '@/types/launchpad';
import { cn } from '@/lib/utils';

interface ButtonGridProps {
  buttons: LaunchpadButton[];
  selectedButton: LaunchpadButton | null;
  onSelectButton: (button: LaunchpadButton) => void;
}

const ButtonGrid = ({ buttons, selectedButton, onSelectButton }: ButtonGridProps) => {
  // Generate column numbers (1-8)
  const columnNumbers = Array.from({ length: 8 }, (_, i) => i + 1);
  // Generate row letters (A-H)
  const rowLetters = Array.from({ length: 8 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="relative">
      {/* Column numbers */}
      <div className="flex mb-2 ml-8">
        {columnNumbers.map((num) => (
          <div key={`col-${num}`} className="w-12 text-center text-launchpad-text">
            {num}
          </div>
        ))}
      </div>

      <div className="flex">
        {/* Row letters */}
        <div className="flex flex-col mr-2">
          {rowLetters.map((letter) => (
            <div key={`row-${letter}`} className="h-12 flex items-center text-launchpad-text">
              {letter}
            </div>
          ))}
        </div>

        <div className="relative">
          {/* Top row of round buttons */}
          <div className="absolute -top-16 left-0 flex gap-2">
            {Array.from({ length: 8 }, (_, i) => (
              <button
                key={`top-${i}`}
                onClick={() => onSelectButton({
                  id: `top-${i}`,
                  x: i,
                  y: -1,
                  type: 'round',
                  action: { type: 'midi', note: 104 + i, velocity: 127 }
                })}
                className={cn(
                  "w-12 h-12 rounded-full transition-all duration-200",
                  "bg-launchpad-button hover:bg-launchpad-button-hover",
                  "border-2 border-transparent",
                  "focus:outline-none focus:ring-2 focus:ring-launchpad-accent1",
                  selectedButton?.id === `top-${i}` && "border-launchpad-accent1 animate-button-pulse"
                )}
              />
            ))}
          </div>

          {/* Main 8x8 grid */}
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

          {/* Right column of round buttons */}
          <div className="absolute -right-16 top-4 flex flex-col gap-2">
            {Array.from({ length: 8 }, (_, i) => (
              <button
                key={`right-${i}`}
                onClick={() => onSelectButton({
                  id: `right-${i}`,
                  x: 8,
                  y: i,
                  type: 'round',
                  action: { type: 'midi', note: 8 + i * 16, velocity: 127 }
                })}
                className={cn(
                  "w-12 h-12 rounded-full transition-all duration-200",
                  "bg-launchpad-button hover:bg-launchpad-button-hover",
                  "border-2 border-transparent",
                  "focus:outline-none focus:ring-2 focus:ring-launchpad-accent1",
                  selectedButton?.id === `right-${i}` && "border-launchpad-accent1 animate-button-pulse"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;