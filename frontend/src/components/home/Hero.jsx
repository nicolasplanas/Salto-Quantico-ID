import './Hero.css';
import quantumOrb from '../../assets/quantum-orb.svg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Bem-vindo ao Futuro <span className="gradient-text">Quântico</span>
            </h1>
            <p className="hero-subtitle">
              Conectando talentos, conhecimento e oportunidades.
            </p>
            <div className="hero-buttons">
              <button onClick={() => window.location.href = "/register"} className="btn btn-primary">Explorar Soluções</button>
              <button className="btn btn-secondary">Saiba Mais</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={quantumOrb} alt="Orbe Quântico" className="quantum-orb" />
            <div className="floating-particle particle-1"></div>
            <div className="floating-particle particle-2"></div>
            <div className="floating-particle particle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
