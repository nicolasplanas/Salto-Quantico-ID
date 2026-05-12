import { useState } from 'react';
import JobPost      from './JobPost';
import CreatePost   from './CreatePost';
import                   '../../styles/Feed.css';

const MOCK_JOBS = [
  {
    id       : 1,
    author   : {
      name   : 'Tech Company Recrutamento',
      role   : 'Departamento de RH',
      avatar : 'https://i.pravatar.cc/150?img=2'
    },
    title        : 'Desenvolvedor React Sênior',
    description  : 'Estamos procurando um desenvolvedor React sênior com experiência em projetos em larga escala. Você trabalhará em uma equipe dinâmica e inovadora.',
    requirements : ['React', 'JavaScript', 'CSS', 'Git', '5+ anos experiência'],
    salary       : 'R$ 8.000 - R$ 12.000',
    location     : 'São Paulo, SP - Remoto',
    posted_at    : '2 horas atrás',
    applicants   : 15
  },
  {
    id       : 2,
    author   : {
      name   : 'StartUp Inovadora',
      role   : 'Equipe de Talentos',
      avatar : 'https://i.pravatar.cc/150?img=3'
    },
    title        : 'UX/UI Designer',
    description  : 'Buscamos um designer criativo para revolucionar a experiência do usuário em nossa plataforma. Oportunidade de trabalhar com tecnologias de ponta.',
    requirements : ['Figma', 'Design System', 'Prototipagem', 'Comunicação', 'Portfólio'],
    salary       : 'R$ 5.000 - R$ 8.000',
    location     : 'Rio de Janeiro, RJ - Híbrido',
    posted_at    : '4 horas atrás',
    applicants   : 8
  },
  {
    id       : 3,
    author   : {
      name   : 'Consultoria Tech',
      role   : 'Gestor de Projetos',
      avatar : 'https://i.pravatar.cc/150?img=4'
    },
    title        : 'Desenvolvedor Python',
    description  : 'Procuramos um desenvolvedor Python com experiência em backend para fortalecer nossa equipe. Trabalhe com problemas desafiadores.',
    requirements : ['Python', 'Django/FastAPI', 'SQL', 'REST APIs', '3+ anos experiência'],
    salary       : 'R$ 7.000 - R$ 10.000',
    location     : 'Belo Horizonte, MG - Presencial',
    posted_at    : '1 dia atrás',
    applicants   : 22
  },
  {
    id       : 4,
    author   : {
      name   : 'E-commerce Brasil',
      role   : 'Head de Produtos',
      avatar : 'https://i.pravatar.cc/150?img=5'
    },
    title        : 'Product Manager',
    description  : 'Gerenciar o roadmap de produtos e liderar a estratégia de crescimento. Oportunidade para impact maker.',
    requirements : ['Product Strategy', 'Liderança', 'Analytics', 'Comunicação', 'Experiência em SaaS'],
    salary       : 'R$ 10.000 - R$ 15.000',
    location     : 'São Paulo, SP - Remoto',
    posted_at    : '2 dias atrás',
    applicants   : 30
  }
];

export default function Feed({ user }) {

  const [jobs, setJobs]                     = useState(MOCK_JOBS);
  const [expandedJobId, setExpandedJobId]   = useState(null);

  const handleApply = (jobId) => {

    alert(`Aplicação enviada para a vaga #${jobId}`);
    setExpandedJobId(null);

  };

  return (

    <main className="feed">
      <div className="feed-container">
        <CreatePost user={user} />

        <div className="jobs-list">
          {jobs.map(job => (
            <JobPost
              key={job.id}
              job={job}
              isExpanded={expandedJobId === job.id}
              onToggle={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
              onApply={() => handleApply(job.id)}
            />
          ))}
        </div>
      </div>
    </main>

  );

}
