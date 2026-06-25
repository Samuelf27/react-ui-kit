import { forwardRef, type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual do botão. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Tamanho do botão. */
  size?: 'sm' | 'md' | 'lg';
  /** Ocupa 100% da largura disponível. */
  block?: boolean;
}

/** Botão acessível com variantes e tamanhos. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', block = false, className = '', ...props }, ref) => {
    const classes = [
      'ui-btn',
      `ui-btn--${variant}`,
      `ui-btn--${size}`,
      block ? 'ui-btn--block' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    return <button ref={ref} className={classes} {...props} />;
  },
);
Button.displayName = 'Button';
