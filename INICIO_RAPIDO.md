# 🚀 INÍCIO RÁPIDO - Dashboard SaltoQ

## ⚡ 30 segundos para começar

```bash
# 1. Entre no frontend
cd frontend

# 2. Inicie o servidor
npm run dev

# 3. Abra http://localhost:5173/dashboard
# (Ou faça login/signup primeiro)
```

## 👀 O que você verá

```
┌─────────────────────────────────────────────┐
│  ┌─────────┬──────────────────┬───────────┐ │
│  │ SIDEBAR │   FEED VAGAS     │ TENDÊNCIAS│ │
│  │         │                  │           │ │
│  │ 🏠 Início │  📝 Criar Post  │ 📊 Top 5  │
│  │ 👥 Rede  │  💼 Vaga 1      │           │
│  │ 💼 Vagas │  💼 Vaga 2      │ Newsletter│
│  │ 🔖 Salvos │  💼 Vaga 3      │           │
│  │ 💬 Msgs  │  💼 Vaga 4      │           │
│  │          │                  │           │
│  │ João ✕   │  [Candidatar-se] │           │
│  └─────────┴──────────────────┴───────────┘ │
└─────────────────────────────────────────────┘
```

---

## 🎯 Funcionalidades Principais

| Feature | Como Usar |
|---------|-----------|
| **Ver Vaga** | Clique "Ver mais detalhes" |
| **Candidatar** | Clique "✉️ Candidatar-se" |
| **Preencher Form** | Complete todos os campos * |
| **Enviar CV** | Clique "Selecionar arquivo" |
| **Validação** | Aparecem erros se faltarem campos |
| **Logout** | Clique botão "Sair" |

---

## 📂 Arquivos Criados

```
✅ frontend/src/pages/Dashboard.jsx
✅ frontend/src/components/dashboard/Sidebar.jsx
✅ frontend/src/components/dashboard/Feed.jsx
✅ frontend/src/components/dashboard/JobPost.jsx
✅ frontend/src/components/dashboard/JobApplicationForm.jsx
✅ frontend/src/components/dashboard/CreatePost.jsx
✅ frontend/src/components/dashboard/RightPanel.jsx

✅ frontend/src/styles/Dashboard.css
✅ frontend/src/styles/Sidebar.css
✅ frontend/src/styles/Feed.css
✅ frontend/src/styles/CreatePost.css
✅ frontend/src/styles/JobPost.css
✅ frontend/src/styles/JobApplicationForm.css
✅ frontend/src/styles/RightPanel.css

✅ frontend/src/App.jsx (atualizado)
```

---

## 📖 Documentação

| Arquivo | Para Quê |
|---------|----------|
| **IMPLEMENTACAO_DASHBOARD.md** | Detalhes completos |
| **TESTE_DASHBOARD.md** | Como testar |
| **ROADMAP_MELHORIAS.md** | Próximas funcionalidades |
| **README_DASHBOARD.md** | Visão geral |
| **INICIO_RAPIDO.md** | Este arquivo |

---

## 🔧 Precisa Customizar?

### Mudar Cores
Procure `#0a66c2` em qualquer `.css`

### Mudar Vagas
Edite `Feed.jsx` array `MOCK_JOBS`

### Mudar Usuário
Edite `Dashboard.jsx` linha 38

### Mudar Estrutura
Não! Está pronta 😉

---

## ❌ Erro? Teste Isto

```javascript
// No console (F12)
localStorage.setItem('token', 'teste');
window.location.reload();
```

---

## ✅ Tudo Funcionando?

- [x] Dashboard carrega
- [x] Vagas aparecem
- [x] Formulário abre
- [x] Validação funciona
- [x] Menu responsivo

**Parabéns! 🎉**

---

Próximo passo: Leia `IMPLEMENTACAO_DASHBOARD.md` para integrar com backend!
