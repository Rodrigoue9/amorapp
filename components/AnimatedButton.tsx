
import React from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyle = "font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = "bg-cyan-500 hover:bg-cyan-600 text-black focus:ring-cyan-400";
      break;
    case 'secondary':
      variantStyle = "bg-gray-700 hover:bg-gray-600 text-cyan-300 focus:ring-gray-500";
      break;
    case 'outline':
      variantStyle = "bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black focus:ring-cyan-400";
      break;
  }

  let sizeStyle = '';
  switch (size) {
    case 'sm':
      sizeStyle = "px-4 py-2 text-sm";
      break;
    case 'md':
      sizeStyle = "px-6 py-3 text-base";
      break;
    case 'lg':
      sizeStyle = "px-8 py-4 text-lg";
      break;
  }

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${widthStyle} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
