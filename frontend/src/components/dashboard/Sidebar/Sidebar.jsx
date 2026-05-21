import { useState, useEffect }           from 'react';
import { useNavigate }        from 'react-router-dom';
import EditProfileModal       from '../EditProfileModal/EditProfileModal';
import                             './Sidebar.css';

export default function Sidebar({ user, onUserUpdate }) {

  const navigate               = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleLogout = () => {

    localStorage.removeItem('token');
    navigate('/login');

  };

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleUpdate = (updatedUser) => {
    setUserData(updatedUser);
    if (onUserUpdate) {
      onUserUpdate(updatedUser);
    }
  };

  return (

    <>
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
          <div className="user-info" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
            <img src={userData?.avatar} alt={userData?.name} className="user-avatar" />
            <div className="user-details">
              <p className="user-name">{userData?.name}</p>
              <p className="user-email">{userData?.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Sair
          </button>
        </div>
      </aside>

      {showEditModal && (
        <EditProfileModal
          user={userData}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdate}
        />
      )}
    </>

  );

}
