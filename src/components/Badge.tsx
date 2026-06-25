import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
}

/** Rótulo compacto para status e categorias. */
export function Badge({ variant = 'neutral', className = '', ...props }: BadgeProps) {
  return <span className={`ui-badge ui-badge--${variant} ${className}`.trim()} {...props} />;
}
