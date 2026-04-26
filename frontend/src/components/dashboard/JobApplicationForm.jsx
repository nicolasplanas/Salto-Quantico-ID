import { useState } from 'react';
import '../../styles/JobApplicationForm.css';

export default function JobApplicationForm({ job, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinProfile: '',
    portfolio: '',
    resume: null,
    coverLetter: '',
    experience: '',
    expectations: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Mensagem de motivação é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você faria a chamada da API para enviar a candidatura
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append('job_id', job.id);

      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formDataToSend
      });

      if (response.ok) {
        alert('Candidatura enviada com sucesso!');
        onSubmit(formData);
      } else {
        alert('Erro ao enviar candidatura');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar candidatura');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-form-overlay">
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>Candidatar-se para: {job.title}</h3>
          <button type="button" className="close-btn" onClick={onCancel}>✕</button>
        </div>

        <div className="form-content">
          <div className="form-group">
            <label htmlFor="fullName">Nome Completo *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu.email@exemplo.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="linkedinProfile">Perfil LinkedIn</label>
              <input
                type="url"
                id="linkedinProfile"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/seu-perfil"
              />
            </div>

            <div className="form-group">
              <label htmlFor="portfolio">Portfólio/Website</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://seu-portfolio.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="resume">Currículo (PDF, DOC ou DOCX)</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <span className="file-name">
                {formData.resume ? formData.resume.name : 'Selecione um arquivo'}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experiência Profissional</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Descreva sua experiência profissional relevante..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="coverLetter">Mensagem de Motivação *</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Por que você quer essa vaga? Conte um pouco sobre suas motivações..."
              rows="4"
            />
            {errors.coverLetter && <span className="error">{errors.coverLetter}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="expectations">Expectativas e Disponibilidade</label>
            <textarea
              id="expectations"
              name="expectations"
              value={formData.expectations}
              onChange={handleInputChange}
              placeholder="Sua disponibilidade, expectativas salariais, etc..."
              rows="3"
            />
          </div>
        </div>

        <div className="form-footer">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Candidatura'}
          </button>
        </div>
      </form>
    </div>
  );
}
