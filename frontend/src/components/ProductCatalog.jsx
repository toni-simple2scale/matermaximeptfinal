import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to remove accents for better search matching
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const products = [
    {
      id: 1,
      title: 'Agregados',
      description: 'Areias, britas e cascalho de diferentes granulometrias para todas as aplicações.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/5xgi4fcc_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_22_02%20PM.png',
      items: ['Areia do Rio', 'Areia Branca', 'Areia Amarela', 'Saibro', 'Brita 1', 'Brita 2', 'Brita 3'],
      link: '/produtos/agregados'
    },
    {
      id: 2,
      title: 'Cimentos e Rebocos',
      description: 'Cimentos e Rebocos de alta qualidade das melhores marcas.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/48tvhaad_Design%20sem%20nome.png',
      items: ['Cimento', 'Cimento Branco', 'Cimento Cola Branco/Cinza', 'Cimento Cola Flexível', 'Reboco Interior', 'Reboco Exterior'],
      link: '/produtos/cimento'
    },
    {
      id: 3,
      title: 'Blocos, Tijolos e Telhas',
      description: 'Ampla variedade de blocos, tijolos e telhas para construção e acabamentos.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/7yeiaauy_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2001_51_46%20PM.png',
      items: ['Blocos de betão', 'Tijolos furados', 'Tijolos maciços', 'Telhas cerâmicas'],
      link: '/produtos/blocos-tijolos'
    },
    {
      id: 4,
      title: 'Pré-moldados de Betão',
      description: 'Elementos pré-fabricados de betão armado para construção civil e infraestruturas.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/288czt18_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_18_00%20PM.png',
      items: ['Vigas de Betão Pré-Moldadas', 'Cúpulas e Semi-Cúpulas', 'Caixas de Betão / Canalizações'],
      link: '/produtos/pre-moldados'
    },
    {
      id: 5,
      title: 'Pavimentos Clássicos e Técnicos',
      description: 'Soluções em pavimentos para exterior, desde clássicos a sistemas drenantes.',
      image: 'https://images.unsplash.com/photo-1676984290997-b862e8f0919c?w=600&h=400&fit=crop&q=80',
      items: ['Holanda', 'Hexagonal', 'Alfa', 'Uni', 'Ecopavé Drenante', 'Grelha de Enrelvamento'],
      link: '/produtos/pavimentos'
    },
    {
      id: 6,
      title: 'Muros',
      description: 'Blocos e elementos para construção de muros e vedações.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/iaf566tn_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_25_06%20PM.png',
      items: ['Jardimuro', 'Murante', 'Gardenbloco', 'Pilar de Muro', 'Floreira', 'Cobremuros'],
      link: '/produtos/muros'
    },
    {
      id: 7,
      title: 'Isolamentos Térmicos e Acústicos',
      description: 'Soluções completas de isolamento térmico, acústico e impermeabilização.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/jzont5c0_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_34_41%20PM.png',
      items: ['Wallmate', 'Roofmate', 'Lã de Rocha', 'Lã de Vidro', 'Cortiça', 'Painéis Sandwich'],
      link: '/produtos/isolamentos'
    },
    {
      id: 8,
      title: 'Proteção e Vedação',
      description: 'Redes, telas e mangas plásticas para proteção e delimitação.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/x8k8t8ys_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_09_37%20PM.png',
      items: ['Rede de vedação', 'Rede sombra', 'Tela anti-ervas', 'Mangas plásticas'],
      link: '/produtos/protecao-vedacao'
    },
    {
      id: 9,
      title: 'Saneamento e Esgotos',
      description: 'Tubagens, sistemas de drenagem e soluções completas para saneamento básico.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/hlouq7lp_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_13_09%20PM.png',
      items: ['Tubo PVC', 'Tubo corrugado', 'Tubo multicamadas', 'Acessórios'],
      link: '/produtos/tubagens'
    },
    {
      id: 10,
      title: 'Aquecimento',
      description: 'Soluções para aquecimento e climatização de espaços e águas.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/73be06ch_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_31_45%20PM.png',
      items: ['Salamandras', 'Bombas de Calor', 'Esquentadores', 'Termoacumuladores'],
      link: '/produtos/aquecimento'
    },
    {
      id: 11,
      title: 'Colas, Selantes e Vedantes',
      description: 'Produtos especializados para vedação, colagem e fixação.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/ti6ox2tw_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_44_49%20PM.png',
      items: ['Silicones e Selantes', 'Colas de Montagem', 'Cola de contacto', 'Pistolas aplicadoras', 'Acessórios'],
      link: '/produtos/colas-selantes'
    },
    {
      id: 12,
      title: 'Ferramentas e Equipamentos',
      description: 'Ferramentas manuais e equipamentos profissionais para construção civil.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/lyxquexw_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_40_48%20PM.png',
      items: ['Colheres de pedreiro', 'Martelos', 'Níveis de bolha', 'Betoneiras', 'Equipamentos de proteção'],
      link: '/produtos/ferramentas'
    },
    {
      id: 13,
      title: 'Tintas e Primários',
      description: 'Tintas, impermeabilizantes e produtos para proteção de superfícies.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop&q=80',
      items: ['Tintas plásticas', 'Impermeabilizantes', 'Membranas líquidas', 'Betumes fibrados'],
      link: '/produtos/tintas'
    },
    {
      id: 14,
      title: 'Banho',
      description: 'Soluções completas para casa de banho. Representantes Ofa e Grohe.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/1ewcc07b_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_47_37%20PM.png',
      items: ['Revestimentos', 'Banheiras & Duches', 'Torneiras', 'Móveis', 'Sanitários', 'Divisórias'],
      link: '/produtos/banho'
    },
    {
      id: 15,
      title: 'Eletrodomésticos',
      description: 'Equipamentos de qualidade para a sua cozinha. Representante Oficial Teka.',
      image: 'https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/yaazrqqq_ChatGPT%20Image%20Oct%2016%2C%202025%2C%2002_51_22%20PM.png',
      items: ['Exaustores', 'Placas de Indução', 'Fornos Elétricos e a Gás', 'Lava-Louças', 'Micro-Ondas', 'Frigoríficos'],
      link: '/produtos/eletrodomesticos'
    }
  ];

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    const searchLower = removeAccents(searchTerm.toLowerCase());
    
    return products.filter(product => {
      // Search in title
      const titleMatch = removeAccents(product.title.toLowerCase()).includes(searchLower);
      
      // Search in description
      const descriptionMatch = removeAccents(product.description.toLowerCase()).includes(searchLower);
      
      // Search in items
      const itemsMatch = product.items.some(item => 
        removeAccents(item.toLowerCase()).includes(searchLower)
      );
      
      return titleMatch || descriptionMatch || itemsMatch;
    });
  }, [searchTerm, products]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center px-4 py-2 bg-[#00BFFF]/10 rounded-full border border-[#00BFFF]/20 mb-4">
            <span className="text-sm font-medium text-[#00BFFF]">Catálogo de Produtos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Materiais de <span className="text-[#00BFFF]">Qualidade Superior</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fornecemos uma vasta gama de materiais de construção das melhores marcas, 
            garantindo qualidade e resistência para a sua obra.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClear={handleClearSearch}
          resultsCount={filteredProducts.length}
        />

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="inline-block p-6 bg-gray-50 rounded-2xl">
                <p className="text-xl text-gray-600 mb-2">🔍 Nenhum produto encontrado</p>
                <p className="text-gray-500">Tente pesquisar por outros termos ou</p>
                <button 
                  onClick={handleClearSearch}
                  className="mt-4 text-[#00BFFF] hover:text-[#0099CC] font-semibold underline"
                >
                  limpe a pesquisa para ver todos os produtos
                </button>
              </div>
            </div>
          ) : (
            filteredProducts.map((product, index) => (
            <div
              key={product.id}
              id={`produto-${product.id}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#00BFFF] transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={product.id === 12 ? { objectPosition: 'center 35%' } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00BFFF] transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Product Items */}
                <div className="space-y-2 mb-6">
                  {product.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#00BFFF] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                  {product.items.length > 3 && (
                    <div className="text-sm text-gray-500 ml-5">
                      +{product.items.length - 3} mais produtos
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link to={product.link}>
                  <Button className="w-full bg-gray-50 hover:bg-[#00BFFF] text-gray-700 hover:text-white border border-gray-200 hover:border-[#00BFFF] transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 group/btn">
                    <span>Ver Detalhes</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Temos muito mais produtos disponíveis. Entre em contacto connosco para uma consulta personalizada.
          </p>
          <div className="flex justify-center">
            <a href="#hero">
              <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contactar Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;