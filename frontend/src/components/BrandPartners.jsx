import React from 'react';
import { brandPartners } from '../mock';

const BrandPartners = () => {
  return (
    <section id="marcas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <span className="text-sm font-medium text-[#00BFFF]">Parcerias de Confiança</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Representantes Oficiais das <span className="text-[#00BFFF]">Melhores Marcas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos distribuidores autorizados de marcas líderes no mercado nacional e internacional, 
            garantindo produtos de qualidade superior e apoio técnico especializado.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {brandPartners.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-[#00BFFF]/20 transform hover:-translate-y-2 flex items-center justify-center group"
            >
              <div className="w-48 h-24 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:brightness-75"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Vantagens dos Nossos <span className="text-[#00BFFF]">Parceiros</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalhamos exclusivamente com fabricantes certificados que garantem 
              a melhor qualidade e inovação nos materiais de construção.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-[#00BFFF]">✓</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Qualidade Certificada</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Todos os produtos cumprem as normas europeias e nacionais de qualidade e segurança.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-[#00BFFF]">🛠️</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Apoio Técnico</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suporte especializado para ajudar na escolha dos materiais mais adequados ao seu projeto.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-[#00BFFF]">💰</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Preços Competitivos</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Relação direta com fabricantes permite oferecer os melhores preços do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;