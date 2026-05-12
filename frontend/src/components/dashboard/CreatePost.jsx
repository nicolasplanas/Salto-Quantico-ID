import '../../styles/CreatePost.css';

export default function CreatePost({ user }) {

  return (

    <div className="create-post">
      <div className="create-post-content">
        <img src={user?.avatar} alt={user?.name} className="create-post-avatar" />
        <div className="create-post-input">
          <input
            type="text"
            placeholder="Compartilhe suas ideias ou busque por vagas..."
            className="create-post-field"
          />
        </div>
      </div>
      <div className="create-post-actions">
        <button className="create-action-btn">
          <span>📸</span> Foto/Vídeo
        </button>
        <button className="create-action-btn">
          <span>📝</span> Artigo
        </button>
        <button className="create-action-btn">
          <span>💼</span> Vaga
        </button>
        <button className="create-action-btn">
          <span>🎉</span> Evento
        </button>
      </div>
    </div>

  );

}
