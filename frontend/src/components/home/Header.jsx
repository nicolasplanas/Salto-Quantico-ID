import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import './Header.css';

export default function Header({ showNav = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">⚛</span>
            <span onClick={() => window.location.href = "/"} className="logo-text">Salto Quântico ID</span>
          </div>

          {showNav && (
            <>
              <button
                className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#tech">Tecnologia</a>
                <a href="#contact">Contato</a>
                <div className="nav-actions">
                  <ThemeToggle />
                  <button onClick={() => window.location.href = "/register"} className="btn btn-primary btn-small">Começar</button>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
