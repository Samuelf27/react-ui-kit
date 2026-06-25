import type { HTMLAttributes } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** URL da imagem (opcional). */
  src?: string;
  /** Nome usado para alt e iniciais de fallback. */
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase();
}

/** Avatar com imagem ou iniciais de fallback. */
export function Avatar({ src, name, size = 'md', className = '', ...props }: AvatarProps) {
  return (
    <div className={`ui-avatar ui-avatar--${size} ${className}`.trim()} {...props}>
      {src ? <img src={src} alt={name} /> : <span aria-label={name}>{initials(name)}</span>}
    </div>
  );
}
