import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// WhatsApp removed

const TubagensPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Saneamento e Esgotos',
    quantity: '',
    message: ''
  });

  const tubagens = [
    {
      name: 'Tubo PVC Águas',
      description: 'Tubos de PVC para instalações de água potável.',
      specs: 'Vários diâmetros disponíveis | Cor azul',
      applications: ['Água potável', 'Redes prediais', 'Irrigação', 'Piscinas']
    },
    {
      name: 'Tubo PVC Esgotos',
      description: 'Tubos de PVC para redes de esgotos e águas pluviais.',
      specs: 'Vários diâmetros disponíveis | Cor laranja/cinza',
      applications: ['Esgotos domésticos', 'Águas pluviais', 'Drenagem', 'Coletores']
    },
    {
      name: 'Tubo Corrugado',
      description: 'Tubo corrugado flexível para proteção de cabos.',
      specs: 'Vários diâmetros disponíveis | Dupla parede | Flexível',
      applications: ['Proteção cabos', 'Instalações elétricas', 'Telecomunicações', 'Enterramento']
    },
    {
      name: 'Tubo Multicamadas',
      description: 'Tubo compósito para instalações de aquecimento e águas.',
      specs: 'Vários diâmetros disponíveis | PEX-Al-PEX | 95°C máx',
      applications: ['Aquecimento central', 'Águas quentes', 'Ar condicionado', 'Radiadores']
    },
    {
      name: 'Tubo Polietileno PE100',
      description: 'Tubo de polietileno para redes de distribuição de água.',
      specs: 'Vários diâmetros disponíveis | PE100',
      applications: ['Redes públicas', 'Grandes caudais', 'Condutas adutoras', 'Indústria']
    },
    {
      name: 'Tampas e Grelhas em Aço',
      description: 'Tampas e grelhas robustas em aço para sistemas de saneamento e drenagem.',
      specs: 'Material: Aço galvanizado | Várias dimensões e classes de carga',
      applications: ['Saneamento básico', 'Sistemas de drenagem', 'Redes de esgotos', 'Áreas públicas e privadas']
    },
    {
      name: 'Tampas em Ferro Fundido',
      description: 'Tampas de elevada resistência em ferro fundido para infraestruturas.',
      specs: 'Ferro fundido dúctil | Várias classes de carga (A15, B125, C250, D400)',
      applications: ['Redes de saneamento', 'Câmaras de visita', 'Zonas de tráfego', 'Infraestruturas públicas']
    }
  ];

  const acessorios = [
    'Cotovelos 90°',
    'Tês de derivação',
    'Reduções',
    'Uniões',
    'Tampões',
    'Válvulas',
    'Abraçadeiras',
    'Juntas de estanqueidade'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const web3FormData = new FormData();
    web3FormData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);
    web3FormData.append('name', quoteForm.name);
    web3FormData.append('phone', quoteForm.phone);
    web3FormData.append('email', quoteForm.email);
    web3FormData.append('product', quoteForm.product);
    web3FormData.append('quantity', quoteForm.quantity);
    web3FormData.append('message', quoteForm.message);
    web3FormData.append('subject', `Pedido de Orçamento - ${quoteForm.product}`);
    web3FormData.append('from_name', 'Website Matermaxime');
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: web3FormData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Pedido de orçamento para Saneamento e Esgotos enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Saneamento e Esgotos', quantity: '', message: '' });
      } else {
        alert('Erro ao enviar pedido. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Erro ao enviar pedido. Por favor, contacte-nos diretamente.');
    });
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
            to="/#produto-9" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Saneamento</span> e Esgotos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Tubagens, sistemas de drenagem e soluções completas para saneamento básico.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 mb-12">
              {tubagens.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
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
            
            {/* Additional Options Note */}
            <div className="mt-8 mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-center text-gray-700 font-medium">
                E mais opções sob consulta
              </p>
            </div>

            {/* Accessories Section */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Acessórios Disponíveis</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {acessorios.map((acessorio, index) => (
                  <div key={index} className="bg-white/70 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-700 font-medium">{acessorio}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Todos os acessórios disponíveis nos diâmetros correspondentes aos tubos. 
                Contacte-nos para lista completa de acessórios específicos.
              </p>
            </div>

            {/* Technical Info */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Serviços Técnicos</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Projeto de instalações</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Cálculo de perdas de carga</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Seleção de diâmetros</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Apoio à instalação</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pressure Table Removed */}
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Especifique o tipo de instalação e diâmetros</p>
              
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
                  placeholder="Metragem total estimada"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Tipo de instalação (águas/esgotos), diâmetros necessários, acessórios..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
              </form>

              {/* Quick Guide */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Guia Rápido</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Águas: Ø16-25mm residencial</div>
                  <div>• Esgotos: Ø110mm mínimo</div>
                  <div>• Aquecimento: Multicamadas</div>
                  <div>• Proteção: Corrugado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TubagensPage;