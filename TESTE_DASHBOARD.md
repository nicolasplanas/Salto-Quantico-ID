# 🧪 Guia de Testes - Dashboard de Vagas

## ⚡ Quick Start (3 passos)

### 1. Inicie o frontend
```bash
cd frontend
npm run dev
```

### 2. Acesse o dashboard
- Opção A: Vá para `http://localhost:5173` e faça login/signup
- Opção B (sem login): Abra DevTools (F12) e execute:
```javascript
localStorage.setItem('token', 'test_token');
window.location.href = '/dashboard';
```

### 3. Explore!
- Veja o feed de vagas
- Clique "Ver mais detalhes"
- Teste "Candidatar-se"

---

## 🎯 Checklist de Testes

### ✅ Sidebar
- [ ] Logo "SaltoQ" aparece no topo
- [ ] Itens de menu estão visíveis
- [ ] Avatar do usuário mostra "João Silva"
- [ ] Botão "Sair" funciona e leva a `/login`

### ✅ Feed
- [ ] "Criar Post" aparece no topo
- [ ] 4 vagas de exemplo aparecem
- [ ] Cada vaga tem: título, descrição, empresa

### ✅ Vagas - Expandir
- [ ] Clique em "Ver mais detalhes"
- [ ] Vaga se expande e mostra:
  - [ ] Requisitos em tags azuis
  - [ ] Salário
  - [ ] Localização
  - [ ] Número de candidatos

### ✅ Formulário de Candidatura
- [ ] Clique em "✉️ Candidatar-se"
- [ ] Modal abre com formulário
- [ ] Deixe Nome vazio e clique "Enviar" → erro aparece
- [ ] Preencha todos os campos obrigatórios (*)
- [ ] Upload um arquivo (qualquer arquivo serve)
- [ ] Clique "Enviar Candidatura"
- [ ] Deve mostrar sucesso (ou erro se backend não existir)
- [ ] Clique X para fechar modal

### ✅ Right Panel (Painel Direito)
- [ ] Seção "Tendências" mostra 5 tópicos
- [ ] Clique X em um tópico (remove da view)
- [ ] Seção "Newsletter" mostra
- [ ] Pode digitar email no campo

### ✅ Responsividade
- [ ] Redimensione para ~768px (tablet)
- [ ] Sidebar deve sumir
- [ ] Menu hamburger aparece
- [ ] Clique no hamburger para abrir sidebar
- [ ] Right panel desaparece
- [ ] Feed ocupa tela inteira

### ✅ Redimensione para ~400px (mobile)
- [ ] Apenas 1 coluna
- [ ] Botões legíveis
- [ ] Formulário ocupa tela

---

## 🔧 Testes de Validação (Formulário)

1. **Nome vazio**: Deixe em branco → erro
2. **Email inválido**: Digite "teste" (sem @) → erro
3. **Telefone vazio**: Deixe em branco → erro
4. **Motivação vazia**: Deixe em branco → erro
5. **Todos preenchidos**: Deve enviar

---

## 🎨 Testes Visuais

- [ ] Cores fazem sentido (azul LinkedIn)
- [ ] Tipografia é legível
- [ ] Espaçamento (padding/margin) é consistente
- [ ] Shadows/borders estão bem colocados
- [ ] Hover effects funcionam em botões
- [ ] Animações são suaves

---

## 🚀 Testes Extras (Customização)

### Mudar Dados do Usuário
Edite `Dashboard.jsx` linha ~38:
```javascript
setUser({
  name: 'Seu Nome', // Mude aqui
  email: 'seu.email@exemplo.com',
  avatar: 'https://i.pravatar.cc/150?img=1'
});
```

### Adicionar Nova Vaga
Edite `Feed.jsx` no array `MOCK_JOBS`:
```javascript
{
  id: 5,
  author: {
    name: 'Sua Empresa',
    role: 'RH',
    avatar: 'https://i.pravatar.cc/150?img=10'
  },
  title: 'Nova Vaga',
  description: 'Descrição aqui',
  requirements: ['Skill1', 'Skill2'],
  salary: 'R$ X - R$ Y',
  location: 'Cidade - Estado',
  posted_at: '1 hora atrás',
  applicants: 0
}
```

### Mudar Cores
Edite qualquer arquivo `.css` e procure por `#0a66c2` (azul):
```css
#0a66c2 → #seu-azul-preferido
#f5f5f5 → #seu-cinza-preferido
```

---

## 📊 Exemplo de Fluxo Completo

1. ✅ Abra `/dashboard`
2. ✅ Veja "Desenvolvedor React Sênior" (primeira vaga)
3. ✅ Clique "Ver mais detalhes"
4. ✅ Veja requisitos: React, JavaScript, etc
5. ✅ Clique "✉️ Candidatar-se"
6. ✅ Preencha:
   - Nome: João da Silva
   - Email: joao@example.com
   - Telefone: (11) 99999-9999
   - Motivação: "Tenho 5 anos de React e quero crescer"
7. ✅ Clique "Enviar Candidatura"
8. ✅ Deve aparecer "Candidatura enviada com sucesso!"

---

## 🐛 Se Algo Não Funcionar

1. **Abra DevTools** (F12)
2. **Vá na aba Console**
3. **Procure por erros vermelhos**
4. **Copie e leia a mensagem de erro**
5. **Verifique se todos os arquivos foram criados**:
   ```bash
   ls frontend/src/pages/Dashboard.jsx
   ls frontend/src/components/dashboard/
   ls frontend/src/styles/Dashboard.css
   ```

---

## 💡 Dicas

- Use `Ctrl+Shift+R` (hard refresh) se o CSS não atualizar
- Se Modal não abrir, verifique console por erros
- O formulário reclama se deixar campos obrigatórios em branco
- Teste em diferentes browsers (Chrome, Firefox, Safari)

---

## ✨ Pronto!

Seu dashboard está 100% funcional! Divirta-se testando! 🚀
