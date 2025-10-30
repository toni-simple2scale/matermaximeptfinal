import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PavimentosPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Pavimentos Clássicos e Técnicos',
    quantity: '',
    message: ''
  });

  const pavimentos = [
    {
      name: 'Holanda',
      description: 'Blocos retangulares com encaixe tipo espinha de peixe, disponíveis em várias cores.',
      specs: 'Encaixe espinha de peixe | Várias cores',
      applications: ['Passeios', 'Áreas pedonais', 'Jardins', 'Zonas decorativas']
    },
    {
      name: 'Hexagonal',
      description: 'Blocos com formato hexagonal, oferecendo um padrão geométrico distinto.',
      specs: 'Formato hexagonal | Padrão geométrico',
      applications: ['Espaços exteriores', 'Design diferenciado', 'Áreas pedonais', 'Projetos especiais']
    },
    {
      name: 'Quadrado',
      description: 'Blocos de formato quadrado, adequados para áreas pedonais.',
      specs: 'Formato quadrado | Várias dimensões',
      applications: ['Passeios', 'Áreas pedonais', 'Praças', 'Espaços públicos']
    },
    {
      name: 'Rústico',
      description: 'Blocos com superfície rugosa, proporcionando um acabamento tradicional.',
      specs: 'Superfície rugosa | Acabamento tradicional',
      applications: ['Jardins', 'Áreas rurais', 'Recuperação histórica', 'Ambientes tradicionais']
    },
    {
      name: 'Românico',
      description: 'Blocos com ângulos retos, ideais para recuperação de espaços históricos.',
      specs: 'Ângulos retos | Estilo histórico',
      applications: ['Centros históricos', 'Recuperação patrimonial', 'Zonas antigas', 'Projetos de requalificação']
    },
    {
      name: 'Lajeta Medieval',
      description: 'Blocos de ângulos retos, reduzindo as juntas de união.',
      specs: 'Ângulos retos | Juntas reduzidas',
      applications: ['Zonas históricas', 'Áreas nobres', 'Centros urbanos', 'Recuperação de património']
    },
    {
      name: 'Alfa',
      description: 'Blocos com acabamento de cor variada, indicados para espaços públicos com circulação intensa.',
      specs: 'Cor variada | Alta resistência',
      applications: ['Espaços públicos', 'Tráfego intenso', 'Praças', 'Avenidas']
    },
    {
      name: 'Uni',
      description: 'Blocos robustos, adequados para áreas de elevada pressão e circulação.',
      specs: 'Estrutura robusta | Elevada resistência',
      applications: ['Tráfego pesado', 'Áreas industriais', 'Parques de estacionamento', 'Zonas de carga']
    },
    {
      name: 'Clássico',
      description: 'Blocos versáteis, aplicáveis em diversos contextos.',
      specs: 'Design versátil | Múltiplas aplicações',
      applications: ['Áreas residenciais', 'Espaços comerciais', 'Passeios', 'Projetos diversos']
    },
    {
      name: 'Ecopavé',
      description: 'Blocos com dupla camada, indicados para tráfego exterior.',
      specs: 'Dupla camada | Tráfego exterior',
      applications: ['Estradas', 'Acessos', 'Áreas de circulação', 'Tráfego ligeiro']
    },
    {
      name: 'Ecopavé Drenante',
      description: 'Blocos com camada drenante, permitindo a infiltração de águas pluviais.',
      specs: 'Camada drenante | Infiltração de águas',
      applications: ['Gestão de águas pluviais', 'Zonas sustentáveis', 'Parques', 'Áreas verdes']
    },
    {
      name: 'Uni Drenante',
      description: 'Blocos robustos com capacidade de drenagem.',
      specs: 'Robusto | Sistema drenante',
      applications: ['Tráfego com drenagem', 'Estacionamentos', 'Zonas industriais', 'Áreas sustentáveis']
    },
    {
      name: 'Alfa Drenante',
      description: 'Blocos com acabamento variado e capacidade de drenagem.',
      specs: 'Acabamento variado | Drenante',
      applications: ['Espaços públicos', 'Gestão de águas', 'Praças', 'Zonas de circulação']
    },
    {
      name: 'Clássico Drenante',
      description: 'Blocos versáteis com função drenante.',
      specs: 'Versátil | Sistema de drenagem',
      applications: ['Áreas residenciais', 'Sustentabilidade', 'Jardins', 'Espaços exteriores']
    },
    {
      name: 'Grelha de Enrelvamento',
      description: 'Grelha para criação de superfícies enrelvadas com suporte estrutural.',
      specs: 'Sistema de enrelvamento | Estrutura reforçada',
      applications: ['Estacionamentos verdes', 'Áreas de lazer', 'Zonas ecológicas', 'Espaços paisagísticos']
    },
    {
      name: 'Grelha Pitonada',
      description: 'Grelha com sistema pitonado para aplicações especializadas.',
      specs: 'Sistema pitonado | Aplicação especializada',
      applications: ['Áreas técnicas', 'Zonas de drenagem', 'Projetos específicos', 'Soluções especiais']
    },
    {
      name: 'Lajetas de Cimento Tradicionais e Ornamentais',
      description: 'Lajetas em cimento para pavimentação com acabamentos tradicionais e decorativos.',
      specs: 'Várias cores e padrões | Acabamento tradicional e ornamental',
      applications: ['Passeios', 'Jardins', 'Áreas pedonais', 'Pavimentação decorativa']
    },
    {
      name: 'Lajetas Pitonadas',
      description: 'Lajetas com superfície pitonada para maior aderência e segurança.',
      specs: 'Superfície antiderrapante | Segurança reforçada',
      applications: ['Rampas', 'Áreas húmidas', 'Zonas de segurança', 'Acessos']
    },
    {
      name: 'Lajetas Direcionais',
      description: 'Lajetas com padrão direcional para orientação de pessoas com deficiência visual.',
      specs: 'Sistema tátil | Conformidade normativa',
      applications: ['Acessibilidade', 'Passeios públicos', 'Zonas pedonais', 'Inclusão']
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
        alert('Pedido de orçamento para Pavimentos Clássicos e Técnicos enviado com sucesso!');
        setQuoteForm({ name: '', phone: '', email: '', product: 'Pavimentos Clássicos e Técnicos', quantity: '', message: '' });
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
            <span className="text-[#00BFFF]">Pavimentos</span> Clássicos e Técnicos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Soluções completas em pavimentos para exterior, desde blocos clássicos a sistemas drenantes e ecológicos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {pavimentos.map((product, index) => (
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
                      <span className="text-gray-700">Alta resistência</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Durabilidade garantida</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Soluções sustentáveis</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#00BFFF] mr-3" />
                      <span className="text-gray-700">Fácil manutenção</span>
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
              <p className="text-gray-600 mb-6">Receba uma proposta personalizada para pavimentos</p>
              
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
                  placeholder="Especifique o tipo de pavimento, área a pavimentar, tipo de tráfego..."
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

export default PavimentosPage;
