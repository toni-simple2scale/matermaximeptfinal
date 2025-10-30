import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Frota', href: '#frota' },
    { label: 'Loja', href: '#nova-loja' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center cursor-pointer">
            <img 
              src="https://customer-assets.emergentagent.com/job_matermaxime-store/artifacts/1m0s5sp0_MATERMAXIME-LOGO-sem-fundo.png" 
              alt="Matermaxime Logo" 
              className="h-16 w-auto mt-1 transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#00BFFF] transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFFF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+351219279178" className="flex items-center text-gray-700 hover:text-[#00BFFF] transition-colors">
              <Phone className="h-4 w-4 mr-2 text-[#00BFFF]" />
              <span className="font-medium">+351 21 927 9178</span>
            </a>
            <a href="#hero">
              <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Pedir Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#00BFFF] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[#00BFFF] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <a href="tel:+351219279178" className="flex items-center mb-2 hover:text-[#00BFFF] transition-colors">
                  <Phone className="h-4 w-4 mr-2 text-[#00BFFF]" />
                  <span className="text-gray-700">+351 21 927 9178</span>
                </a>
                <Button className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  Pedir Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;