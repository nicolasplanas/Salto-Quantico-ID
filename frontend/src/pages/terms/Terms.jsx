import { useEffect } from 'react';
import Header        from '../../components/common/Header/Header';
import Footer        from '../../components/common/Footer/Footer';
import                    './Terms.css';

export default function Terms() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  return (

    <div className="terms-page">
      <Header showNav={false} />

      <section className="terms-section">
        <div className="terms-container">
          <div className="terms-content">
            <h1>Termos e Condições de Uso</h1>
            <p className="last-updated">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <section className="terms-section-item">
              <h2>1. Introdução</h2>
              <p>
                Bem-vindo ao Salto Quântico ID. Estes Termos e Condições de Uso ("Termos") regulam o seu acesso e uso da plataforma Salto Quântico ID ("Plataforma"), incluindo seu site e aplicações relacionadas. Ao se registrar e usar a Plataforma, você concorda integralmente com estes Termos. Se você não concorda com alguma disposição, por favor, não use a Plataforma.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>2. Definições</h2>
              <ul>
                <li><strong>Plataforma:</strong> O site, aplicação web e qualquer serviço oferecido pelo Salto Quântico ID</li>
                <li><strong>Usuário:</strong> Qualquer pessoa que se registra e utiliza a Plataforma</li>
                <li><strong>Candidato:</strong> Usuário que busca oportunidades de emprego</li>
                <li><strong>Empregador:</strong> Usuário que publica vagas de emprego</li>
                <li><strong>Conteúdo:</strong> Qualquer material postado na Plataforma (textos, imagens, currículos, vagas)</li>
              </ul>
            </section>

            <section className="terms-section-item">
              <h2>3. Elegibilidade e Registro</h2>
              <p>
                Para usar a Plataforma, você deve:
              </p>
              <ul>
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Fornecer informações precisas e completas durante o registro</li>
                <li>Manter a confidencialidade de sua senha</li>
                <li>Ser responsável por todas as atividades realizadas em sua conta</li>
                <li>Aceitar integralmente estes Termos e Condições</li>
              </ul>
              <p>
                O registro na Plataforma não garante emprego ou oportunidades. A Plataforma apenas facilita a conexão entre candidatos e empregadores.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>4. Conta do Usuário</h2>
              <p>
                Você é responsável por manter a confidencialidade de suas credenciais de acesso. Você concorda em notificar imediatamente a Salto Quântico ID sobre qualquer uso não autorizado de sua conta. A Plataforma não é responsável por perda ou danos resultantes do uso não autorizado de sua conta.
              </p>
              <p>
                A Plataforma se reserva o direito de suspender ou encerrar contas que violem estes Termos ou engagem em atividades fraudulentas.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>5. Conduta do Usuário</h2>
              <p>Você concorda em não:</p>
              <ul>
                <li>Postar conteúdo discriminatório, ofensivo, obsceno ou ilegal</li>
                <li>Engajar em assédio, bullying ou comportamento abusivo contra outros usuários</li>
                <li>Usar a Plataforma para fins comerciais não autorizados</li>
                <li>Tentar hackear, interromper ou prejudicar a Plataforma</li>
                <li>Postar informações falsas ou enganosas</li>
                <li>Violar direitos autorais, marcas registradas ou propriedade intelectual de terceiros</li>
                <li>Enviar spam ou conteúdo malicioso</li>
                <li>Coletar dados de outros usuários sem consentimento</li>
              </ul>
            </section>

            <section className="terms-section-item">
              <h2>6. Conteúdo do Usuário</h2>
              <p>
                Ao enviar conteúdo para a Plataforma (currículos, portfólios, mensagens, vagas), você concede à Salto Quântico ID licença mundial, perpétua e irrevogável para armazenar, processar e exibir esse conteúdo com a finalidade de operar a Plataforma.
              </p>
              <p>
                Você é o único responsável pelo conteúdo que publica. A Plataforma não endossa e não é responsável por qualquer conteúdo publicado pelos usuários.
              </p>
              <p>
                Você retém todos os direitos sobre seu conteúdo e pode removê-lo a qualquer momento. Após a remoção, o conteúdo deixará de ser publicado, mas podem existir cópias em cache.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>7. Privacidade e Dados</h2>
              <p>
                Seu uso da Plataforma está sujeito à nossa Política de Privacidade. Ao usar a Plataforma, você concorda com a coleta e processamento de seus dados conforme descrito na Política de Privacidade.
              </p>
              <p>
                Informações pessoais de candidatos não serão compartilhadas com empregadores sem seu consentimento explícito.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>8. Propriedade Intelectual</h2>
              <p>
                A Plataforma e todo seu conteúdo original (incluindo design, funcionalidades, código-fonte) são propriedade intelectual da Salto Quântico ID ou seus licenciadores. Você não pode reproduzir, modificar ou distribuir qualquer parte da Plataforma sem permissão expressa.
              </p>
              <p>
                O uso da Plataforma não lhe concede nenhuma propriedade ou direitos sobre a mesma.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>9. Isenção de Responsabilidade</h2>
              <p>
                A PLATAFORMA É FORNECIDA "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS.
              </p>
              <p>
                A Salto Quântico ID não garante que:
              </p>
              <ul>
                <li>A Plataforma atenderá suas necessidades ou expectativas</li>
                <li>A Plataforma será ininterrupta, segura ou livre de erros</li>
                <li>Qualquer defeito será corrigido</li>
                <li>Você encontrará emprego através da Plataforma</li>
              </ul>
            </section>

            <section className="terms-section-item">
              <h2>10. Limitação de Responsabilidade</h2>
              <p>
                EM NENHUMA CIRCUNSTÂNCIA A SALTO QUÂNTICO ID SERÁ RESPONSÁVEL POR DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENTES OU PUNITIVOS, INCLUINDO PERDA DE LUCROS, DADOS OU OPORTUNIDADES DE EMPREGO, MESMO QUE TENHA SIDO ALERTADA SOBRE A POSSIBILIDADE DE TAIS DANOS.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>11. Indenização</h2>
              <p>
                Você concorda em indenizar e manter a Salto Quântico ID, seus diretores, funcionários e agentes livres de qualquer reclamação, dano, perda ou despesa (incluindo honorários advocatícios) resultantes de:
              </p>
              <ul>
                <li>Seu uso da Plataforma</li>
                <li>Violação destes Termos</li>
                <li>Violação de direitos de terceiros</li>
                <li>Conteúdo que você publicou</li>
              </ul>
            </section>

            <section className="terms-section-item">
              <h2>12. Rescisão</h2>
              <p>
                A Salto Quântico ID pode suspender ou encerrar sua conta e acesso à Plataforma a qualquer momento, com ou sem motivo, e sem aviso prévio, se acreditar que você violou estes Termos.
              </p>
              <p>
                Você pode encerrar sua conta a qualquer momento entrando em contato conosco.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>13. Modificações dos Termos</h2>
              <p>
                A Salto Quântico ID se reserva o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor quando publicadas na Plataforma. Seu uso continuado da Plataforma após as alterações implica em aceitação dos novos Termos.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>14. Lei Aplicável</h2>
              <p>
                Estes Termos são regidos pelas leis do Brasil, sem considerar seus conflitos de disposições legais. Você concorda em submeter-se à jurisdição exclusiva dos tribunais do Brasil.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>15. Disposições Gerais</h2>
              <p>
                Se qualquer disposição destes Termos for considerada inválida ou inaplicável, as disposições restantes permanecerão em vigor.
              </p>
              <p>
                Estes Termos constituem o acordo completo entre você e a Salto Quântico ID com relação ao uso da Plataforma e substituem todos os acordos anteriores.
              </p>
              <p>
                A falha em exercer qualquer direito sob estes Termos não constitui uma renúncia a esse direito.
              </p>
            </section>

            <section className="terms-section-item">
              <h2>16. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos, entre em contato conosco através de:
              </p>
              <ul>
                <li><strong>Email:</strong> termos@saltoquanticoid.com</li>
                <li><strong>Endereço:</strong> Salto Quântico ID - Brasil</li>
              </ul>
            </section>

            <div className="terms-footer-message">
              <p>
                Ao clicar em "Aceitar", você confirma que leu, compreendeu e concorda com todos estes Termos e Condições.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
