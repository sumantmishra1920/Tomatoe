// Shimmer.jsx
import React from 'react';

const Shimmer = () => {
  return (
    <div className="w-full h-64 bg-gray-200 animate-pulse">
      <div className="flex flex-col space-y-4 p-4">
        <div className="w-full h-8 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer;