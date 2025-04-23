'use client';

import { useState } from 'react';

export default function ExpandableSquare() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`cursor-pointer flex items-center justify-center transition-all duration-500 ease-in-out 
          ${isExpanded ? 'w-64 h-64 bg-blue-500' : 'w-32 h-32 bg-gray-300'}`}
      >
        {isExpanded && <span className="text-white text-xl">hello</span>}
      </div>
    </div>
  );
}
