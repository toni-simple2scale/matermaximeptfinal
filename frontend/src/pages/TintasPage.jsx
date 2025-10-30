import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TintasPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Tintas e Primários',
    quantity: '',
    message: ''
  });

  const tintas = [
    {
      category: 'Tintas',
      products: [
        {
          name: 'Tinta plástica interior e exterior',
          description: 'Tinta versátil para paredes e tetos com acabamento mate ou acetinado.',
          specs: 'Interior e exterior | Mate ou acetinado | Várias cores',
          applications: ['Paredes interiores', 'Paredes exteriores', 'Tetos', 'Acabamentos']
        },
        {
          name: 'Tinta acrílica',
          description: 'Tinta resistente à humidade, ideal para fachadas e zonas exteriores.',
          specs: 'Base acrílica | Resistente à humidade | Alta durabilidade',
          applications: ['Fachadas', 'Exteriores', 'Zonas húmidas', 'Revestimentos duráveis']
        },
        {
          name: 'Primários e selantes',
          description: 'Produtos para preparação e fixação de superfícies antes da pintura.',
          specs: 'Fixação e uniformização | Várias bases',
          applications: ['Preparação de paredes', 'Fixação de superfícies', 'Base para pintura', 'Selagem']
        },
        {
          name: 'Tinta betuminosa',
          description: 'Tinta especial para impermeabilizações e proteção de fundações.',
          specs: 'Base betuminosa | Impermeabilizante | Cor preta',
          applications: ['Impermeabilizações', 'Proteção de fundações', 'Muros enterrados', 'Socos']
        },
        {
          name: 'Tinta para pisos e pavimentos industriais',
          description: 'Tinta de alta resistência ao desgaste para pisos e pavimentos.',
          specs: 'Alta resistência | Acabamento epóxi ou poliuretano',
          applications: ['Pisos industriais', 'Garagens', 'Armazéns', 'Zonas de tráfego intenso']
        }
      ]
    },
    {
      category: 'Isolamentos Líquidos',
      products: [
        {
          name: 'Membranas líquidas impermeabilizantes',
          description: 'Impermeabilizantes aplicáveis a frio que criam uma camada elástica e contínua.',
          specs: 'Aplicação a frio | Elástico | Sem juntas',
          applications: ['Coberturas', 'Terraços', 'Varandas', 'Caleiras']
        },
        {
          name: 'Impermeabilizantes acrílicos',
          description: 'Produtos acrílicos para impermeabilização de coberturas e terraços.',
          specs: 'Base acrílica | Flexível | Várias cores',
          applications: ['Coberturas planas', 'Terraços', 'Varandas', 'Lajes']
        },
        {
          name: 'Impermeabilizantes de base cimentícia',
          description: 'Impermeabilizantes para muros, tanques e zonas enterradas.',
          specs: 'Base cimentícia | Bicomponente | Alta aderência',
          applications: ['Muros enterrados', 'Tanques de água', 'Piscinas', 'Caves']
        },
        {
          name: 'Produtos bituminosos líquidos',
          description: 'Produtos betuminosos para proteção contra infiltrações e humidade.',
          specs: 'Base betuminosa | Aplicação a frio ou quente',
          applications: ['Fundações', 'Proteção de muros', 'Impermeabilizações', 'Anti-humidade']
        },
        {
          name: 'Resinas líquidas',
          description: 'Resinas para reforço e vedação de superfícies em betão ou cerâmica.',
          specs: 'Base epóxi ou poliuretano | Alta resistência',
          applications: ['Reforço de betão', 'Vedação de fissuras', 'Pavimentos', 'Reparações']
        }
      ]
    },
    {
      category: 'Isolamentos Fibrados',
      products: [
        {
          name: 'Revestimentos fibrados elásticos',
          description: 'Revestimentos com fibras de reforço, ideais para fissuras e zonas expostas.',
          specs: 'Com fibras incorporadas | Elástico | Alta resistência',
          applications: ['Fissuras', 'Zonas expostas', 'Coberturas', 'Reparações']
        },
        {
          name: 'Betumes fibrados',
          description: 'Betumes aplicáveis a frio com fibras, alta resistência ao envelhecimento.',
          specs: 'Aplicação a frio | Fibrado | Durável',
          applications: ['Coberturas', 'Impermeabilizações', 'Reparações', 'Proteção duradoura']
        },
        {
          name: 'Telas líquidas com fibra incorporada',
          description: 'Substituem mantas tradicionais em telhados e coberturas.',
          specs: 'Fibra incorporada | Aplicação líquida | Sem juntas',
          applications: ['Telhados', 'Coberturas inclinadas', 'Telhas', 'Substituição de mantas']
        },
        {
          name: 'Reforços em fibra de vidro',
          description: 'Reforços para aplicações com membranas líquidas e resinas.',
          specs: 'Fibra de vidro | Rolos ou malha',
          applications: ['Reforço estrutural', 'Pontos críticos', 'Juntas', 'Cantos']
        }
      ]
    },
    {
      category: 'Acessórios e Complementos',
      products: [
        {
          name: 'Rolos e trinchas para impermeabilizantes',
          description: 'Ferramentas específicas para aplicação de produtos impermeabilizantes.',
          specs: 'Vários tamanhos | Profissionais',
          applications: ['Aplicação de tintas', 'Impermeabilizantes', 'Membranas líquidas', 'Acabamentos']
        },
        {
          name: 'Espátulas e talochas',
          description: 'Ferramentas para aplicação e alisamento de produtos.',
          specs: 'Vários tamanhos e materiais',
          applications: ['Aplicação de massas', 'Alisamento', 'Acabamentos', 'Reparações']
        },
        {
          name: 'Redes de reforço para impermeabilização',
          description: 'Redes em fibra de vidro ou poliéster para reforço.',
          specs: 'Fibra de vidro ou poliéster | Várias gramaturas',
          applications: ['Reforço de impermeabilizações', 'Pontos críticos', 'Fissuras', 'Juntas']
        },
        {
          name: 'Fitas de vedação e silicone impermeável',
          description: 'Fitas e silicones para vedação e acabamentos.',
          specs: 'Autocolantes ou aplicáveis | Impermeáveis',
          applications: ['Vedações', 'Juntas', 'Acabamentos', 'Reparações pontuais']
        }
      ]
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
        alert('Pedido de orçamento para Tintas e Primários enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Tintas e Primários', quantity: '', message: '' });
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
            to="/#produto-13" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
            data-aos="fade-right"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <div data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Tintas</span> e Primários
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Soluções completas em tintas, impermeabilizantes e produtos para proteção e acabamento de superfícies.
          </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            {tintas.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-[#00BFFF] pb-2">
                  {section.category}
                </h2>
                <div className="grid gap-6">
                  {section.products.map((product, index) => (
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
              </div>
            ))}
            
            {/* Additional Options Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200" data-aos="fade-up">
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
                      <span className="text-gray-700">Produtos certificados</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Alta durabilidade</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Fácil aplicação</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Proteção eficaz</span>
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
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para tintas e impermeabilizantes</p>
              
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
                  placeholder="Quantidade estimada (L ou m²)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique o tipo de produto, superfície a tratar, área..."
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

export default TintasPage;
