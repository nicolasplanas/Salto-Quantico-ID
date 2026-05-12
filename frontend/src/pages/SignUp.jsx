import { useState }            from 'react';
import { useNavigate }         from 'react-router-dom';
import Header                  from '../components/home/Header';
import Footer                  from '../components/home/Footer';
import                              '../styles/Signup.css';

export default function Signup() {

  const navigate                = useNavigate();
  const [formData, setFormData] = useState({
    name            : '',
    email           : '',
    password        : '',
    confirmPassword : '',
    birth_date      : '',
    terms_accepted  : false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

  };

  const calculateAge = (birthDate) => {

    const today     = new Date();
    const birth     = new Date(birthDate);
    let age         = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;

  };

  const validateForm = () => {

    if (!formData.name.trim()) {
      setError('Nome é obrigatório');
      return false;
    }

    if (!formData.email.includes('@')) {
      setError('Email inválido');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Senha deve ter no mínimo 6 caracteres');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Senhas não coincidem');
      return false;
    }

    if (!formData.birth_date) {
      setError('Data de nascimento é obrigatória');
      return false;
    }

    const age = calculateAge(formData.birth_date);

    if (age < 18) {
      setError('Você deve ter no mínimo 18 anos para se registrar');
      return false;
    }

    if (!formData.terms_accepted) {
      setError('Você deve aceitar os termos e condições');
      return false;
    }

    return true;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {

      const baseUrl  = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${baseUrl}/api/auth/signup`, {

        method  : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          name             : formData.name,
          email            : formData.email,
          password         : formData.password,
          birth_date       : formData.birth_date,
          terms_accepted   : formData.terms_accepted
        })

      });

      const data = await response.json();

      if (response.ok) {

        setSuccess('Conta criada com sucesso! Redirecionando para login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);

      } else {

        setError(data.error || 'Erro ao criar conta');

      }

    } catch (error) {

      setError('Erro ao conectar ao servidor');
      console.error('Erro:', error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="signup-page">
      <Header showNav={false} />

      <section className="signup-section">
        <div className="signup-container">
          {/* Efeitos visuais quânticos */}
          <div className="quantum-glow quantum-glow-1"></div>
          <div className="quantum-glow quantum-glow-2"></div>

          <div className="signup-box">
            <div className="signup-header">
              <h1>Crie sua Conta</h1>
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
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
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="birth_date">Data de Nascimento</label>
                <input
                  type="date"
                  id="birth_date"
                  name="birth_date"
                  value={formData.birth_date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <label htmlFor="terms_accepted" className="checkbox-label">
                  <input
                    type="checkbox"
                    id="terms_accepted"
                    name="terms_accepted"
                    checked={formData.terms_accepted}
                    onChange={handleChange}
                    required
                  />
                  <span>Eu li e aceito os <a href="/terms" target="_blank">termos e condições</a></span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-signup"
                disabled={loading}
              >
                {loading ? 'Criando conta...' : 'Criar Conta'}
              </button>
            </form>

            <div className="signup-footer">
              <p>Já tem uma conta? <a href="/login">Faça login aqui</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
