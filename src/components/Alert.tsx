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

/** danger/warning são urgentes (assertivo); info/success são passivos (educado). */
const ROLES: Record<NonNullable<AlertProps['variant']>, 'alert' | 'status'> = {
  info: 'status',
  success: 'status',
  warning: 'alert',
  danger: 'alert',
};

/** Mensagem contextual (info, sucesso, aviso, erro). */
export function Alert({ variant = 'info', title, children, className = '', role, ...props }: AlertProps) {
  return (
    <div role={role ?? ROLES[variant]} className={`ui-alert ui-alert--${variant} ${className}`.trim()} {...props}>
      <span className="ui-alert__icon" aria-hidden="true">{ICONS[variant]}</span>
      <div className="ui-alert__body">
        {title && <div className="ui-alert__title">{title}</div>}
        {children}
      </div>
    </div>
  );
}
