import { useState, useEffect } from 'react';
import { useNavigate }         from 'react-router-dom';
import Sidebar                 from '../../components/dashboard/Sidebar/Sidebar';
import Feed                    from '../../components/dashboard/Feed/Feed';
import RightPanel              from '../../components/dashboard/RightPanel/RightPanel';
import                              './Dashboard.css';

export default function Dashboard() {

  const navigate              = useNavigate();
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (!token) {

      navigate('/login');
      return;

    }

    // Buscar dados do usuário do banco de dados
    const fetchUserData = async () => {

      try {

        const baseUrl  = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${baseUrl}/api/auth/profile`, {

          headers: {

            'Authorization' : `Bearer ${token}`

          }

        });

        if (response.ok) {

          const data = await response.json();

          setUser({

            id     : data.id,
            name   : data.name,
            email  : data.email,
            avatar : data.avatar || 'https://i.pravatar.cc/150?img=1'

          });

        } else if (response.status === 401) {

          localStorage.removeItem('token');
          navigate('/login');

        } else {

          console.error('Erro ao buscar dados do usuário:', response.status);

        }

      } catch (error) {

        console.error('Erro ao buscar dados do usuário:', error);

      } finally {

        setLoading(false);

      }

    };

    fetchUserData();

  }, [navigate]);

  if (loading) {

    return <div className="dashboard-loading">Carregando...</div>;

  }

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  return (

    <div className="dashboard">
      <Sidebar user={user} onUserUpdate={handleUserUpdate} />
      <Feed user={user} />
      <RightPanel user={user} onUserUpdate={handleUserUpdate} />
    </div>

  );
}
