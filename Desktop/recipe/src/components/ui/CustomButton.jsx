import React from 'react';

const CustomButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-8 py-4 rounded-3xl font-medium transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-vert-profond text-blanc-casse hover:shadow-soft hover:bg-vert-profond/90',
    secondary: 'bg-vert-sauge text-blanc-casse hover:shadow-soft hover:bg-vert-sauge/90',
    outline: 'border border-vert-sauge text-vert-profond hover:bg-vert-sauge/10',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
