import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ButtonConfigProps } from '@/types/launchpad';

const ButtonConfig = ({ button, onUpdate }: ButtonConfigProps) => {
  if (!button) return null;

  const handleNoteChange = (note: string) => {
    onUpdate({
      ...button,
      action: {
        ...button.action,
        note: parseInt(note) || 0,
      },
    });
  };

  const handleVelocityChange = (velocity: string) => {
    onUpdate({
      ...button,
      action: {
        ...button.action,
        velocity: parseInt(velocity) || 0,
      },
    });
  };

  return (
    <div className="space-y-4 p-4 bg-launchpad-bg rounded-lg">
      <h3 className="text-lg font-semibold text-launchpad-text">
        Configure Button ({button.x}, {button.y})
      </h3>
      
      <div className="space-y-2">
        <Label htmlFor="note">MIDI Note (0-127)</Label>
        <Input
          id="note"
          type="number"
          min="0"
          max="127"
          value={button.action.note}
          onChange={(e) => handleNoteChange(e.target.value)}
          className="bg-launchpad-button text-launchpad-text"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="velocity">Velocity (0-127)</Label>
        <Input
          id="velocity"
          type="number"
          min="0"
          max="127"
          value={button.action.velocity}
          onChange={(e) => handleVelocityChange(e.target.value)}
          className="bg-launchpad-button text-launchpad-text"
        />
      </div>
    </div>
  );
};

export default ButtonConfig;