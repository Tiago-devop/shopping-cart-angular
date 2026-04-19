# 🛒 Shopping Cart Angular

Aplicação de carrinho de compras construída com **Angular 17**, **NgRx**, **GitFlow** e boas práticas de desenvolvimento.

## Tecnologias

- **Angular 17** — Framework principal
- **NgRx 17** — Gerenciamento de estado (Store, Effects, Selectors)
- **SCSS** — Estilização com design customizado
- **Husky + Commitlint** — Padronização de commits (Conventional Commits)
- **ESLint** — Qualidade de código
- **GitFlow** — Estratégia de branches

## Perfis de Acesso

| Perfil | Email | Senha | Acesso |
|--------|-------|-------|--------|
| Admin | `admin@shop.com` | `admin123` | Cadastro de produtos |
| Cliente | `client@shop.com` | `client123` | Lista e carrinho |

## Funcionalidades

- Login mockado com redirecionamento por perfil
- Guard de rotas por role (admin / client)
- Formulário reativo de cadastro de produtos (Admin)
- Lista de produtos com skeleton loading (Cliente)
- Carrinho com controle de quantidade e total calculado
- Spinner global via HTTP Interceptor + NgRx
- Lazy loading de módulos por feature

## Arquitetura NgRx

```
store/
├── auth/       → user, isLoading, error
├── products/   → items[], isLoading
├── cart/       → items[], total (selector)
└── loading/    → count (HTTP global)
```

## Executar localmente

```bash
npm install
ng serve
```

Acesse: `http://localhost:4200`

## Padrão de Commits

```
feat(scope): descrição
fix(scope): descrição
chore: descrição
```
