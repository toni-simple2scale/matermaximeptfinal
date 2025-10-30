import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Truck, Clock, Shield, Phone } from 'lucide-react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare form data for Web3Forms
    const web3FormData = new FormData();
    web3FormData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);
    web3FormData.append('name', formData.name);
    web3FormData.append('phone', formData.phone);
    web3FormData.append('email', formData.email);
    web3FormData.append('message', formData.message);
    web3FormData.append('subject', 'Novo Pedido de Orçamento - Website Matermaxime');
    web3FormData.append('from_name', 'Website Matermaxime');
    
    // Send to Web3Forms
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: web3FormData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Pedido de orçamento enviado com sucesso! Entraremos em contacto brevemente.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert('Erro ao enviar pedido. Por favor, tente novamente ou contacte-nos diretamente.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Erro ao enviar pedido. Por favor, tente novamente ou contacte-nos diretamente.');
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BFFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20">
                <Shield className="h-4 w-4 text-[#00BFFF] mr-2" />
                <span className="text-sm font-medium text-[#00BFFF]">Mais de 25 anos de experiência</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Materiais de Construção
                <span className="text-[#00BFFF] block">de Qualidade</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Fornecimento e entrega de materiais de construção com frota própria. 
                Areias, britas, cimento, blocos, tijolos, ferragens para construção e muito mais para obras de qualquer dimensão.
              </p>
              
              <div className="mt-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#00BFFF]">💡 Duas opções convenientes:</span> 
                  Entrega no local da obra ou levantamento nos nossos armazéns.
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Truck className="h-8 w-8 text-[#00BFFF]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Camiões</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-[#00BFFF]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Entrega Rápida</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-[#00BFFF]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <a href="tel:+351219279178" className="flex items-center group">
                <Phone className="h-5 w-5 text-[#00BFFF] mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-gray-600">Contacto de urgência</div>
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-[#00BFFF] transition-colors">+351 21 927 9178</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:ml-8">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200/50">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pedir Orçamento Grátis</h2>
                <p className="text-gray-600">Receba uma proposta personalizada em 24 horas</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Número de telefone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition-all duration-200"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva os materiais que necessita..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition-all duration-200 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Orçamento
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Resposta garantida em 24 horas. Sem compromisso.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;