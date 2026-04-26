import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Feed from '../components/dashboard/Feed';
import RightPanel from '../components/dashboard/RightPanel';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Aqui você faria a chamada da API para obter dados do usuário
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    // Simular dados do usuário se não conseguir conectar ao backend
    setTimeout(() => {
      setUser({
        id: 1,
        name: 'João Silva',
        email: 'joao@example.com',
        avatar: 'https://i.pravatar.cc/150?img=1'
      });
      setLoading(false);
    }, 500);
  }, [navigate]);

  if (loading) {
    return <div className="dashboard-loading">Carregando...</div>;
  }

  return (
    <div className="dashboard">
      <Sidebar user={user} />
      <Feed user={user} />
      <RightPanel />
    </div>
  );
}
