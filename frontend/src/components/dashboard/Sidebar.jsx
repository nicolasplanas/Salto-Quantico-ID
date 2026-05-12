import { useState }           from 'react';
import { useNavigate }        from 'react-router-dom';
import                             '../../styles/Sidebar.css';

export default function Sidebar({ user }) {

  const navigate               = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem('token');
    navigate('/login');

  };

  return (

    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">SaltoQ</h1>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      <nav className={`sidebar-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#" className="nav-item active">
          <span className="icon">🏠</span>
          <span className="label">Início</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">👥</span>
          <span className="label">Rede</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">💼</span>
          <span className="label">Minhas Vagas</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">🔖</span>
          <span className="label">Salvos</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">💬</span>
          <span className="label">Mensagens</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">🔔</span>
          <span className="label">Notificações</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">⚙️</span>
          <span className="label">Configurações</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <img src={user?.avatar} alt={user?.name} className="user-avatar" />
          <div className="user-details">
            <p className="user-name">{user?.name}</p>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Sair
        </button>
      </div>
    </aside>

  );

}
