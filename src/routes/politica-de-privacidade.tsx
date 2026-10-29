import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Cinthia Lenoch" },
      {
        name: "description",
        content:
          "Saiba como o site Cinthia Lenoch trata dados pessoais e como entrar em contato para exercer seus direitos.",
      },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a href="/" aria-label="Cinthia Lenoch — voltar ao início">
          <img
            src="/images/logo-cinthia.svg"
            width="300"
            height="60"
            alt="Cinthia Lenoch, produção de eventos"
          />
        </a>
        <a className="privacy-home-link" href="/">
          Voltar ao site
        </a>
      </header>

      <article className="privacy-main">
        <p className="privacy-eyebrow">Cinthia Lenoch · Produção de eventos</p>
        <h1>Política de Privacidade</h1>
        <p className="privacy-intro">
          Esta política explica, de forma clara, como tratamos dados pessoais quando você visita
          cinthialenoch.com.br ou escolhe falar conosco pelos canais indicados aqui.
        </p>
        <p className="privacy-updated">Última atualização: 28 de outubro de 2026</p>

        <section>
          <h2>Quem é responsável pelos dados</h2>
          <p>
            Cinthia Lenoch é a responsável pelo tratamento de dados pessoais relacionado a este
            site. Para dúvidas ou solicitações sobre privacidade, use o WhatsApp de contato
            informado ao final desta página.
          </p>
        </section>

        <section>
          <h2>Quais dados são tratados e por quê</h2>
          <p>
            O site apresenta informações sobre serviços e portfólio e não possui, atualmente,
            formulário de cadastro, conta de usuário ou pagamento. Se você iniciar uma conversa pelo
            link do WhatsApp, poderá compartilhar seu nome, telefone, informações sobre o evento e o
            conteúdo das mensagens. Esses dados são usados para responder ao contato, preparar ou
            acompanhar uma proposta e prestar os serviços solicitados.
          </p>
          <p>
            Ao acessar o site, o provedor de hospedagem e a infraestrutura técnica podem tratar
            dados de conexão e segurança, como endereço IP, data e hora do acesso, navegador e
            páginas solicitadas, para entregar e proteger o serviço. O site não utiliza atualmente
            ferramentas próprias de publicidade comportamental ou medição de audiência.
          </p>
        </section>

        <section>
          <h2>WhatsApp e outros serviços</h2>
          <p>
            O link de contato abre o WhatsApp, serviço fornecido pela Meta. Quando você o utiliza, a
            Meta trata dados conforme os próprios termos e a política de privacidade. O conteúdo da
            conversa é enviado diretamente ao WhatsApp e não é coletado por um formulário deste
            site. Provedores de hospedagem e segurança também podem processar dados técnicos
            necessários para manter o site disponível. Esses serviços podem tratar dados em outros
            países segundo suas próprias regras e salvaguardas.
          </p>
        </section>

        <section>
          <h2>Cookies e armazenamento</h2>
          <p>
            Este site não usa atualmente cookies próprios para publicidade ou rastreamento de
            audiência. O navegador ou os serviços técnicos envolvidos na entrega e segurança do site
            podem utilizar armazenamento estritamente necessário ao funcionamento. O WhatsApp pode
            usar tecnologias próprias quando você acessa a plataforma; consulte as informações da
            Meta para saber mais.
          </p>
        </section>

        <section>
          <h2>Por quanto tempo guardamos os dados</h2>
          <p>
            As informações de uma conversa comercial são mantidas pelo tempo necessário para
            responder ao pedido, conduzir a relação profissional e cumprir obrigações legais ou
            proteger direitos. Dados técnicos seguem os prazos e controles aplicados pelo provedor
            responsável pela hospedagem e segurança.
          </p>
        </section>

        <section>
          <h2>Seus direitos</h2>
          <p>
            Nos termos da legislação aplicável, você pode solicitar confirmação e acesso aos seus
            dados, correção, informação sobre o tratamento, anonimização, bloqueio ou eliminação
            quando cabíveis, além de revogar consentimento quando essa for a base utilizada. A
            análise de cada pedido considera os requisitos e exceções legais.
          </p>
        </section>

        <section>
          <h2>Como falar conosco</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, envie uma mensagem pelo{" "}
            <a href="https://wa.me/5548988504082">WhatsApp da Cinthia Lenoch</a>. Para proteger seus
            dados, podemos solicitar informações razoáveis para confirmar sua identidade antes de
            atender a um pedido.
          </p>
        </section>

        <p className="privacy-note">
          Esta política pode ser atualizada quando os serviços ou práticas do site mudarem. A versão
          vigente ficará disponível nesta página.
        </p>
      </article>

      <footer className="privacy-footer">
        <a href="/">Cinthia Lenoch</a>
        <span>Produção · Coordenação · Eventos</span>
      </footer>
    </main>
  );
}
