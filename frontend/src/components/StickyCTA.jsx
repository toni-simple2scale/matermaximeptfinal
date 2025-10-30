import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar após 400px de scroll
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.location.href = '/#hero';
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 left-8 z-50 animate-slideIn">
          <button
            onClick={handleClick}
            className="flex items-center gap-3 bg-gradient-to-r from-[#00BFFF] to-blue-600 hover:from-[#0099CC] hover:to-blue-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
          >
            <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg">Pedir Orçamento</span>
          </button>
        </div>
      )}
    </>
  );
};

export default StickyCTA;
