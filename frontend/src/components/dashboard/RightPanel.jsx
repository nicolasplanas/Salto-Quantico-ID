import '../../styles/RightPanel.css';

export default function RightPanel({ user }) {
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
          <img src={user?.avatar} alt={user?.name} className="profile-avatar" />
          <h4 className="profile-name">{user?.name}</h4>
          <p className="profile-email">{user?.email}</p>
          <button className="edit-profile-btn">Editar Perfil</button>
        </div>
      </div>

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
