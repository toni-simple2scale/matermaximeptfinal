import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../mock';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <Star className="h-4 w-4 text-[#00BFFF] mr-2 fill-current" />
            <span className="text-sm font-medium text-[#00BFFF]">Testemunhos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Dizem os Nossos <span className="text-[#00BFFF]">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A confiança dos nossos clientes é o nosso maior património. 
            Veja o que dizem sobre a nossa qualidade e serviço.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-[#00BFFF]/20 transform hover:-translate-y-2"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-6xl text-[#00BFFF]/20 leading-none mb-4">“</div>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  {testimonial.text}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index} 
                    className="h-5 w-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00BFFF]/20 to-blue-200 rounded-full flex items-center justify-center mr-4">
                  <div className="text-[#00BFFF] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section ends here */}
      </div>
    </section>
  );
};

export default TestimonialsSection;