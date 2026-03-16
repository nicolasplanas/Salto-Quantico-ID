import './Tech.css';

export default function Tech() {
  const technologies = [
    {
      name: 'Quantum Computing',
      level: 95,
      description: 'Processadores quânticos de última geração'
    },
    {
      name: 'Cloud Integration',
      level: 88,
      description: 'Infraestrutura em nuvem escalável'
    },
    {
      name: 'AI & ML',
      level: 92,
      description: 'Modelos de aprendizado de máquina avançados'
    },
    {
      name: 'Blockchain',
      level: 85,
      description: 'Segurança e transparência distribuída'
    }
  ];

  return (
    <section id="tech" className="tech section alternate">
      <div className="container">
        <div className="tech-header">
          <h2>Nossas Tecnologias</h2>
          <p className="section-subtitle">
            Stack tecnológico de ponta para o futuro
          </p>
        </div>

        <div className="tech-content">
          <div className="tech-list">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item" style={{ animation: `fadeInUp 0.8s ease ${0.1 * index}s forwards` }}>
                <div className="tech-header-item">
                  <h4>{tech.name}</h4>
                  <span className="tech-percentage">{tech.level}%</span>
                </div>
                <p className="tech-description">{tech.description}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${tech.level}%`,
                      animation: `expandWidth 1s ease ${0.1 * index}s forwards`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-visual">
            <div className="tech-cards">
              <div className="tech-card tech-card-1">
                <span className="card-title">Advanced Computing</span>
              </div>
              <div className="tech-card tech-card-2">
                <span className="card-title">Quantum Safe</span>
              </div>
              <div className="tech-card tech-card-3">
                <span className="card-title">Ultra Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
