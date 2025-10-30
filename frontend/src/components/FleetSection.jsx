import React from 'react';
import { Button } from './ui/button';
import { Truck, MapPin, Clock, Shield } from 'lucide-react';

const FleetSection = () => {
  const trucks = [
    {
      id: 1,
      name: 'Camiões Ligeiros',
      capacity: '3.5 toneladas',
      description: 'Ideais para entregas em zonas urbanas e acessos difíceis.',
      features: ['Acesso fácil', 'Entrega rápida', 'Zonas urbanas'],
      icon: '🚚'
    },
    {
      id: 2,
      name: 'Camiões Médios',
      capacity: '7.5 toneladas',
      description: 'Perfeitos para obras de médio porte com boa capacidade de carga.',
      features: ['Versatilidade', 'Boa capacidade', 'Obras médias'],
      icon: '🚛'
    },
    {
      id: 3,
      name: 'Camiões Pesados',
      capacity: '10+ toneladas',
      description: 'Para grandes obras e entregas de grande volume.',
      features: ['Alto volume', 'Grandes obras', 'Máxima capacidade'],
      icon: '🚚'
    }
  ];

  const coverageAreas = [
    'Lisboa e Grande Lisboa',
    'Sintra e Cascais',
    'Almada e Seixal',
    'Oeiras e Amadora',
    'Vila Franca de Xira',
    'Outras regiões (consultar)'
  ];

  return (
    <section id="frota" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <Truck className="h-4 w-4 text-[#00BFFF] mr-2" />
            <span className="text-sm font-medium text-[#00BFFF]">Frota e Entrega</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entrega <span className="text-[#00BFFF]">Garantida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Frota própria com mais de 5 camiões de diferentes capacidades 
            para garantir a entrega dos seus materiais no local e horário certos.
          </p>
        </div>

        {/* Fleet Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Fleet Image */}
          <div className="relative" data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/gkgx07da_IMG_20181231_165304.jpg"
                alt="Frota Matermaxime"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00BFFF] mb-1">5+</div>
                <div className="text-sm text-gray-600">Camiões Ativos</div>
              </div>
            </div>
          </div>

          {/* Fleet Stats */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50">
                <Clock className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">24h</div>
                <div className="text-sm text-gray-600">Entrega Garantida</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50">
                <MapPin className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">50km</div>
                <div className="text-sm text-gray-600">Raio de Entrega</div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <Shield className="h-6 w-6 text-[#00BFFF] mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantia de Qualidade</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Todos os nossos camiões são regularmente inspecionados e mantidos para garantir 
                entregas seguras e pontuais dos seus materiais.
              </p>
            </div>
          </div>
        </div>

        {/* Truck Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Camiões para Todas as <span className="text-[#00BFFF]">Necessidades</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diferentes tipos de camiões adaptados ao volume e tipo de material que necessita.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trucks.map((truck) => (
              <div
                key={truck.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-[#00BFFF]/30 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-center">{truck.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{truck.name}</h4>
                <div className="text-[#00BFFF] font-semibold text-center mb-3">{truck.capacity}</div>
                <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                  {truck.description}
                </p>
                <div className="space-y-2">
                  {truck.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-[#00BFFF]">Zonas</span> de Entrega
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cobrimos principalmente a região de Lisboa e arredores. 
                Para outras zonas, contacte-nos para orçamento personalizado.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-[#00BFFF] mr-2 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;