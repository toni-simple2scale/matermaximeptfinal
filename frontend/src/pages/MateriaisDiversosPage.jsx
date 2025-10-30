import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// WhatsApp removed

const MateriaisDiversosPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Materiais Diversos',
    quantity: '',
    message: ''
  });

  const materiais = [
    {
      name: 'Cal Hidráulica',
      description: 'Cal hidráulica para argamassas tradicionais e restauro.',
      specs: 'NHL 2, NHL 3.5, NHL 5 | Embalagem: 25kg | Cor natural',
      applications: ['Argamassas tradicionais', 'Restauro', 'Rebocos antigos', 'Juntas de pedra']
    },
    {
      name: 'Gesso de Construção',
      description: 'Gesso em pó para rebocos interiores e acabamentos.',
      specs: 'Gesso B1 | Embalagem: 25kg | Tempo: 45-90min',
      applications: ['Rebocos interiores', 'Acabamentos', 'Molduras', 'Decoração']
    },
    {
      name: 'Argamassa Cola',
      description: 'Argamassa pronta para assentamento de azulejos.',
      specs: 'C2 TE | Embalagem: 25kg',
      applications: ['Azulejos interiores', 'Cerâmico', 'Pedra natural', 'Pavimentos']
    },
    {
      name: 'Argamassa Reboco',
      description: 'Argamassa pronta para rebocos exteriores e interiores.',
      specs: 'Tipo GP | Embalagem: 25kg | Aplicação: manual/projeção',
      applications: ['Rebocos exteriores', 'Rebocos interiores', 'Regularização', 'Base para pintura']
    },
    {
      name: 'Isolamento XPS',
      description: 'Placas de poliestireno extrudido para isolamento térmico.',
      specs: 'Espessuras: 20-100mm | Resistência: 300kPa | Formato: 60x125cm',
      applications: ['Isolamento térmico', 'Coberturas', 'Pavimentos', 'Fundações']
    },
    {
      name: 'Lã de Rocha',
      description: 'Painéis de lã de rocha para isolamento térmico e acústico.',
      specs: 'Espessuras: 40-200mm | Densidade: 120kg/m³ | Formato: 60x100cm',
      applications: ['Isolamento térmico', 'Isolamento acústico', 'Paredes', 'Coberturas']
    },
    {
      name: 'Membrana Betuminosa',
      description: 'Membrana impermeabilizante para coberturas e fundações.',
      specs: 'SBS modificada | Espessura: 4mm | Largura: 1m | Armadura: poliéster',
      applications: ['Impermeabilização', 'Coberturas planas', 'Fundações', 'Terraços']
    },
    {
      name: 'Betume de Alcatrão',
      description: 'Primário betuminoso para preparação de superfícies.',
      specs: 'Solvente | Embalagem: 5L, 20L | Secagem: 2-4h',
      applications: ['Primário', 'Impermeabilização', 'Reparações', 'Colagem membranas']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pedido de orçamento para Materiais Diversos enviado com sucesso!');
    setQuoteForm({ name: '', phone: '', email: '', product: 'Materiais Diversos', quantity: '', message: '' });
  };

  const handleInputChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/#produtos" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
            data-aos="fade-right"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <div data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Materiais</span> Diversos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Outros materiais essenciais para a sua obra: cal, gesso, argamassas, isolamentos e impermeabilização.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 mb-12">
              {materiais.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="text-sm text-gray-500 mb-4">{product.specs}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicações:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Categories Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Argamassas e Ligantes</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">• Cal hidráulica NHL 2, 3.5, 5</div>
                  <div className="text-sm text-gray-700">• Gesso de construção B1</div>
                  <div className="text-sm text-gray-700">• Argamassas cola C1, C2</div>
                  <div className="text-sm text-gray-700">• Argamassas reboco GP, OC</div>
                  <div className="text-sm text-gray-700">• Rejuntamentos flexíveis</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Isolamentos</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">• XPS (poliestireno extrudido)</div>
                  <div className="text-sm text-gray-700">• EPS (poliestireno expandido)</div>
                  <div className="text-sm text-gray-700">• Lã de rocha em painéis</div>
                  <div className="text-sm text-gray-700">• Lã de vidro em rolos</div>
                  <div className="text-sm text-gray-700">• Isolamento reflectivo</div>
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Normas de Qualidade</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">EN 459 (Cal para construção)</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">EN 13279 (Gesso para construção)</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">EN 12004 (Argamassas cola)</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">EN 13163 (Isolamentos)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Apoio Técnico</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Cálculo de quantidades</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Especificação técnica</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Formação de aplicação</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Suporte pós-venda</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Especifique os materiais que necessita</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={quoteForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={quoteForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={quoteForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="quantity"
                  placeholder="Quantidades (sacos, m², litros)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Lista de materiais necessários e aplicação..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
              </form>

              {/* Product Categories */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Categorias Principais</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>🏗️ Argamassas e ligantes</div>
                  <div>🔥 Isolamentos térmicos</div>
                  <div>💧 Impermeabilização</div>
                  <div>🎨 Acabamentos e decoração</div>
                  <div>🔧 Produtos especiais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriaisDiversosPage;