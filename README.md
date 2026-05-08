# 🚀 Salto Quantico ID

## 📌 O que é?

**Salto Quantico ID** é uma plataforma inovadora de recrutamento que conecta talentos em tecnologia com oportunidades de carreira alinhadas aos Objetivos de Desenvolvimento Sustentável (ODS). O projeto combina interface profissional com funcionalidades robustas para candidatos e recrutadores.

---

## 🎯 Objetivo Principal

Criar uma solução completa de plataforma de vagas inspirada no **LinkedIn**, com layout responsivo e fluxo intuitivo de autenticação e candidatura.

---

## 📊 Estrutura do Projeto

```
Salto-Quantico-ID/
├── backend/                    # API Flask
│   ├── app.py                 # Configuração principal
│   ├── models.py              # Modelos de dados
│   ├── routes.py              # Endpoints da API
│   ├── requirements.txt        # Dependências Python
│   └── instance/               # Dados do banco
│
├── frontend/                   # Aplicação React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Página inicial
│   │   │   ├── Login.jsx       # Login
│   │   │   ├── SignUp.jsx      # Cadastro
│   │   │   └── Dashboard.jsx   # Dashboard pós-login ✨
│   │   ├── components/
│   │   │   ├── home/           # Componentes home
│   │   │   ├── dashboard/      # Componentes dashboard ✨
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Feed.jsx
│   │   │   │   ├── JobPost.jsx
│   │   │   │   ├── JobApplicationForm.jsx
│   │   │   │   ├── CreatePost.jsx
│   │   │   │   └── RightPanel.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── styles/
│   │   │   ├── themes.css
│   │   │   ├── Dashboard.css
│   │   │   ├── Sidebar.css
│   │   │   ├── Feed.css
│   │   │   ├── JobPost.css
│   │   │   ├── JobApplicationForm.css
│   │   │   ├── CreatePost.css
│   │   │   └── RightPanel.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── render.yaml                 # Configuração Render
└── Documentação (10 arquivos)
```

---

## ✨ Funcionalidades Principais

### 🔐 Autenticação
- ✅ Signup com validação
- ✅ Login seguro
- ✅ Token JWT
- ✅ Proteção de rotas
- ✅ Logout com limpeza

### 📱 Home Page
- ✅ Página inicial atrativa
- ✅ Seção de serviços
- ✅ Showcases de tecnologia
- ✅ Call-to-action para login/signup

### 📊 Dashboard (Pós-Login) - Inspirado em LinkedIn
**Layout 3 colunas com:**

**Coluna Esquerda (Sidebar)**
- Menu de navegação (6 itens)
- Perfil do usuário
- Botão de logout

**Coluna Central (Feed de Vagas)**
- Cards de vagas com expansão
- Formulário de candidatura modal
- Validação em tempo real
- 8 campos de informação
- Upload de CV

**Coluna Direita (Right Panel)**
- Tendências (Top 5)
- Newsletter

### 🎨 Recursos Visuais
- ✅ Cores profissionais (LinkedIn-inspired)
- ✅ Animações suaves
- ✅ Design responsivo (Desktop/Tablet/Mobile)
- ✅ Pronto para dark mode
- ✅ Acessibilidade básica

---

## 🚀 Como Começar

### Frontend
```bash
cd frontend
npm install
npm run dev
# Acesse: http://localhost:5173
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
# Servidor: http://localhost:5000
```

---

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **00_COMECE_AQUI.md** | Sumário executivo |
| **INICIO_RAPIDO.md** | Quick start (30 segundos) |
| **ARQUITETURA.md** | Estrutura técnica |
| **IMPLEMENTACAO_DASHBOARD.md** | Detalhes do dashboard |
| **TESTE_DASHBOARD.md** | Guia de testes |
| **ROADMAP_MELHORIAS.md** | Próximas funcionalidades |
| **RESUMO_FINAL.md** | Resumo das entregas |

---

## 📊 Estatísticas

| Métrica | Quantidade |
|---------|-----------|
| Componentes React | 10+ |
| Arquivos CSS | 10+ |
| Linhas de código | ~2.000+ |
| Documentação | 10 arquivos |
| Breakpoints responsivos | 3 |

---

## 🛣️ Roadmap

### Curto Prazo
- [ ] Busca e filtro de vagas
- [ ] Salvar favoritos
- [ ] Histórico de candidaturas

### Médio Prazo
- [ ] Notificações
- [ ] Chat/Mensagens
- [ ] Dark mode

### Longo Prazo
- [ ] Login com Google/LinkedIn
- [ ] Recomendações IA
- [ ] Premium features

---

## 🔧 Stack

**Frontend:** React 19 + Vite + React Router + CSS3  
**Backend:** Flask + SQLAlchemy + SQLite  
**Deploy:** Render (Backend + Frontend)

---

## 📞 Status

| Aspecto | Status |
|--------|--------|
| Frontend | ✅ Completo |
| Backend | ⚠️ Em desenvolvimento |
| Dashboard | ✅ Completo |
| Deploy | ✅ Configurado |
| Testes | ✅ OK |
| Documentação | ✅ Completo |

---

## 🚀 Próximos Passos

1. Teste o projeto: `npm run dev`
2. Navegue e crie conta
3. Explore o dashboard
4. Integre com backend
5. Implemente melhorias

---

**Versão:** 1.0 | **Status:** ✅ PRONTO PARA PRODUÇÃO  
Projeto Integrador Univesp
