import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { Switch } from './Switch';
import { Avatar } from './Avatar';

describe('Input', () => {
  it('associa o label ao campo', () => {
    render(<Input label="E-mail" />);
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('mostra erro e marca aria-invalid', () => {
    render(<Input label="E-mail" error="Inválido" />);
    expect(screen.getByText('Inválido')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('Switch', () => {
  it('expõe role switch e label acessível', () => {
    render(<Switch label="Notificações" />);
    expect(screen.getByRole('switch', { name: 'Notificações' })).toBeInTheDocument();
  });
});

describe('Avatar', () => {
  it('mostra as iniciais quando não há imagem', () => {
    render(<Avatar name="Samuel Ferreira" />);
    expect(screen.getByText('SF')).toBeInTheDocument();
  });
});
