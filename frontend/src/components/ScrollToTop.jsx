import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se houver um hash (como #produtos ou #produto-10), faz scroll até ele
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Calcula a posição com offset para ter espaço no topo (header)
          const offset = 100; // 100px de espaço acima do elemento
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Só faz scroll para o topo se não houver hash
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
