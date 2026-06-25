import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  /** Título em destaque (opcional). */
  title?: ReactNode;
}

const ICONS: Record<NonNullable<AlertProps['variant']>, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  danger: '⛔',
};

/** Mensagem contextual (info, sucesso, aviso, erro). */
export function Alert({ variant = 'info', title, children, className = '', ...props }: AlertProps) {
  return (
    <div role="alert" className={`ui-alert ui-alert--${variant} ${className}`.trim()} {...props}>
      <span className="ui-alert__icon" aria-hidden="true">{ICONS[variant]}</span>
      <div className="ui-alert__body">
        {title && <div className="ui-alert__title">{title}</div>}
        {children}
      </div>
    </div>
  );
}
