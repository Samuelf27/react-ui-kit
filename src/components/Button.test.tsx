import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renderiza o texto', () => {
    render(<Button>Salvar</Button>);
    expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument();
  });

  it('aplica a classe da variante e do tamanho', () => {
    render(<Button variant="danger" size="lg">X</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('ui-btn--danger');
    expect(btn).toHaveClass('ui-btn--lg');
  });

  it('dispara onClick', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('não dispara quando desabilitado', () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
