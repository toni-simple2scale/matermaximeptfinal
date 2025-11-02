import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#00BFFF] shadow-2xl z-50 animate-slideUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <Cookie className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Este site utiliza cookies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Utilizamos apenas cookies essenciais para o funcionamento do site. 
                  Não recolhemos dados pessoais nem fazemos tracking. 
                  Os nossos analytics (Vercel Analytics) são 100% privados e não utilizam cookies.
                </p>
                <div className="mt-3 flex gap-4 text-sm">
                  <Link to="/politica-privacidade" className="text-[#00BFFF] hover:underline font-medium">
                    Política de Privacidade
                  </Link>
                  <Link to="/politica-cookies" className="text-[#00BFFF] hover:underline font-medium">
                    Política de Cookies
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="px-8 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors duration-200 font-medium shadow-lg"
              >
                Compreendo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
