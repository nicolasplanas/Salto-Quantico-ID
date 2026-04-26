# 🏗️ Arquitetura do Dashboard

## 📊 Estrutura Geral

```
┌─────────────────────────────────────────────────┐
│                    APLICAÇÃO                    │
└─────────────┬───────────────────────────────┬───┘
              │                               │
        ┌─────▼─────┐         ┌─────────────▼────────┐
        │   Dashboard   │         │  App Router       │
        │   (Main)    │         │  - /               │
        └─────┬─────┘         │  - /login          │
              │               │  - /register       │
    ┌─────────┼─────────┐     │  - /dashboard  ✨  │
    │         │         │     └────────────────────┘
    ▼         ▼         ▼
 ┌─────┐  ┌─────────┐ ┌────────┐
 │SIDE │  │ FEED    │ │ RIGHT  │
 │BAR  │  │ (MAIN)  │ │ PANEL  │
 └─────┘  └────┬────┘ └────────┘
          ┌────┴─────┐
          │           │
          ▼           ▼
      ┌────────┐  ┌──────────────┐
      │ Create │  │  JobPost[]   │
      │ Post   │  │              │
      └────────┘  │  JobPost 1   │
                  │  JobPost 2   │
                  │  JobPost 3   │
                  │  JobPost 4   │
                  │              │
                  │  ┌─────────┐ │
                  │  │  Form   │ │
                  │  │  Modal  │ │
                  │  └─────────┘ │
                  └──────────────┘
```

---

## 🧩 Hierarquia de Componentes

```
Dashboard
├── Sidebar
│   ├── header
│   │   ├── Logo
│   │   └── Menu Toggle
│   ├── Nav Items
│   │   ├── Início
│   │   ├── Rede
│   │   ├── Minhas Vagas
│   │   ├── Salvos
│   │   ├── Mensagens
│   │   └── Notificações
│   └── Footer
│       ├── User Info
│       │   ├── Avatar
│       │   ├── Name
│       │   └── Role
│       └── Logout Button
│
├── Feed
│   ├── CreatePost
│   │   ├── Avatar
│   │   ├── Input Field
│   │   └── Action Buttons
│   │
│   └── JobsList
│       ├── JobPost (id:1)
│       │   ├── Header
│       │   │   ├── Avatar
│       │   │   ├── Author Info
│       │   │   │   ├── Name
│       │   │   │   ├── Role
│       │   │   │   └── Time
│       │   │   └── More Menu
│       │   ├── Content
│       │   │   ├── Title
│       │   │   └── Description
│       │   ├── Details (expandable)
│       │   │   ├── Requirements
│       │   │   │   └── Tags[]
│       │   │   └── Job Info
│       │   │       ├── Salary
│       │   │       ├── Location
│       │   │       └── Applicants
│       │   ├── Footer
│       │   │   ├── Like Button
│       │   │   ├── Comment Button
│       │   │   └── Apply Button
│       │   ├── Expand Button
│       │   └── Form Modal (hidden/visible)
│       │       └── JobApplicationForm
│       │           ├── Header
│       │           ├── Form Fields
│       │           │   ├── Name
│       │           │   ├── Email
│       │           │   ├── Phone
│       │           │   ├── LinkedIn
│       │           │   ├── Portfolio
│       │           │   ├── Resume
│       │           │   ├── Experience
│       │           │   ├── Cover Letter
│       │           │   └── Expectations
│       │           └── Form Buttons
│       │               ├── Cancel
│       │               └── Submit
│       ├── JobPost (id:2)
│       ├── JobPost (id:3)
│       └── JobPost (id:4)
│
└── RightPanel
    ├── Trending Section
    │   ├── Title
    │   └── Trending Items[]
    │       ├── Title
    │       ├── Count
    │       └── Close Button
    │
    └── Newsletter Section
        ├── Title
        ├── Description
        ├── Email Input
        └── Subscribe Button
```

---

## 📊 State Management

```
Dashboard (Context)
├── user: { name, email, avatar }
├── loading: boolean

Feed
├── jobs: JobObject[]
├── expandedJobId: number

JobPost
├── isExpanded: boolean

JobApplicationForm
├── formData: {
│   ├── fullName
│   ├── email
│   ├── phone
│   ├── linkedinProfile
│   ├── portfolio
│   ├── resume
│   ├── experience
│   ├── coverLetter
│   └── expectations
├── errors: {}
└── isSubmitting: boolean
```

---

## 🔄 Data Flow

```
┌─────────────────────────┐
│  Dashboard.jsx          │
│  (Load user data)       │
└────────┬────────────────┘
         │
    ┌────▼──────────────────────────┐
    │ Pass user props to:           │
    ├──────────────────────────────┤
    │ 1. Sidebar (user profile)   │
    │ 2. CreatePost (avatar)       │
    │ 3. Feed (user)               │
    └────┬──────┬──────────┬───────┘
         │      │          │
         ▼      ▼          ▼
      ┌───┐ ┌───────┐  ┌────────┐
      │ S │ │ Create│  │ RightPa│
      │ B │ │ Post  │  │ nel    │
      └───┘ └───┬───┘  └────────┘
              │
         ┌────▼──────────────────┐
         │ Feed.jsx              │
         │ - useState: jobs      │
         │ - useState: expanded  │
         └────┬──────────────────┘
              │
         ┌────▼────────────────────┐
         │ JobPost (map jobs[])    │
         │ - Render card           │
         │ - Expand on click       │
         │ - Show form on button   │
         └────┬────────────────────┘
              │
              ▼
         ┌──────────────────────┐
         │ JobApplicationForm   │
         │ - Validate on input  │
         │ - Submit on button   │
         │ - Show errors        │
         └──────────────────────┘
```

---

## 🎨 Estilo Architecture

```
Cores (Sistema de Design)
├── Primary: #0a66c2 (Azul LinkedIn)
├── Light BG: #f5f5f5 (Cinza claro)
├── White: #fff (Branco)
├── Border: #e5e5e5 (Cinza bordas)
├── Text: #000, #333, #666, #999
└── Error: #d32f2f (Vermelho)

Tipografia
├── Heading (h1-h4): 700 (bold)
├── Body: 400 (regular)
├── Small: 12-13px
├── Medium: 14-15px
└── Large: 18px

Spacing
├── xs: 4px
├── sm: 8px
├── md: 12px
├── lg: 16px
├── xl: 24px
└── 2xl: 32px

Componentes
├── Botões: 10-12px padding
├── Inputs: 10-12px padding
├── Cards: 16px padding
├── Modals: 24px padding
└── Spacing entre items: 16px
```

---

## 📱 Responsive Breakpoints

```
Desktop (>1200px)
├── 3 colunas (Sidebar | Feed | Right Panel)
├── Sidebar sticky
├── Right Panel sticky
└── Grid layout

Tablet (768px - 1200px)
├── 1 coluna (Feed full width)
├── Sidebar colapsável (hamburger)
├── Right Panel hidden
└── Flexible layout

Mobile (<768px)
├── 1 coluna full width
├── Sidebar overlay (hamburger)
├── Padding/margin reduzido
└── Botões ajustados para touch
```

---

## 🔌 Integração Backend

```
Frontend Requests
│
├─ GET /api/auth/profile
│  └─ Response: { id, name, email, avatar }
│
├─ GET /api/jobs
│  └─ Response: JobObject[]
│
├─ GET /api/jobs/{id}
│  └─ Response: JobObject
│
└─ POST /api/applications
   ├─ Body: FormData (multipart)
   └─ Response: { success: true }
```

---

## 🧪 Testes por Componente

| Componente | O que testar |
|-----------|-------------|
| **Dashboard** | Loading state, user data display |
| **Sidebar** | Navigation, logout functionality |
| **Feed** | Job list rendering, expand/collapse |
| **JobPost** | Details display, button interactions |
| **Form** | Validation, error display, submission |
| **RightPanel** | Trending items, newsletter |

---

## 📈 Performance Considerations

```
Otimizações Implementadas
├─ Lazy loading (potencial)
├─ CSS classes (evita styled-components)
├─ Event delegation (buttons)
└─ State lifting (quando necessário)

Potenciais Melhorias
├─ Infinite scroll para vagas
├─ Debounce em busca
├─ Memoization em componentes
├─ Image optimization
└─ Code splitting
```

---

## 📋 Checklist de Implementação

- ✅ Estrutura de pastas criada
- ✅ Componentes React implementados
- ✅ CSS modular aplicado
- ✅ Props passadas corretamente
- ✅ Estados gerenciados
- ✅ Event handlers funcionando
- ✅ Validação de formulário
- ✅ Responsividade em 3 breakpoints
- ✅ Documentação completa

---

**Versão:** 1.0
**Status:** ✅ PRONTO

