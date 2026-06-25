import { forwardRef, type InputHTMLAttributes } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Rótulo acessível (obrigatório para acessibilidade). */
  label: string;
}

/** Interruptor (toggle) acessível baseado em checkbox. */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className={`ui-switch ${className}`.trim()}>
        <input ref={ref} type="checkbox" role="switch" aria-label={label} {...props} />
        <span className="ui-switch__track">
          <span className="ui-switch__thumb" />
        </span>
      </label>
    );
  },
);
Switch.displayName = 'Switch';
