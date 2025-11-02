import React, { useState, useEffect } from 'react';
import { X, Shield, Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
      setPreferences({ ...preferences, ...savedPreferences });
      initializeTracking(savedPreferences);
    }
  }, []);

  const initializeTracking = (prefs) => {
    if (prefs.analytics && window.posthog) {
      // PostHog is already initialized in index.html, just opt-in
      window.posthog.opt_in_capturing();
    } else if (window.posthog) {
      window.posthog.opt_out_capturing();
    }
  };

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: false
    };
    savePreferences(allPreferences);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    savePreferences(minimalPreferences);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    initializeTracking(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggle = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setPreferences({ ...preferences, [type]: !preferences[type] });
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#00BFFF] shadow-2xl z-50 animate-slideUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            /* Main Banner */
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <Cookie className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Este site utiliza cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Utilizamos cookies para melhorar a sua experiência de navegação, analisar o tráfego do site 
                    e compreender de onde vêm os nossos visitantes. Ao clicar em "Aceitar Todos", 
                    consente a utilização de TODOS os cookies. No entanto, pode visitar "Definições" 
                    para fornecer um consentimento controlado.
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
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                >
                  <Settings className="h-4 w-4" />
                  Definições
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors duration-200 font-medium shadow-lg"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          ) : (
            /* Settings Panel */
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-[#00BFFF]" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Definições de Cookies
                  </h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Cookies Necessários</h4>
                    <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Sempre Ativo
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Estes cookies são essenciais para o funcionamento do website e não podem ser desativados. 
                    Incluem cookies de sessão e preferências de cookies.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Cookies de Análise (PostHog)</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleToggle('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00BFFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00BFFF]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Estes cookies permitem-nos analisar a utilização do website e melhorar o desempenho. 
                    Recolhem informações de forma anónima sobre como os visitantes utilizam o site.
                  </p>
                </div>

                {/* Marketing Cookies - Not used but shown for future */}
                <div className="bg-gray-50 rounded-lg p-4 opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Cookies de Marketing</h4>
                    <div className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Não Utilizado
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    De momento, não utilizamos cookies de marketing ou publicidade no nosso website.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors duration-200 font-medium shadow-lg"
                >
                  Guardar Preferências
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
