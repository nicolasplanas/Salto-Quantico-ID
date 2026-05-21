import { useState } from 'react';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import './RightPanel.css';

export default function RightPanel({ user, onUserUpdate }) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleUpdate = (updatedUser) => {
    setUserData(updatedUser);
    if (onUserUpdate) {
      onUserUpdate(updatedUser);
    }
  };

  const trending = [
    { id: 1, title: 'Desenvolvimento Web', count: '2.3K posts' },
    { id: 2, title: 'React.js', count: '1.8K posts' },
    { id: 3, title: 'Oportunidades de Emprego', count: '5.2K posts' },
    { id: 4, title: 'Startups', count: '3.1K posts' },
    { id: 5, title: 'Tecnologia', count: '4.5K posts' }
  ];

  return (

    <aside className="right-panel">
      <div className="profile-section">
        <h3 className="section-title">Meu Perfil</h3>
        <div className="profile-card">
          <img src={userData?.avatar} alt={userData?.name} className="profile-avatar" />
          <h4 className="profile-name">{userData?.name}</h4>
          <p className="profile-email">{userData?.email}</p>
          <button className="edit-profile-btn" onClick={handleEditClick}>Editar Perfil</button>
        </div>
      </div>

      {showEditModal && (
        <EditProfileModal
          user={userData}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdate}
        />
      )}

      <div className="trending-section">
        <h3 className="section-title">Tendências</h3>
        <ul className="trending-list">
          {trending.map(item => (
            <li key={item.id} className="trending-item">
              <div className="trending-content">
                <h4 className="trending-title">{item.title}</h4>
                <span className="trending-count">{item.count}</span>
              </div>
              <button className="trending-close">✕</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="newsletter-section">
        <h3 className="section-title">Newsletter</h3>
        <div className="newsletter-content">
          <p>Receba as melhores oportunidades de emprego na sua caixa de entrada</p>
          <input type="email" placeholder="Seu email..." />
          <button className="newsletter-btn">Inscrever-se</button>
        </div>
      </div>
    </aside>

  );

}
