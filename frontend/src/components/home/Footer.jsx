import './Footer.css';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Salto Quântico ID</h4>
              <p>
                Dê o salto. Descubra seu potencial.
              </p>
            </div>

            <div className="footer-section">
              <h4>Produtos</h4>
              <ul>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#tech">Tecnologia</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Recursos</h4>
              <ul>
                <li><a href="#/">Documentação</a></li>
                <li><a href="#/">Blog</a></li>
                <li><a href="#/">Tutoriais</a></li>
                <li><a href="#/">API</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#/">Privacidade</a></li>
                <li><a href="#/">Termos</a></li>
                <li><a href="#/">Cookies</a></li>
                <li><a href="#/">Suporte</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Salto Quântico ID. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="#/">Twitter</a>
              <a href="#/">LinkedIn</a>
              <a href="#/">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );

}
