// O TypeScript 7 passou a exigir declaracao para import de efeito colateral de
// arquivos nao-TS. Sem isto, `import './showcase.css'` falha com TS2882.
//
// O bundler (Vite/tsup) e quem resolve o CSS de fato; esta declaracao existe
// so para o compilador saber que o modulo e valido e nao exporta nada.
declare module '*.css';
