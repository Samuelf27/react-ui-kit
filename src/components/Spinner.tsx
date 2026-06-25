import type { HTMLAttributes } from 'react';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Diâmetro em pixels. */
  size?: number;
  /** Texto acessível para leitores de tela. */
  label?: string;
}

/** Indicador de carregamento acessível. */
export function Spinner({ size = 20, label = 'Carregando', className = '', style, ...props }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={`ui-spinner ${className}`.trim()}
      style={{ width: size, height: size, ...style }}
      {...props}
    />
  );
}
