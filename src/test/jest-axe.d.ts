// Tipos mínimos para jest-axe (o pacote não inclui declarações próprias e
// @types/jest-axe puxa @types/jest, que conflita com os globais do Vitest).
declare module 'jest-axe' {
  interface AxeResults {
    violations: unknown[];
  }
  export function axe(html: Element | string, options?: unknown): Promise<AxeResults>;
}
