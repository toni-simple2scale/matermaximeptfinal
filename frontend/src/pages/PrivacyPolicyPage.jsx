import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00BFFF]/5 to-blue-50 py-8 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-[#00BFFF] transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
          <div className="flex items-center gap-4">
            <Shield className="h-12 w-12 text-[#00BFFF]" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Política de Privacidade
              </h1>
              <p className="text-gray-600 mt-1">
                Última atualização: {new Date().toLocaleDateString('pt-PT')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Matermaxime, Lda. - Materiais de Construção</strong> (NIF: 508621194), com sede em 
              Lugar de Mastrontas, S/Nº - Negrais, 2715-311 Lisboa, respeita a sua privacidade e está 
              comprometida em proteger os seus dados pessoais.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade descreve como recolhemos, utilizamos, armazenamos e protegemos 
              os seus dados pessoais, em conformidade com o Regulamento Geral sobre a Proteção de Dados 
              (RGPD - Regulamento UE 2016/679) e a legislação portuguesa aplicável.
            </p>
          </section>

          {/* Data Controller */}
          <section className="mb-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsável pelo Tratamento de Dados</h2>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Entidade:</strong> Matermaxime, Lda. - Materiais de Construção</p>
              <p className="text-gray-700"><strong>NIF:</strong> 508621194</p>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700"><strong>Morada:</strong> Lugar de Mastrontas, S/Nº - Negrais, 2715-311 Lisboa</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#00BFFF]" />
                <p className="text-gray-700"><strong>Email:</strong> matermaxime.gomes.j@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#00BFFF]" />
                <p className="text-gray-700"><strong>Telefone:</strong> 219 831 041 / 965 087 800</p>
              </div>
            </div>
          </section>

          {/* Data Collected */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Dados Pessoais que Recolhemos</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1. Formulários de Contacto e Orçamentos</h3>
            <p className="text-gray-700 mb-2">Quando solicita um orçamento ou nos contacta através do website, recolhemos:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nome completo</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
              <li>Informações sobre o produto de interesse</li>
              <li>Quantidade estimada</li>
              <li>Mensagem/especificações adicionais</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2. Cookies e Dados de Navegação</h3>
            <p className="text-gray-700 mb-2">Através de cookies e tecnologias similares, podemos recolher:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Endereço IP</li>
              <li>Tipo de navegador e versão</li>
              <li>Páginas visitadas no nosso website</li>
              <li>Tempo de permanência no site</li>
              <li>Origem da visita (referrer)</li>
              <li>Dispositivo utilizado (desktop, mobile, tablet)</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Para mais informações sobre cookies, consulte a nossa <Link to="/politica-cookies" className="text-[#00BFFF] hover:underline">Política de Cookies</Link>.
            </p>
          </section>

          {/* Purpose and Legal Basis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalidade e Base Legal do Tratamento</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Finalidade</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Base Legal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Responder a pedidos de orçamento e informações</td>
                    <td className="border border-gray-300 px-4 py-3">Consentimento (Art. 6.º, n.º 1, a) RGPD)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Processar encomendas e fornecer serviços</td>
                    <td className="border border-gray-300 px-4 py-3">Execução de contrato (Art. 6.º, n.º 1, b) RGPD)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Enviar comunicações comerciais (se autorizadas)</td>
                    <td className="border border-gray-300 px-4 py-3">Consentimento (Art. 6.º, n.º 1, a) RGPD)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Análise estatística e melhoria do website</td>
                    <td className="border border-gray-300 px-4 py-3">Interesse legítimo (Art. 6.º, n.º 1, f) RGPD)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Cumprir obrigações legais e fiscais</td>
                    <td className="border border-gray-300 px-4 py-3">Obrigação legal (Art. 6.º, n.º 1, c) RGPD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partilha de Dados Pessoais</h2>
            <p className="text-gray-700 mb-4">
              Os seus dados pessoais podem ser partilhados com as seguintes entidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Web3Forms:</strong> Serviço de processamento de formulários de contacto (conforme a sua Política de Privacidade)</li>
              <li><strong>PostHog:</strong> Plataforma de análise de website (apenas se consentir cookies de análise)</li>
              <li><strong>Fornecedores e parceiros:</strong> Para cumprimento de encomendas (quando aplicável)</li>
              <li><strong>Autoridades legais:</strong> Quando exigido por lei ou ordem judicial</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Não vendemos, alugamos ou cedemos os seus dados pessoais a terceiros para fins de marketing.</strong>
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prazo de Conservação dos Dados</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Pedidos de orçamento:</strong> Conservados durante 2 anos após o último contacto</li>
              <li><strong>Dados de clientes:</strong> Conservados durante 10 anos (obrigações fiscais e legais)</li>
              <li><strong>Cookies de análise:</strong> Dados anónimos conservados durante 26 meses</li>
              <li><strong>Dados de navegação:</strong> Logs conservados durante 12 meses</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Após estes prazos, os dados são eliminados ou anonimizados, exceto quando a lei exigir a sua conservação por período superior.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12 bg-[#00BFFF]/5 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Os Seus Direitos</h2>
            <p className="text-gray-700 mb-4">Nos termos do RGPD, tem os seguintes direitos:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Direito de Acesso</h4>
                <p className="text-sm text-gray-600">Obter confirmação sobre os dados que tratamos</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Direito de Retificação</h4>
                <p className="text-sm text-gray-600">Corrigir dados inexatos ou incompletos</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Direito ao Apagamento</h4>
                <p className="text-sm text-gray-600">Solicitar a eliminação dos seus dados</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Direito à Limitação</h4>
                <p className="text-sm text-gray-600">Restringir o tratamento dos seus dados</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Direito à Portabilidade</h4>
                <p className="text-sm text-gray-600">Receber os seus dados em formato estruturado</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Direito de Oposição</h4>
                <p className="text-sm text-gray-600">Opor-se ao tratamento dos seus dados</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              <strong>Para exercer os seus direitos, contacte-nos através de:</strong>
            </p>
            <div className="mt-3 space-y-2">
              <p className="text-gray-700 flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00BFFF]" />
                Email: matermaxime.gomes.j@gmail.com
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#00BFFF]" />
                Telefone: 219 831 041 / 965 087 800
              </p>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              <strong>Reclamação:</strong> Se considerar que os seus direitos não foram respeitados, 
              pode apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) - 
              <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:underline ml-1">
                www.cnpd.pt
              </a>
            </p>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Segurança dos Dados</h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Acesso não autorizado</li>
              <li>Destruição acidental ou ilícita</li>
              <li>Perda, alteração ou divulgação indevida</li>
              <li>Tratamento ilícito</li>
            </ul>
            <p className="text-gray-700 mt-4">
              As medidas incluem encriptação de dados em trânsito (HTTPS), controlos de acesso, 
              e auditorias regulares de segurança.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferências Internacionais</h2>
            <p className="text-gray-700 mb-4">
              Alguns dos nossos fornecedores de serviços (como PostHog) podem estar localizados fora do 
              Espaço Económico Europeu (EEE). Nestes casos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Garantimos que existem garantias adequadas (Cláusulas Contratuais Tipo da UE)</li>
              <li>Os dados são transferidos apenas para países com decisão de adequação da Comissão Europeia</li>
              <li>Os fornecedores cumprem com o RGPD e normas equivalentes de proteção de dados</li>
            </ul>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Alterações a esta Política</h2>
            <p className="text-gray-700">
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. 
              As alterações serão publicadas nesta página com a data de "Última atualização" revista. 
              Recomendamos que consulte regularmente esta política para se manter informado.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-700 mb-4">
              Para questões sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais:
            </p>
            <div className="space-y-3">
              <p className="text-gray-700 font-medium">Matermaxime, Lda. - Materiais de Construção</p>
              <p className="text-gray-700 flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                Lugar de Mastrontas, S/Nº - Negrais, 2715-311 Lisboa
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#00BFFF]" />
                matermaxime.gomes.j@gmail.com
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#00BFFF]" />
                219 831 041 / 965 087 800
              </p>
            </div>
          </section>

        </div>

        {/* Back to Top */}
        <div className="mt-12 pt-8 border-t text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#00BFFF] hover:text-[#0099CC] font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
