import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { faqData } from '../mock';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <MessageCircle className="h-4 w-4 text-[#00BFFF] mr-2" />
            <span className="text-sm font-medium text-[#00BFFF]">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas <span className="text-[#00BFFF]">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Encontre respostas às perguntas mais comuns sobre os nossos materiais, 
            entregas e serviços.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-xl hover:border-[#00BFFF]/50 transition-all duration-300 px-6 transform hover:scale-[1.02]"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#00BFFF] transition-colors duration-200 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-gradient-to-br from-[#00BFFF]/5 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-[#00BFFF]/10">
          <div className="mb-6">
            <MessageCircle className="h-16 w-16 text-[#00BFFF] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ainda tem <span className="text-[#00BFFF]">Dúvidas?</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A nossa equipa está disponível para esclarecer todas as suas questões 
              e ajudar a encontrar a melhor solução para o seu projeto.
            </p>
          </div>

          <div className="flex justify-center">
            <Button 
              className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contactar por Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;