import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const IsolamentosPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Isolamentos Térmicos e Acústicos',
    quantity: '',
    message: ''
  });

  const isolamentos = [
    {
      name: 'Wallmate',
      description: 'Placas de poliestireno extrudido especialmente desenvolvidas para isolamento de paredes.',
      specs: 'Poliestireno extrudido (XPS) | Alta resistência à compressão',
      applications: ['Isolamento de paredes', 'Fachadas', 'Paredes interiores', 'Reabilitação']
    },
    {
      name: 'Roofmate',
      description: 'Placas de poliestireno extrudido para isolamento térmico de coberturas.',
      specs: 'XPS de alta densidade | Resistência à humidade',
      applications: ['Coberturas planas', 'Telhados inclinados', 'Coberturas invertidas', 'Terraços']
    },
    {
      name: 'Floormate',
      description: 'Isolamento térmico de alta performance para pavimentos.',
      specs: 'Alta resistência mecânica | Baixa condutibilidade térmica',
      applications: ['Pavimentos radiantes', 'Lajes de piso', 'Isolamento sob betonilha', 'Pisos térreos']
    },
    {
      name: 'XPS / EPS',
      description: 'Poliestireno extrudido e expandido disponível em várias densidades.',
      specs: 'Várias densidades e espessuras | XPS e EPS',
      applications: ['Isolamento geral', 'Construção civil', 'Aplicações diversas', 'Projetos customizados']
    },
    {
      name: 'Lã de Rocha',
      description: 'Isolamento térmico e acústico de alta qualidade, resistente ao fogo.',
      specs: 'Resistente ao fogo | Excelente isolamento acústico',
      applications: ['Isolamento térmico', 'Isolamento acústico', 'Proteção contra incêndios', 'Fachadas e coberturas']
    },
    {
      name: 'Lã de Vidro',
      description: 'Isolamento leve e versátil, ideal para tetos e divisórias.',
      specs: 'Material leve | Fácil aplicação',
      applications: ['Tetos falsos', 'Divisórias', 'Sótãos', 'Paredes interiores']
    },
    {
      name: 'Cortiça Expandida / Natural',
      description: 'Isolante ecológico, natural e respirável de origem portuguesa.',
      specs: 'Material natural | Ecológico e sustentável',
      applications: ['Isolamento ecológico', 'Revestimentos', 'Construção sustentável', 'Respiração de paredes']
    },
    {
      name: 'Painéis Sandwich',
      description: 'Painéis compostos para coberturas e fachadas de edifícios industriais.',
      specs: 'Estrutura composta | Alta eficiência térmica',
      applications: ['Coberturas industriais', 'Fachadas', 'Armazéns', 'Pavilhões']
    },
    {
      name: 'Painéis Acústicos de Lã Mineral',
      description: 'Painéis especializados para controlo e absorção sonora.',
      specs: 'Alta absorção acústica | Lã mineral',
      applications: ['Isolamento acústico', 'Salas de música', 'Auditórios', 'Escritórios']
    },
    {
      name: 'Mantas Acústicas / Subpavimentos',
      description: 'Mantas para isolamento acústico de impacto em pavimentos.',
      specs: 'Redução de ruído de impacto | Várias espessuras',
      applications: ['Subpavimentos', 'Isolamento acústico', 'Pisos flutuantes', 'Apartamentos']
    },
    {
      name: 'Espumas Acústicas',
      description: 'Espumas absorventes de som para tratamento acústico.',
      specs: 'Alta absorção sonora | Várias densidades',
      applications: ['Estúdios', 'Home cinema', 'Salas de ensaio', 'Correção acústica']
    },
    {
      name: 'Telas Asfálticas',
      description: 'Membranas betuminosas para impermeabilização de coberturas e fundações.',
      specs: 'Base betuminosa | Alta impermeabilização',
      applications: ['Coberturas', 'Fundações', 'Impermeabilização', 'Proteção estrutural']
    },
    {
      name: 'Membranas Impermeáveis / Geomembranas',
      description: 'Membranas sintéticas de alta resistência para impermeabilização.',
      specs: 'Material sintético | Alta durabilidade',
      applications: ['Impermeabilização', 'Proteção de estruturas', 'Fundações', 'Contenção']
    },
    {
      name: 'Mantas Betuminosas',
      description: 'Mantas impermeabilizantes à base de betume modificado.',
      specs: 'Betume modificado | Aplicação a quente ou frio',
      applications: ['Impermeabilização de coberturas', 'Terraços', 'Caves', 'Fundações']
    },
    {
      name: 'Barreiras de Vapor / Folhas de Alumínio',
      description: 'Películas para controlo de condensação e migração de vapor.',
      specs: 'Folhas de alumínio ou polietileno | Controlo de vapor',
      applications: ['Barreiras de vapor', 'Controlo de condensação', 'Coberturas', 'Paredes']
    }
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
        alert('Pedido de orçamento para Isolamentos Térmicos e Acústicos enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Isolamentos Térmicos e Acústicos', quantity: '', message: '' });
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
            to="/#produto-7" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
            data-aos="fade-right"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <div data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Isolamentos</span> Térmicos e Acústicos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Soluções completas de isolamento térmico, acústico e impermeabilização para todo tipo de construção.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {isolamentos.map((product, index) => (
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
            
            {/* Additional Options Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg" data-aos="fade-up"> border border-blue-200">
              <p className="text-center text-gray-700 font-medium">
                E mais opções sob consulta
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gradient-to-r" data-aos="fade-up"> from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Características Técnicas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Alta performance térmica</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Isolamento acústico eficaz</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Produtos certificados</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Sustentabilidade</span>
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
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para isolamentos</p>
              
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
                  placeholder="Quantidade estimada (m²)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique o tipo de isolamento, área a isolar, requisitos técnicos..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsolamentosPage;
