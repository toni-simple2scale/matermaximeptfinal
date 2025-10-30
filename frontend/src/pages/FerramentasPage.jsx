import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Truck, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FerramentasPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Ferramentas e Equipamentos',
    quantity: '',
    message: ''
  });

  const ferramentas = [
    {
      name: 'Colheres de pedreiro / Desempenadeiras',
      description: 'Ferramentas básicas para aplicação e alisamento de argamassas.',
      specs: 'Várias medidas e tipos disponíveis',
      applications: ['Aplicação de argamassa', 'Alisamento de superfícies', 'Trabalhos de reboco', 'Acabamentos']
    },
    {
      name: 'Espátulas / Riscadores',
      description: 'Ferramentas para aplicação de massas e criação de texturas.',
      specs: 'Diferentes larguras e formatos',
      applications: ['Aplicação de massas', 'Criação de texturas', 'Acabamentos finos', 'Trabalhos de precisão']
    },
    {
      name: 'Talhadeiras / Formões',
      description: 'Ferramentas de corte para trabalhos em pedra e betão.',
      specs: 'Várias medidas disponíveis',
      applications: ['Corte de pedra', 'Trabalhos em betão', 'Abertura de regos', 'Demolições pontuais']
    },
    {
      name: 'Martelos (de pedreiro, de borracha)',
      description: 'Martelos especializados para diferentes tipos de trabalho.',
      specs: 'Pedreiro e borracha | Vários pesos',
      applications: ['Assentamento de materiais', 'Demolições', 'Ajustes de posição', 'Trabalhos gerais']
    },
    {
      name: 'Alicates e Chaves de aperto',
      description: 'Ferramentas para fixação e aperto de elementos.',
      specs: 'Vários tipos e medidas',
      applications: ['Fixações', 'Apertos', 'Trabalhos elétricos', 'Montagem de estruturas']
    },
    {
      name: 'Níveis de bolha / Réguas de nível',
      description: 'Instrumentos de medição para nivelamento e alinhamento.',
      specs: 'Vários comprimentos disponíveis',
      applications: ['Nivelamento', 'Alinhamento', 'Verificação de prumo', 'Controlo de qualidade']
    },
    {
      name: 'Fitas métricas e esquadros',
      description: 'Instrumentos de medição para distâncias e ângulos.',
      specs: 'Várias medidas disponíveis',
      applications: ['Medições', 'Marcação', 'Verificação de ângulos', 'Planeamento de obra']
    },
    {
      name: 'Cortadores de azulejo / Serra manual',
      description: 'Ferramentas para corte de revestimentos cerâmicos.',
      specs: 'Manuais e com disco',
      applications: ['Corte de azulejos', 'Corte de cerâmicos', 'Acabamentos', 'Revestimentos']
    },
    {
      name: 'Pincéis e Rolo de Pintura (para acabamentos)',
      description: 'Ferramentas para aplicação de tintas e vernizes.',
      specs: 'Vários tamanhos e tipos',
      applications: ['Pintura', 'Acabamentos', 'Proteção de superfícies', 'Manutenção']
    },
    {
      name: 'Esquadro de pedreiro',
      description: 'Ferramenta para verificação de ângulos retos na construção.',
      specs: 'Várias medidas disponíveis',
      applications: ['Verificação de ângulos', 'Marcação', 'Alinhamento', 'Controlo geométrico']
    },
    {
      name: 'Carros de mão / Carrinhos de obra',
      description: 'Equipamentos para transporte de materiais na obra.',
      specs: 'Várias capacidades disponíveis',
      applications: ['Transporte de materiais', 'Movimentação de entulho', 'Logística de obra', 'Produtividade']
    },
    {
      name: 'Baldes e Bacias de mistura',
      description: 'Recipientes para preparação e transporte de misturas.',
      specs: 'Várias capacidades disponíveis',
      applications: ['Mistura de argamassas', 'Transporte de materiais', 'Armazenamento', 'Limpeza']
    },
    {
      name: 'Andaimes portáteis / Escadas de mão',
      description: 'Equipamentos de acesso para trabalhos em altura.',
      specs: 'Várias alturas e configurações',
      applications: ['Trabalhos em altura', 'Acesso seguro', 'Manutenção', 'Acabamentos elevados']
    },
    {
      name: 'Betoneiras (manuais ou elétricas)',
      description: 'Equipamentos para mistura de betão e argamassas.',
      specs: 'Manuais e elétricas | Várias capacidades',
      applications: ['Mistura de betão', 'Preparação de argamassas', 'Produtividade', 'Qualidade de mistura']
    },
    {
      name: 'Brocas e perfuradores (para betão ou tijolo)',
      description: 'Ferramentas para perfuração em materiais de construção.',
      specs: 'Vários diâmetros e tipos',
      applications: ['Perfuração', 'Fixações', 'Instalações', 'Furação de materiais']
    },
    {
      name: 'Disco de corte / Serra circular',
      description: 'Ferramentas de corte para diversos materiais.',
      specs: 'Vários diâmetros e materiais',
      applications: ['Corte de materiais', 'Dimensionamento', 'Acabamentos', 'Preparação de peças']
    },
    {
      name: 'Luvas, capacetes, botas e óculos de proteção',
      description: 'Equipamentos de proteção individual para segurança na obra.',
      specs: 'Vários tamanhos e especificações',
      applications: ['Proteção individual', 'Segurança na obra', 'Prevenção de acidentes', 'Conformidade legal']
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
        alert('Pedido de orçamento para Ferramentas e Equipamentos enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Ferramentas e Equipamentos', quantity: '', message: '' });
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
            <span className="text-[#00BFFF]">Ferramentas</span> e Equipamentos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ferramentas manuais e equipamentos profissionais para todas as necessidades da construção civil.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {ferramentas.map((product, index) => (
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

            {/* Serviços Complementares Removed */}
          </div>

          {/* Quote Form Sidebar */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pedir Orçamento</h3>
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para ferramentas e equipamentos</p>
              
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
                  placeholder="Quantidade estimada"
                  value={quoteForm.quantity}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Especifique as ferramentas necessárias, marca preferida, tipo de obra..."
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

export default FerramentasPage;