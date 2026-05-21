import { useState } from 'react';
import './EditProfileModal.css';

export default function EditProfileModal({ user, onClose, onUpdate }) {

  const [name, setName]           = useState(user?.name || '');
  const [avatar, setAvatar]       = useState(user?.avatar || '');
  const [previewUrl, setPreviewUrl] = useState(user?.avatar || '');
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target.result);
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    setError('');

    try {

      const token = localStorage.getItem('token');
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      const response = await fetch(`${baseUrl}/api/auth/profile`, {

        method : 'PUT',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify({
          name       : name || user?.name,
          avatar_url : avatar !== user?.avatar ? avatar : undefined
        })

      });

      if (response.ok) {

        const data = await response.json();
        onUpdate(data.user);
        onClose();

      } else {

        setError('Erro ao atualizar perfil');

      }

    } catch (err) {

      setError('Erro ao conectar ao servidor');
      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <h2>Editar Perfil</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="edit-profile-form">

          <div className="form-section">
            <label>Avatar</label>
            <div className="avatar-upload">
              <img src={previewUrl} alt="Preview" className="avatar-preview" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
                id="avatar-input"
              />
              <label htmlFor="avatar-input" className="upload-btn">
                Escolher Imagem
              </label>
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="form-input"
            />
          </div>

          {error && <div className="alert alert-error">{error}</div>}

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>

        </form>

      </div>
    </div>

  );

}
