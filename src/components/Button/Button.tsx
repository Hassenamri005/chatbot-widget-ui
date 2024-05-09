import React, { useState } from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  const [enabled, setEnabled] = useState(true);
  return (
    <button>
      {label}- is {enabled}
    </button>
  );
};

export default Button;
