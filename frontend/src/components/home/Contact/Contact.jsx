import { useState }  from 'react';
import              './Contact.css';

export default function Contact() {

  const [formData, setFormData] = useState({
    name    : '',
    email   : '',
    company : '',
    message : ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');

  };

  return (

    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para transformar seu negócio com tecnologia quântica
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos Conversar</h3>
            <p>
              Tem dúvidas sobre nossas soluções? Entre em contato conosco e descubra
              como a computação quântica pode revolucionar seu negócio.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Localização</h4>
                  <p>São Paulo, Brasil</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@saltoquanticoid.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Telefone</h4>
                  <p>+55 (11) 3000-0000</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Sua empresa"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Conte-nos sobre seu projeto..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
