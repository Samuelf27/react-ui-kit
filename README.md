<h1 align="center">🎨 react-ui-kit</h1>

<p align="center">
Design system em <b>React + TypeScript</b> — componentes acessíveis, design tokens, dark mode e tree-shaking.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript"/>
  <a href="https://github.com/Samuelf27/react-ui-kit/actions/workflows/ci.yml"><img src="https://github.com/Samuelf27/react-ui-kit/actions/workflows/ci.yml/badge.svg" alt="CI status"/></a>
  <img src="https://img.shields.io/badge/tests-17%20passing-34d399?style=flat" alt="17 testes passando"/>
  <img src="https://img.shields.io/badge/a11y-acessível-6f42c1?style=flat" alt="acessível"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat" alt="licença MIT"/>
</p>

<p align="center">
  <a href="https://samuelf27.github.io/react-ui-kit/"><b>🔗 Documentação ao vivo</b></a>
</p>

---

## 📌 Sobre

Uma **biblioteca de componentes** reutilizáveis — o tipo de infraestrutura de frontend que toda empresa de software mantém. Componentes acessíveis (ARIA, foco, labels), tematizáveis via **design tokens** (CSS variables) com **dark mode**, tipados em TypeScript e **tree-shakeable**.

> A própria documentação é construída com os componentes da biblioteca (*dogfooding*).

## 📦 Instalação

> **Ainda não publicado no npm.** Por enquanto, instale direto do GitHub:

```bash
npm install github:Samuelf27/react-ui-kit
```

Ou explore a [documentação ao vivo](https://samuelf27.github.io/react-ui-kit/), construída com os próprios componentes.

```tsx
import { Button, Badge, Input } from '@eusamuelf/react-ui-kit';
import '@eusamuelf/react-ui-kit/styles.css'; // importe os estilos uma vez

export default function App() {
  return <Button variant="primary">Salvar</Button>;
}
```

🌗 **Dark mode:** adicione a classe `dark` (ou `data-theme="dark"`) em um ancestral.

## 🧩 Componentes

`Button` · `Badge` · `Input` · `Card` · `Alert` · `Avatar` · `Spinner` · `Switch`

Todos com props tipadas, `forwardRef` onde faz sentido e foco/ARIA adequados.

## 🎨 Design tokens

O tema é controlado por CSS variables (`--ui-primary`, `--ui-radius`, `--ui-fg`...). Sobrescreva no seu CSS para customizar a marca sem tocar nos componentes.

## 🛠️ Desenvolvimento

```bash
npm install
npm run dev        # site de documentação (Vite)
npm test           # testes (Vitest + Testing Library)
npm run typecheck  # checagem de tipos
npm run build:lib  # gera dist/ (ESM + CJS + .d.ts + styles.css)
```

## 🤖 CI/CD

- **CI** (`ci.yml`): typecheck + testes + build da lib a cada push
- **Deploy** (`deploy.yml`): publica a documentação no GitHub Pages

## 🧪 Testes

**17 testes** em 3 arquivos (Vitest + Testing Library), rodando no CI a cada push e pull request.

A acessibilidade é testada, não apenas afirmada:

- **`src/components/a11y.test.tsx`** — roda o **axe** sobre os componentes e falha se houver violação. Verifica ainda os papéis ARIA na prática: `Alert` usa `role="alert"` (assertivo) para `danger`/`warning` e `role="status"` (educado) para `info`/`success`; `Avatar` se anuncia via `role="img"`; `Switch` mantém rótulo visível e nome acessível.
- **`Button.test.tsx`** e **`Input.test.tsx`** — variantes, estados e comportamento.

```bash
npm test
```

## 📄 Licença

[MIT](LICENSE) © Samuel Ferreira

---

<p align="center">
  <a href="https://github.com/Samuelf27">GitHub</a> · <a href="https://www.linkedin.com/in/samuel-ferreira27/">LinkedIn</a>
</p>
