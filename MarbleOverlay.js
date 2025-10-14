import React from 'react';

const MarbleOverlay = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(50,50,50,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(40,40,40,0.3)_0%,transparent_50%)]"
    ></div>
  );
};

export default MarbleOverlay;