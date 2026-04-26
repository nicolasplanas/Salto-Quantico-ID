import { useState } from 'react';
import JobApplicationForm from './JobApplicationForm';
import '../../styles/JobPost.css';

export default function JobPost({ job, isExpanded, onToggle, onApply }) {
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Aplicação enviada:', formData);
    setShowForm(false);
    onApply();
  };

  return (
    <article className={`job-post ${isExpanded ? 'expanded' : ''}`}>
      <div className="post-header">
        <img src={job.author.avatar} alt={job.author.name} className="post-avatar" />
        <div className="post-author-info">
          <h3 className="author-name">{job.author.name}</h3>
          <p className="author-role">{job.author.role}</p>
          <span className="post-time">{job.posted_at}</span>
        </div>
        <button className="more-options">⋯</button>
      </div>

      <div className="post-content">
        <h2 className="job-title">{job.title}</h2>
        <p className="job-description">{job.description}</p>

        {isExpanded && (
          <div className="job-details">
            <div className="job-info-section">
              <h4>Requisitos</h4>
              <ul className="requirements-list">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>
                    <span className="requirement-tag">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="job-info-section">
              <h4>Detalhes da Posição</h4>
              <div className="job-details-grid">
                <div className="detail-item">
                  <span className="detail-label">💰 Salário</span>
                  <p className="detail-value">{job.salary}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📍 Localização</span>
                  <p className="detail-value">{job.location}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">👥 Candidaturas</span>
                  <p className="detail-value">{job.applicants} pessoas candidatadas</p>
                </div>
              </div>
            </div>

            {showForm ? (
              <JobApplicationForm 
                job={job}
                onSubmit={handleFormSubmit}
                onCancel={() => setShowForm(false)}
              />
            ) : null}
          </div>
        )}
      </div>

      <div className="post-footer">
        <button className="footer-action">👍 Interessado</button>
        <button className="footer-action">💬 Comentar</button>
        <button 
          className={`footer-action apply-btn ${showForm ? 'active' : ''}`}
          onClick={handleApplyClick}
        >
          ✉️ Candidatar-se
        </button>
      </div>

      {!isExpanded && (
        <button className="expand-btn" onClick={onToggle}>
          Ver mais detalhes
        </button>
      )}
      {isExpanded && (
        <button className="expand-btn" onClick={onToggle}>
          Ver menos
        </button>
      )}
    </article>
  );
}
