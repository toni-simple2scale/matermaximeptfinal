import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// WhatsApp removed

const FerroPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Ferragens para Construção',
    quantity: '',
    message: ''
  });

  const ferros = [
    {
      name: 'Varão Ø6mm',
      description: 'Varão de ferro nervurado para armaduras leves e estribos.',
      specs: 'Diâmetro: 6mm',
      applications: ['Estribos', 'Armaduras leves', 'Malhas de distribuição', 'Elementos secundários']
    },
    {
      name: 'Varão Ø8mm', 
      description: 'Varão de aço para armaduras estruturais de pequeno porte.',
      specs: 'Diâmetro: 8mm',
      applications: ['Lajes', 'Vigas pequenas', 'Pilares', 'Armaduras principais']
    },
    {
      name: 'Varão Ø10mm',
      description: 'Varão estrutural para elementos de betão armado.',
      specs: 'Diâmetro: 10mm',
      applications: ['Lajes estruturais', 'Vigas', 'Pilares', 'Fundações']
    },
    {
      name: 'Varão Ø12mm',
      description: 'Varão de alta resistência para estruturas principais.',
      specs: 'Diâmetro: 12mm', 
      applications: ['Estruturas principais', 'Fundações pesadas', 'Vigas principais', 'Pilares estruturais']
    },
    {
      name: 'Varão Ø16mm',
      description: 'Varão de grande diâmetro para estruturas pesadas.',
      specs: 'Diâmetro: 16mm',
      applications: ['Grandes estruturas', 'Pontes', 'Edifícios industriais', 'Fundações especiais']
    },
    {
      name: 'Rede Malhasol',
      description: 'Malha de aço soldada para lajes e pavimentos.',
      specs: 'Malha: 15x15cm | Ø6mm | Dimensões: 2.4x6m',
      applications: ['Lajes', 'Pavimentos industriais', 'Estradas', 'Reforços estruturais']
    },
    {
      name: 'Estribos',
      description: 'Estribos pré-fabricados para estruturas de betão armado.',
      specs: 'Medidas: Várias medidas',
      applications: ['Vigas', 'Pilares', 'Estruturas de betão', 'Reforços transversais']
    },
    {
      name: 'Arame Queimado',
      description: 'Arame de ferro para amarrações e fixações diversas.',
      specs: 'Vendido ao Kg | Vários diâmetros disponíveis',
      applications: ['Amarrações', 'Fixações', 'Construção geral', 'Trabalhos diversos']
    },
    {
      name: 'Pregos',
      description: 'Pregos de ferro para fixações e carpintaria.',
      specs: 'Medidas: Várias medidas',
      applications: ['Carpintaria', 'Fixações', 'Construção de madeira', 'Trabalhos gerais']
    },
    {
      name: 'Painéis Eletrosoldados',
      description: 'Painéis de malha eletrosoldada para reforço estrutural e vedações.',
      specs: 'Várias medidas disponíveis | Malha soldada industrialmente',
      applications: ['Vedações', 'Reforço de lajes', 'Muros', 'Estruturas diversas']
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
        alert('Pedido de orçamento para Ferragens para Construção enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Ferragens para Construção', quantity: '', message: '' });
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
            <span className="text-[#00BFFF]">Ferragens</span> para Construção
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Varões, estribos, pregos, arame e outras ferragens de ferro para todas as aplicações estruturais e de construção.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {ferros.map((product, index) => (
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
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Serviços Complementares</h3>
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Corte à medida</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Dobragem de estribos</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Preparação de armaduras</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Cálculo de quantidades</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Table Removed */}
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Especifique as quantidades e diâmetros necessários</p>
              
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
                  placeholder="Quantidade (kg ou toneladas)"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique tipos de ferragens, diâmetros, medidas, se precisa de corte ou dobragem..."
                  value={quoteForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
                
                <Button type="submit" className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Solicitar Orçamento
                </Button>
              </form>

              {/* Quick Calculator Removed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerroPage;