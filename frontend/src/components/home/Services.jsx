import './Services.css';

export default function Services() {

  const services = [
    {
      icon      : '⚙️',
      title     : 'Processamento Quântico',
      description : 'Acesso a poder computacional exponencial para resolver problemas complexos em segundos.'
    },
    {
      icon      : '🔐',
      title     : 'Criptografia Quântica',
      description : 'Proteção máxima de dados com algoritmos quânticos de segurança incomparável.'
    },
    {
      icon      : '📊',
      title     : 'Análise Avançada',
      description : 'Processamento de grandes volumes de dados com insights profundos e precisão.'
    },
    {
      icon      : '🤖',
      title     : 'Machine Learning Quântico',
      description : 'Modelos de IA treinados com velocidade e eficiência quânticas.'
    },
    {
      icon      : '💼',
      title     : 'Consultoria Estratégica',
      description : 'Orientação especializada para integrar computação quântica em suas operações.'
    },
    {
      icon      : '🎓',
      title     : 'Treinamento Corporativo',
      description : 'Programas de capacitação para sua equipe em tecnologia quântica.'
    }
  ];

  return (

    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para sua transformação quântica
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animation: `fadeInUp 0.8s ease ${0.1 * index}s forwards` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Saiba Mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
