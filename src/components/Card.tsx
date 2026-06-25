import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Conteúdo do cabeçalho (opcional). */
  header?: ReactNode;
  /** Conteúdo do rodapé (opcional). */
  footer?: ReactNode;
}

/** Container com cabeçalho, corpo e rodapé opcionais. */
export function Card({ header, footer, children, className = '', ...props }: CardProps) {
  return (
    <div className={`ui-card ${className}`.trim()} {...props}>
      {header && <div className="ui-card__header">{header}</div>}
      <div className="ui-card__body">{children}</div>
      {footer && <div className="ui-card__footer">{footer}</div>}
    </div>
  );
}
