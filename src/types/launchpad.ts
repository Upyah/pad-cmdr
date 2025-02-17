export interface LaunchpadButton {
  id: string;
  x: number;
  y: number;
  action: ButtonAction;
  type: 'square' | 'round';
}

export interface ButtonAction {
  type: 'midi';
  note: number;
  velocity: number;
}

export interface ButtonConfigProps {
  button: LaunchpadButton | null;
  onUpdate: (button: LaunchpadButton) => void;
}