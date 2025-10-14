import React from 'react';

const Logo = () => {
  return (
    <svg width="60" height="60" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_rgba(80,200,120,0.5)]">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#50c878', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3a9b5c', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M 150 100 L 500 70 L 850 100 L 850 850 L 500 900 L 150 850 Z" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="60"/>
      <path d="M 350 350 L 500 200 L 650 350 L 650 650 L 350 650 Z" 
            fill="url(#logoGradient)"/>
    </svg>
  );
};

export default Logo;