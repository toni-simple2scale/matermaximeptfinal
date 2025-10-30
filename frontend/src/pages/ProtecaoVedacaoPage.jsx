import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProtecaoVedacaoPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Proteção e Vedação',
    quantity: '',
    message: ''
  });

  const protecao = [
    {
      category: 'Redes',
      products: [
        {
          name: 'Rede de vedação',
          description: 'Rede para delimitação de terrenos, obras e quintais.',
          specs: 'Várias alturas e malhas | Material resistente',
          applications: ['Delimitação de terrenos', 'Vedação de obras', 'Quintais', 'Segurança']
        },
        {
          name: 'Rede sombra',
          description: 'Rede para proteção solar, ideal para estufas e pátios.',
          specs: 'Várias percentagens de sombreamento | UV resistente',
          applications: ['Proteção solar', 'Estufas', 'Pátios', 'Áreas exteriores']
        },
        {
          name: 'Rede elástica / de proteção',
          description: 'Rede para segurança e contenção temporária.',
          specs: 'Elástica e resistente | Várias dimensões',
          applications: ['Segurança em obras', 'Contenção temporária', 'Proteção', 'Cargas']
        },
        {
          name: 'Rede galinheiro',
          description: 'Rede específica para uso agrícola e criação de animais.',
          specs: 'Malha galvanizada | Várias alturas',
          applications: ['Galinheiros', 'Capoeiras', 'Uso agrícola', 'Criação de animais']
        }
      ]
    },
    {
      category: 'Telas',
      products: [
        {
          name: 'Tela anti-ervas',
          description: 'Tela geotêxtil que evita o crescimento de ervas, muito usada em jardinagem.',
          specs: 'Geotêxtil | Permeável | Várias gramaturas',
          applications: ['Jardinagem', 'Paisagismo', 'Controlo de ervas', 'Canteiros']
        },
        {
          name: 'Tela plástica de cobertura',
          description: 'Tela para proteção temporária de materiais e estruturas.',
          specs: 'Plástico resistente | Várias espessuras',
          applications: ['Proteção de materiais', 'Coberturas temporárias', 'Obras', 'Armazenamento']
        },
        {
          name: 'Tela de drenagem',
          description: 'Tela geotêxtil usada em solos, fundações e sistemas de drenagem.',
          specs: 'Geotêxtil drenante | Alta permeabilidade',
          applications: ['Drenagem de solos', 'Fundações', 'Obras de terra', 'Infraestruturas']
        }
      ]
    },
    {
      category: 'Mangas Plásticas',
      products: [
        {
          name: 'Manga plástica preta',
          description: 'Manga em plástico preto para proteção de materiais, entulho e resíduos.',
          specs: 'Plástico resistente preto | Várias larguras',
          applications: ['Proteção de materiais', 'Entulho', 'Resíduos', 'Obras']
        },
        {
          name: 'Manga plástica translúcida',
          description: 'Manga em plástico translúcido para proteção leve e coberturas.',
          specs: 'Plástico translúcido | Leve e flexível',
          applications: ['Proteção leve', 'Coberturas temporárias', 'Obras', 'Armazenamento']
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
        alert('Pedido de orçamento para Proteção e Vedação enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Proteção e Vedação', quantity: '', message: '' });
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
            to="/#produto-8" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
            data-aos="fade-right"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <div data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Proteção</span> e Vedação
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Soluções completas em redes, telas e mangas plásticas para proteção, vedação e delimitação.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            {protecao.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-[#00BFFF] pb-2">
                  {section.category}
                </h2>
                <div className="grid gap-6">
                  {section.products.map((product, index) => (
                    <div key={index} className="bg-white rounded-2xl
                  data-aos="fade-up"
                  data-aos-delay={index * 100} shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
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
                      <span className="text-gray-700">Alta resistência</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Materiais certificados</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Diversas aplicações</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Fácil instalação</span>
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
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para redes e telas</p>
              
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
                  placeholder="Quantidade estimada (m ou m²)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique o tipo de produto, dimensões, aplicação pretendida..."
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

export default ProtecaoVedacaoPage;
