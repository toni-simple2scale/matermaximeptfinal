import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// WhatsApp removed

const BlocosTijolosPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Blocos e Tijolos',
    quantity: '',
    message: ''
  });

  const produtos = [
    {
      name: 'Blocos de Betão',
      description: 'Blocos estruturais de betão para construção de alvenarias.',
      specs: 'Várias dimensões disponíveis',
      applications: ['Paredes estruturais', 'Muros de contenção', 'Fundações', 'Separações']
    },
    {
      name: 'Blocos de Betão Face à Vista',
      description: 'Blocos de betão com acabamento estético para construção sem necessidade de reboco.',
      specs: 'Face à vista | Várias cores e texturas | Acabamento liso ou rugoso',
      applications: ['Fachadas', 'Muros decorativos', 'Paredes aparentes', 'Arquitectura moderna']
    },
    {
      name: 'Blocos Térmicos',
      description: 'Blocos cerâmicos com isolamento térmico integrado.',
      specs: 'Várias dimensões | Isolamento integrado',
      applications: ['Paredes exteriores', 'Eficiência energética', 'Isolamento térmico', 'Isolamento acústico']
    },
    {
      name: 'Blocos Leca',
      description: 'Blocos de argila expandida, leves e isolantes.',
      specs: 'Várias dimensões | Argila expandida',
      applications: ['Isolamento', 'Lajes', 'Enchimentos', 'Aplicações especiais']
    },
    {
      name: 'Abobadilhas de Leca',
      description: 'Elementos em leca para lajes aligeiradas e pavimentos.',
      specs: 'Várias dimensões disponíveis',
      applications: ['Lajes aligeiradas', 'Pavimentos', 'Construção sustentável', 'Isolamento']
    },
    {
      name: 'Tijolos Cerâmicos',
      description: 'Tijolos cerâmicos tradicionais para construção.',
      specs: 'Várias dimensões e tipos',
      applications: ['Paredes', 'Alvenarias', 'Construção tradicional', 'Revestimentos']
    },
    {
      name: 'Tijolos Térmicos',
      description: 'Tijolos cerâmicos com propriedades de isolamento térmico.',
      specs: 'Várias dimensões | Isolamento térmico',
      applications: ['Paredes térmicas', 'Eficiência energética', 'Isolamento', 'Construção sustentável']
    },
    {
      name: 'Telhas Cerâmicas',
      description: 'Telhas cerâmicas para coberturas tradicionais e modernas.',
      specs: 'Telha Marselha, Telha Luca, Telha Portuguesa e mais',
      applications: ['Coberturas', 'Telhados tradicionais', 'Restaurações', 'Construção nova']
    },
    {
      name: 'Acessórios de Acabamento (Telhas)',
      description: 'Complementos e acessórios para sistemas de cobertura.',
      specs: 'Telhão/Cumeeira, Meia Telha, Telha de Beirado e mais',
      applications: ['Remates de cobertura', 'Cumeeiras', 'Beirados', 'Acabamentos especiais']
    },
    {
      name: 'Acessórios de Fixação',
      description: 'Sistemas de fixação para telhas e coberturas.',
      specs: 'Pata de Leão, Mola de Fixação, Parafusos Auto-perfurantes, Ganchos de Cumeeira e mais',
      applications: ['Fixação de telhas', 'Sistemas de segurança', 'Montagem de coberturas', 'Acessórios técnicos']
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
        alert('Pedido de orçamento para Blocos e Tijolos enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Blocos e Tijolos', quantity: '', message: '' });
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
            to="/#produto-3" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
            data-aos="fade-right"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
          <div data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BFFF]">Blocos,</span> Tijolos e Telhas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ampla variedade de blocos e tijolos para construção e acabamentos.
          </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {produtos.map((product, index) => (
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
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200" data-aos="fade-up">
              <p className="text-center text-gray-700 font-medium">
                E mais opções sob consulta
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8" data-aos="fade-up">
              <div className="text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Características Técnicas</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Resistência ao fogo</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Isolamento térmico e acústico</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Conformidade com normas europeias</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Durabilidade comprovada</span>
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
              <p className="text-gray-600 mb-6">Calcule a quantidade necessária para o seu projeto</p>
              
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
                  placeholder="Área a construir (m²) ou unidades"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Detalhes: tipo de parede, espessura, aplicação..."
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

export default BlocosTijolosPage;