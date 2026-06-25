import { forwardRef, useId, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo do campo (associado via htmlFor/id). */
  label?: string;
  /** Mensagem de erro; aplica estado visual de erro. */
  error?: string;
}

/** Campo de entrada com rótulo, estado de erro e acessibilidade. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    return (
      <div className="ui-field">
        {label && (
          <label className="ui-field__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`ui-input ${error ? 'ui-input--error' : ''} ${className}`.trim()}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className="ui-field__error">
            {error}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
