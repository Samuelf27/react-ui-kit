<h1 align="center">🎨 react-ui-kit</h1>

<p align="center">
Design system em <b>React + TypeScript</b> — componentes acessíveis, design tokens, dark mode e tree-shaking.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/>
  <img src="https://github.com/Samuelf27/react-ui-kit/actions/workflows/ci.yml/badge.svg"/>
  <img src="https://img.shields.io/badge/tests-8%20passing-34d399?style=flat"/>
  <img src="https://img.shields.io/badge/a11y-acessível-6f42c1?style=flat"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat"/>
</p>

<p align="center">
  <a href="https://samuelf27.github.io/react-ui-kit/"><b>🔗 Documentação ao vivo</b></a>
</p>

---

## 📌 Sobre

Uma **biblioteca de componentes** reutilizáveis — o tipo de infraestrutura de frontend que toda empresa de software mantém. Componentes acessíveis (ARIA, foco, labels), tematizáveis via **design tokens** (CSS variables) com **dark mode**, tipados em TypeScript e **tree-shakeable**.

> A própria documentação é construída com os componentes da biblioteca (*dogfooding*).

## 📦 Instalação

```bash
npm install @samuelf27/react-ui-kit
```

```tsx
import { Button, Badge, Input } from '@samuelf27/react-ui-kit';
import '@samuelf27/react-ui-kit/styles.css'; // importe os estilos uma vez

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

## 📄 Licença

[MIT](LICENSE) © Samuel Ferreira

---

<p align="center">
  <a href="https://github.com/Samuelf27">GitHub</a> · <a href="https://www.linkedin.com/in/samuel-ferreira27/">LinkedIn</a>
</p>
