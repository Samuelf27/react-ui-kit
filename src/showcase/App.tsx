import { useState, type ReactNode } from 'react';
import { Button, Badge, Input, Card, Alert, Avatar, Spinner, Switch } from '../index';

function Section({ title, code, children }: { title: string; code: string; children: ReactNode }) {
  return (
    <section className="doc-section">
      <h2>{title}</h2>
      <div className="doc-demo">{children}</div>
      <pre className="doc-code">{code}</pre>
    </section>
  );
}

export function App() {
  const [dark, setDark] = useState(true);

  function toggleTheme(checked: boolean) {
    setDark(checked);
    document.documentElement.classList.toggle('dark', checked);
  }

  // estado inicial: dark
  if (dark) document.documentElement.classList.add('dark');

  return (
    <>
      <header className="doc-header">
        <span className="doc-header__logo">🎨 <code>react-ui-kit</code></span>
        <span className="doc-header__spacer" />
        <a href="https://github.com/Samuelf27/react-ui-kit" target="_blank" rel="noopener">GitHub</a>
        <Switch label="Tema escuro" checked={dark} onChange={(e) => toggleTheme(e.target.checked)} />
      </header>

      <div className="doc-hero">
        <h1>Design System</h1>
        <p>Componentes React acessíveis, com design tokens e dark mode. Tipados em TypeScript e tree-shakeable.</p>
        <pre>npm install @samuelf27/react-ui-kit</pre>
      </div>

      <main className="doc-main">
        <Section title="Button" code={`<Button variant="primary">Salvar</Button>\n<Button variant="secondary">Cancelar</Button>\n<Button variant="danger">Excluir</Button>`}>
          <Button>Salvar</Button>
          <Button variant="secondary">Cancelar</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Excluir</Button>
          <Button disabled>Desabilitado</Button>
        </Section>

        <Section title="Badge" code={`<Badge variant="success">Ativo</Badge>`}>
          <Badge variant="neutral">Neutro</Badge>
          <Badge variant="primary">Novo</Badge>
          <Badge variant="success">Ativo</Badge>
          <Badge variant="warning">Pendente</Badge>
          <Badge variant="danger">Erro</Badge>
        </Section>

        <Section title="Input" code={`<Input label="E-mail" placeholder="voce@empresa.com" />\n<Input label="Senha" error="Mínimo de 6 caracteres." />`}>
          <div style={{ minWidth: 240 }}><Input label="E-mail" placeholder="voce@empresa.com" /></div>
          <div style={{ minWidth: 240 }}><Input label="Senha" type="password" error="Mínimo de 6 caracteres." /></div>
        </Section>

        <Section title="Card" code={`<Card header="Resumo" footer={<Button>Ver mais</Button>}>...</Card>`}>
          <Card header="Resumo do mês" footer={<Button size="sm">Ver detalhes</Button>} style={{ maxWidth: 320 }}>
            Receita de <strong>R$ 84.2k</strong>, com crescimento de 8% em relação ao mês anterior.
          </Card>
        </Section>

        <Section title="Alert" code={`<Alert variant="success" title="Tudo certo!">Operação concluída.</Alert>`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
            <Alert variant="info" title="Informação">Sua sessão expira em 5 minutos.</Alert>
            <Alert variant="success" title="Tudo certo!">Usuário criado com sucesso.</Alert>
            <Alert variant="danger" title="Erro">Não foi possível salvar.</Alert>
          </div>
        </Section>

        <Section title="Avatar" code={`<Avatar name="Samuel Ferreira" />`}>
          <Avatar name="Samuel Ferreira" size="sm" />
          <Avatar name="Ana Lima" size="md" />
          <Avatar name="Bruno Costa" size="lg" />
          <Avatar name="GitHub" src="https://avatars.githubusercontent.com/u/127270812?v=4" size="lg" />
        </Section>

        <Section title="Spinner & Switch" code={`<Spinner />\n<Switch label="Notificações" />`}>
          <Spinner size={24} />
          <Spinner size={36} />
          <Switch label="Notificações" defaultChecked />
        </Section>
      </main>

      <footer className="doc-footer">
        Construído com os próprios componentes 🧩 · por <a href="https://github.com/Samuelf27">Samuel Ferreira</a>
      </footer>
    </>
  );
}
