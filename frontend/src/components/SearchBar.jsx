import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange, onClear, resultsCount }) => {
  return (
    <div className="mb-12" data-aos="fade-down">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="h-5 w-5" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar produtos... (ex: cimento, ferramentas, tubagens)"
            className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#00BFFF] focus:ring-4 focus:ring-[#00BFFF]/10 transition-all duration-200 shadow-sm hover:shadow-md"
          />

          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={onClear}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00BFFF] transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
              aria-label="Limpar pesquisa"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">
              {resultsCount === 0 ? (
                <span className="text-red-500 font-medium">
                  Nenhum produto encontrado para "{searchTerm}"
                </span>
              ) : resultsCount === 1 ? (
                <span className="text-[#00BFFF] font-medium">
                  1 produto encontrado
                </span>
              ) : (
                <span className="text-[#00BFFF] font-medium">
                  {resultsCount} produtos encontrados
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
