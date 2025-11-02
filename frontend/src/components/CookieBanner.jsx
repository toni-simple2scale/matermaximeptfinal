import React, { useState, useEffect } from 'react';
import { X, Shield, Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify({ essential: true, functional: true, analytics: true }));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify({ essential: true, functional: false, analytics: false }));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const handleClose = () => {
    // Treat close as accepting only essential
    handleEssentialOnly();
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-[100]" onClick={handleClose} />

      {/* Cookie Banner Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-2xl shadow-2xl z-[101] animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-orange-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Valorizamos a sua Privacidade
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos cookies para melhorar a sua experiência no nosso site, analisar o tráfego e personalizar 
                conteúdo. Pode escolher quais categorias de cookies aceitar. Os cookies essenciais são necessários para 
                o funcionamento do site e não podem ser desativados.
              </p>
            </div>
          </div>

          {/* Cookie Categories */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Essential Cookies */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <h3 className="font-bold text-gray-900">Essenciais</h3>
              </div>
              <p className="text-sm text-gray-600">
                Necessários para o funcionamento do site
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Funcionais</h3>
              </div>
              <p className="text-sm text-gray-600">
                Melhoram a experiência do utilizador
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Analytics</h3>
              </div>
              <p className="text-sm text-gray-600">
                Ajudam-nos a melhorar o site
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Aceitar Todos
            </button>
            <button
              onClick={handleEssentialOnly}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Apenas Essenciais
            </button>
            <button
              onClick={handleEssentialOnly}
              className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Personalizar
            </button>
          </div>

          {/* Footer Links */}
          <div className="text-center text-sm text-gray-600">
            Ao continuar a navegar, concorda com a nossa{' '}
            <Link to="/politica-privacidade" className="text-orange-500 hover:underline font-medium">
              Política de Privacidade
            </Link>
            {' '}e{' '}
            <Link to="/politica-cookies" className="text-orange-500 hover:underline font-medium">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
