# Implementação de Registro e Login - Salto Quântico ID

## Resumo das Alterações

### Backend (Python/Flask)

#### 1. **models.py** - Atualizado o modelo do usuário
- Adicionado campo `password` (hash da senha)
- Adicionado campo `birth_date` (data de nascimento)
- Adicionado campo `terms_accepted` (aceite dos termos)
- Adicionado campo `created_at` (data de criação)
- Tornados obrigatórios: `name`, `email`, `password`
- Email único para evitar duplicatas

#### 2. **app.py** - Configuração do Database
- Inicializando SQLAlchemy no Flask
- Criação automática de tabelas se não existirem
- Suporte a SQLite (padrão) ou MySQL/PostgreSQL via variável `DATABASE_URL`

#### 3. **routes.py** - Novas rotas de autenticação
- `POST /api/auth/signup` - Criar nova conta
  - Validação de campos obrigatórios
  - Hash de senha usando werkzeug
  - Verificação de email duplicado
  - Validação dos termos e condições
  
- `POST /api/auth/login` - Fazer login
  - Verificação de email e senha
  - Retorna token simples e dados do usuário

#### 4. **requirements.txt** - Dependências atualizadas
- `Flask-SQLAlchemy==3.0.5` - ORM para banco de dados
- `Werkzeug==3.0.0` - Para hash de senha

#### 5. **database.sql** - Schema atualizado
- Tabela `talent` renomeada (nome padrão do SQLAlchemy)
- Novos campos: `password`, `birth_date`, `terms_accepted`, `created_at`

### Frontend (React)

#### 1. **pages/Signup.jsx** - Nova página de registro
- Formulário com campos:
  - Nome Completo
  - Email
  - Data de Nascimento
  - Senha
  - Confirmação de Senha
  - Checkbox de Termos e Condições
  
- Validações:
  - Nome não vazio
  - Email válido
  - Senha mínima de 6 caracteres
  - Senhas coincidentes
  - Data de nascimento preenchida
  - Termos aceitos obrigatoriamente
  
- Integração com API:
  - POST para `http://localhost:5000/api/auth/signup`
  - Feedback visual (erros e sucesso)
  - Redirecionamento para login após sucesso

#### 2. **styles/Signup.css** - Estilos da página de signup
- Design consistente com Login e Home
- Efeitos quânticos de fundo (gradientes e glows)
- Inputs com foco interativo
- Checkbox customizado com gradiente
- Responsivo para mobile (480px, 768px)
- Alertas de erro e sucesso

#### 3. **App.jsx** - Rota adicionada
- Nova rota: `/register` → `Signup`
- Link no Login.jsx já apontava para `/register`

---

## Como Executar

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm ou yarn

### 1. Setup Backend

```bash
cd backend

# Instalar dependências
pip install -r requirements.txt

# Executar o servidor Flask
python app.py
```

O servidor rodará em `http://localhost:5000`

### 2. Setup Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Executar o desenvolvimento server
npm run dev
```

O frontend rodará em `http://localhost:5173` (padrão Vite)

---

## Fluxo de Uso

### 1. **Criar Conta**
1. Usuário acessa `http://localhost:5173/register`
2. Preenche formulário com dados pessoais
3. Clica em "Criar Conta"
4. Sistema valida dados
5. Se tudo OK, salva no banco de dados
6. Redireciona para página de login
7. Usuário pode fazer login com email e senha

### 2. **Fazer Login**
1. Usuário acessa `http://localhost:5173/login`
2. Insere email e senha
3. Clica em "Entrar"
4. Sistema verifica credenciais
5. Se correto, armazena token no localStorage
6. Redireciona para dashboard (a implementar)

---

## Banco de Dados

### Estrutura (auto-criado)
```sql
CREATE TABLE talent (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    birth_date DATE,
    area VARCHAR(100),
    skills TEXT,
    terms_accepted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Para usar MySQL/PostgreSQL (opcional)
Defina a variável de ambiente antes de rodar:

**MySQL:**
```bash
set DATABASE_URL=mysql+pymysql://user:password@localhost/talentbridge
python app.py
```

**PostgreSQL:**
```bash
set DATABASE_URL=postgresql://user:password@localhost/talentbridge
python app.py
```

---

## Melhorias Futuras (Recomendadas)

1. **JWT Tokens** - Autenticação mais segura com expiração
2. **Email Verification** - Confirmar email antes de ativar conta
3. **Password Reset** - Recuperação de senha
4. **Dashboard** - Página após login bem-sucedido
5. **Profile Update** - Usuário editar seus dados
6. **2FA** - Autenticação de dois fatores
7. **Rate Limiting** - Proteção contra brute force
8. **HTTPS/SSL** - Para produção
9. **Refresh Tokens** - Renovar autenticação
10. **User Roles** - Sistema de permissões

---

## Estrutura de Pastas Atualizada

```
backend/
├── app.py              (✓ Atualizado)
├── models.py           (✓ Atualizado)
├── routes.py           (✓ Atualizado)
├── requirements.txt    (✓ Atualizado)
└── database.sql        (✓ Atualizado)

frontend/
├── src/
│   ├── App.jsx         (✓ Atualizado)
│   ├── pages/
│   │   ├── Home.jsx    (✓ Existente)
│   │   ├── Login.jsx   (✓ Existente)
│   │   └── Signup.jsx  (✓ Novo)
│   └── styles/
│       ├── Login.css   (✓ Existente)
│       └── Signup.css  (✓ Novo)
```

---

## Testes Rápidos (cURL)

### Criar Conta
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "password": "senha123",
    "birth_date": "1995-05-15",
    "terms_accepted": true
  }'
```

### Fazer Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@example.com",
    "password": "senha123"
  }'
```

---

## Variáveis de Ambiente (opcional)

Crie um arquivo `.env` na pasta `backend/`:

```
DATABASE_URL=sqlite:///salto_quantico.db
FLASK_ENV=development
FLASK_DEBUG=True
PORT=5000
```

---

## Suporte e Debugging

### Erro: "Email já cadastrado"
- Email já existe no banco de dados
- Use outro email ou verifique as credenciais

### Erro: "Senhas não coincidem"
- Os campos de senha e confirmação devem ser iguais

### Erro: "Você deve aceitar os termos"
- Marque o checkbox de termos antes de enviar

### Erro ao conectar ao servidor
- Verifique se o backend está rodando em `http://localhost:5000`
- Verifique o console do navegador (F12) para mais detalhes

---

**Implementado em:** Março 18, 2026
**Versão:** 1.0
