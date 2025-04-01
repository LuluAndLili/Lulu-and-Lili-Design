import "./Button.scss"
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <div
      onClick={onClick}
      className="luli-button"
    >
      {label}
    </div>
  );
}