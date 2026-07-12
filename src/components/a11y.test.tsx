import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Alert } from './Alert';
import { Badge } from './Badge';
import { Avatar } from './Avatar';
import { Switch } from './Switch';

// axe desativa a regra color-contrast em jsdom (sem layout real); estas asserções
// cobrem papéis/atributos ARIA. O contraste é validado nos tokens de styles.css.

describe('a11y — sem violações axe', () => {
  it('Alert (info)', async () => {
    const { container } = render(<Alert title="Info">Mensagem</Alert>);
    expect((await axe(container)).violations).toEqual([]);
  });

  it('Badge', async () => {
    const { container } = render(<Badge variant="success">Ativo</Badge>);
    expect((await axe(container)).violations).toEqual([]);
  });

  it('Avatar (iniciais)', async () => {
    const { container } = render(<Avatar name="Samuel Ferreira" />);
    expect((await axe(container)).violations).toEqual([]);
  });

  it('Switch', async () => {
    const { container } = render(<Switch label="Notificações" />);
    expect((await axe(container)).violations).toEqual([]);
  });
});

describe('a11y — papéis e atributos ARIA', () => {
  it('Avatar anuncia o nome via role=img', () => {
    render(<Avatar name="Samuel Ferreira" />);
    expect(screen.getByRole('img', { name: 'Samuel Ferreira' })).toBeInTheDocument();
  });

  it('Alert usa role=alert (assertivo) para danger/warning', () => {
    const { rerender } = render(<Alert variant="danger">Erro</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Erro');
    rerender(<Alert variant="warning">Aviso</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Aviso');
  });

  it('Alert usa role=status (educado) para info/success', () => {
    const { rerender } = render(<Alert variant="info">Info</Alert>);
    expect(screen.getByRole('status')).toHaveTextContent('Info');
    rerender(<Alert variant="success">Ok</Alert>);
    expect(screen.getByRole('status')).toHaveTextContent('Ok');
  });

  it('Alert permite sobrepor o role', () => {
    render(<Alert variant="info" role="alert">Forçado</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Forçado');
  });

  it('Switch mostra o rótulo visível e mantém o nome acessível', () => {
    render(<Switch label="Notificações" />);
    expect(screen.getByText('Notificações')).toBeInTheDocument();
    expect(screen.getByRole('switch', { name: 'Notificações' })).toBeInTheDocument();
  });
});
