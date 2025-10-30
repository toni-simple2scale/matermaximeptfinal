import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const EletrodomesticosPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Eletrodomésticos',
    quantity: '',
    message: ''
  });

  const eletrodomesticos = [
    {
      name: 'Exaustores',
      description: 'Exaustores de cozinha com elevada capacidade de extração e design moderno.',
      specs: 'Marca Teka | Vários modelos e potências',
      applications: ['Cozinhas residenciais', 'Cozinhas profissionais', 'Remodelações', 'Construção nova']
    },
    {
      name: 'Placas de Indução',
      description: 'Placas de indução eficientes com tecnologia de última geração.',
      specs: 'Marca Teka | Várias zonas de cozedura | Touch control',
      applications: ['Cozinhas modernas', 'Eficiência energética', 'Cozinha segura', 'Design minimalista']
    },
    {
      name: 'Fornos Elétricos e a Gás',
      description: 'Fornos de alta performance com múltiplas funções de cozedura.',
      specs: 'Marca Teka | Elétricos e a gás | Multifunções',
      applications: ['Cozinha doméstica', 'Pastelaria', 'Cozinha profissional', 'Assados perfeitos']
    },
    {
      name: 'Lava-Louças',
      description: 'Máquinas de lavar louça eficientes e silenciosas.',
      specs: 'Marca Teka | Várias capacidades | Baixo consumo',
      applications: ['Cozinhas', 'Residências', 'Apartamentos', 'Praticidade diária']
    },
    {
      name: 'Micro-Ondas',
      description: 'Micro-ondas com tecnologias avançadas de aquecimento.',
      specs: 'Marca Teka | Várias potências | Integráveis ou livres',
      applications: ['Aquecimento rápido', 'Descongelação', 'Cozinha moderna', 'Poupança de tempo']
    },
    {
      name: 'Frigoríficos',
      description: 'Frigoríficos e combinados com tecnologia de conservação superior.',
      specs: 'Marca Teka | Classe energética A+ | Vários modelos',
      applications: ['Conservação de alimentos', 'Cozinhas', 'Eficiência energética', 'Design integrado']
    },
    {
      name: 'Máquina de Lavar Louça',
      description: 'Máquinas de lavar louça com programas versáteis e económicos.',
      specs: 'Marca Teka | Baixo ruído | Vários programas',
      applications: ['Limpeza eficiente', 'Poupança de água', 'Cozinhas modernas', 'Facilidade de uso']
    },
    {
      name: 'Garrafeiras',
      description: 'Garrafeiras climatizadas para conservação ideal de vinhos.',
      specs: 'Marca Teka | Controlo de temperatura | Várias capacidades',
      applications: ['Conservação de vinhos', 'Cozinhas gourmet', 'Salas de jantar', 'Adegas']
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
        alert('Pedido de orçamento para Eletrodomésticos enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Eletrodomésticos', quantity: '', message: '' });
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
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Eletrodomésticos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Equipamentos de qualidade para a sua cozinha, com tecnologia de ponta e design moderno.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            {/* Brands Section */}
            <div className="mb-12 bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-[#00BFFF] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Representante Oficial</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Somos representantes oficiais da marca líder em eletrodomésticos
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12">
                  {/* Teka Logo */}
                  <div className="bg-white rounded-xl px-10 py-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/lboc2h9r_TEKA%20LOGO%20FINAL.png" 
                      alt="Teka Logo" 
                      className="h-16 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none'}} className="text-2xl font-bold text-[#00BFFF]">Teka</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Qualidade garantida e suporte técnico especializado
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {eletrodomesticos.map((product, index) => (
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
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-center text-gray-700 font-medium">
                E mais opções sob consulta
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
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
                      <span className="text-gray-700">Garantia da marca</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Eficiência energética</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Design moderno</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para eletrodomésticos</p>
              
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
                  placeholder="Quantidade de equipamentos"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique os eletrodomésticos necessários, dimensões da cozinha, modelo pretendido..."
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

export default EletrodomesticosPage;
