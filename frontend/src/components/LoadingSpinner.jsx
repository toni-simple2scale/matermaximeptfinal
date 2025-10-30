import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#00BFFF] border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-gray-600 font-medium text-lg">A carregar...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
