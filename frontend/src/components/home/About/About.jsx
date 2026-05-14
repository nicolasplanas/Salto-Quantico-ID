import './About.css';

export default function About() {

  return (

    <section id="about" className="about section alternate">
      <div className="container">
        <div className="about-header">
          <h2>Sobre Nós</h2>
          <p className="section-subtitle">
            Construímos conexões entre talentos, oportunidades e conhecimento.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Inovação que Transforma o Futuro</h3>
            <p>
              Fundada em 2026, Salto Quântico ID é uma startup com o objetivo de
              conectar pessoas, empresas e instituições de ensino através de um
              banco de dados inteligente de talentos e oportunidades.
            </p>
            <p>
              Nossa missão é democratizar o acesso à oportunidades, permitindo que
              empresas de todos os tamanhos aproveitem o poder exponencial desse networking.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>150+</h4>
                <p>Clientes</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Experts</p>
              </div>
              <div className="stat">
                <h4>10</h4>
                <p>Prêmios</p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h4>Pesquisa Avançada</h4>
              <p>Investimento contínuo em tecnologia de ponta e desenvolvimento quântico.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>Soluções Escaláveis</h4>
              <p>Arquitetura flexível que cresce com seu negócio.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Segurança Premium</h4>
              <p>Proteção de dados em nível empresarial com criptografia quântica.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">24/7</div>
              <h4>Suporte 24/7</h4>
              <p>Equipe dedicada pronta para ajudar a qualquer hora do dia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
