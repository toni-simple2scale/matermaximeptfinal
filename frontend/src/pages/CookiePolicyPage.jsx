import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';

const CookiePolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 py-8 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
          <div className="flex items-center gap-4">
            <Cookie className="h-12 w-12 text-[#00BFFF]" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 mt-1">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. O que são Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies são pequenos ficheiros de texto que são colocados no seu computador ou dispositivo móvel 
              quando visita um website. São amplamente utilizados para fazer os websites funcionarem de forma 
              mais eficiente e para fornecer informações aos proprietários do site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Utilizamos Cookies</h2>
            <p className="text-gray-700 mb-4">
              O website da Matermaxime utiliza cookies para os seguintes fins:
            </p>
            
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🔒 Cookies Estritamente Necessários</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Sempre Ativos</strong> - Estes cookies são essenciais para o funcionamento do website.
                </p>
                <table className="w-full text-sm">
                  <thead className="bg-white">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Finalidade</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">cookieConsent</td>
                      <td className="border border-gray-300 px-3 py-2">Guardar preferências de cookies</td>
                      <td className="border border-gray-300 px-3 py-2">12 meses</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-3 py-2">cookiePreferences</td>
                      <td className="border border-gray-300 px-3 py-2">Armazenar escolhas de cookies</td>
                      <td className="border border-gray-300 px-3 py-2">12 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Cookies de Análise (PostHog)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Requer Consentimento</strong> - Ajudam-nos a compreender como os visitantes utilizam o website.
                </p>
                <table className="w-full text-sm">
                  <thead className="bg-white">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Fornecedor</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Finalidade</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">ph_*</td>
                      <td className="border border-gray-300 px-3 py-2">PostHog</td>
                      <td className="border border-gray-300 px-3 py-2">Análise de comportamento</td>
                      <td className="border border-gray-300 px-3 py-2">12 meses</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Informações recolhidas:</strong> Páginas visitadas, tempo no site, cliques, 
                  localização geográfica aproximada, tipo de dispositivo e navegador.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <strong>Dados pessoais:</strong> Apenas se consentir. Dados anonimizados por defeito.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Gestão de Cookies</h2>
            <p className="text-gray-700 mb-4">
              Pode gerir as suas preferências de cookies das seguintes formas:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Através do Banner de Cookies</h4>
                <p className="text-gray-700 text-sm">
                  Quando visita o nosso site pela primeira vez, é apresentado um banner onde pode aceitar, 
                  rejeitar ou personalizar os cookies.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Através do Navegador</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Pode configurar o seu navegador para bloquear cookies:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  <li><strong>Chrome:</strong> Definições → Privacidade e segurança → Cookies</li>
                  <li><strong>Firefox:</strong> Opções → Privacidade e Segurança</li>
                  <li><strong>Safari:</strong> Preferências → Privacidade</li>
                  <li><strong>Edge:</strong> Definições → Privacidade, pesquisa e serviços</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <p className="text-amber-800 text-sm">
                <strong>⚠️ Atenção:</strong> Bloquear cookies pode afetar a funcionalidade do website e 
                limitar algumas funcionalidades.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies de Terceiros</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos os seguintes serviços de terceiros que podem definir cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>PostHog (us.i.posthog.com):</strong> Análise de website</li>
              <li><strong>Web3Forms:</strong> Processamento de formulários (não utiliza cookies)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Estes serviços têm as suas próprias políticas de privacidade e cookies.
            </p>
          </section>

          <section className="mb-12 bg-[#00BFFF]/5 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conformidade Legal</h2>
            <p className="text-gray-700 mb-4">
              Esta Política de Cookies está em conformidade com:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Regulamento Geral sobre a Proteção de Dados (RGPD - UE 2016/679)</li>
              <li>Diretiva ePrivacy (Diretiva 2002/58/CE)</li>
              <li>Lei n.º 41/2004, de 18 de agosto (Lei da Proteção de Dados Pessoais)</li>
              <li>Lei n.º 46/2012, de 29 de agosto (Diretiva Cookies em Portugal)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Atualizações</h2>
            <p className="text-gray-700">
              Esta Política de Cookies pode ser atualizada periodicamente. A data da última atualização 
              está indicada no topo desta página.
            </p>
          </section>

          <section className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contacto</h2>
            <p className="text-gray-700 mb-4">
              Para questões sobre cookies:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> matermaxime.gomes.j@gmail.com</p>
              <p className="text-gray-700"><strong>Telefone:</strong> 219 831 041 / 965 087 800</p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <Link to="/" className="inline-flex items-center text-[#00BFFF] hover:text-[#0099CC] font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
