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
          Esta política explica como Cinthia Lenoch trata dados pessoais no site, nas conversas
          comerciais e nos serviços de produção e coordenação de eventos, incluindo operações de
          mailing e comunicação quando contratadas.
        </p>
        <p className="privacy-updated">Última atualização: 28 de outubro de 2026</p>

        <section>
          <h2>Quem decide e quem trata os dados</h2>
          <p>
            Para os dados usados na administração do próprio negócio, Cinthia Lenoch define as
            finalidades e os meios essenciais do tratamento e atua como controladora. Em projetos de
            eventos, a empresa ou organização contratante normalmente define por que os dados dos
            participantes são coletados e como serão usados. Nesses casos, Cinthia Lenoch pode atuar
            como operadora, tratando os dados conforme as instruções documentadas do cliente e o
            contrato aplicável. O cliente permanece responsável pelas decisões que lhe cabem como
            controlador.
          </p>
          <p>
            A função de cada parte pode variar conforme o projeto. A informação fornecida no
            formulário, convite ou aviso específico do evento prevalece para aquele tratamento.
          </p>
        </section>

        <section>
          <h2>Dados que podemos tratar e finalidades</h2>
          <p>
            O site não possui atualmente formulário de cadastro, conta de usuário ou pagamento. Se
            você iniciar contato pelo WhatsApp, poderemos tratar seu nome, telefone, empresa,
            informações do evento e mensagens para responder, preparar propostas, contratar e
            prestar serviços. Também podemos tratar dados de clientes, fornecedores e profissionais
            envolvidos na execução de um projeto para organizar equipes, cronogramas, credenciais,
            logística e comunicações necessárias ao evento.
          </p>
          <p>
            Quando o cliente contrata esse escopo, a gestão de dados de participantes pode incluir
            informações de inscrição e contato, confirmação de presença, preferências informadas
            pelo participante e registros de comunicação. Coletamos e usamos apenas os dados
            pertinentes ao evento e às instruções acordadas. Dados sensíveis ou de crianças e
            adolescentes só devem ser tratados quando estritamente necessários, com fundamento e
            proteção compatíveis com a lei e com as orientações do controlador do evento.
          </p>
          <p>
            O provedor de hospedagem e a infraestrutura técnica podem registrar dados de conexão e
            segurança, como endereço IP, data e hora, navegador e páginas solicitadas, para entregar
            e proteger o site. O site não tem atualmente inscrição para newsletter nem ferramenta
            própria de publicidade comportamental ou medição de audiência.
          </p>
        </section>

        <section>
          <h2>Mailing, e-mail marketing e disparos</h2>
          <p>
            Quando esse serviço fizer parte de um contrato, poderemos organizar listas de contatos e
            preparar ou enviar comunicações sobre inscrição, programação, orientações, alterações e
            atividades de um evento. Também poderemos enviar comunicações de marketing da própria
            Cinthia Lenoch quando houver autorização ou outra base legal aplicável e o envio for
            permitido pelas regras de comunicação eletrônica pertinentes. Avisos operacionais de um
            evento são separados de mensagens promocionais.
          </p>
          <p>
            As listas da Cinthia Lenoch podem incluir dados de clientes e contatos comerciais com
            quem houve uma relação ou contato profissional. Em projetos de eventos, também podemos
            tratar listas fornecidas pelo cliente contratante, que deve ter legitimidade para
            compartilhá-las e informar os titulares sobre o uso. A origem e a finalidade da lista
            devem ser verificáveis; os dados não devem ser usados para finalidades incompatíveis ou
            sem base legal aplicável. A participação em um evento, por si só, não significa inclusão
            na lista de marketing própria da Cinthia Lenoch.
          </p>
          <p>
            Mensagens promocionais devem identificar quem envia e oferecer uma forma simples e
            gratuita de parar de recebê-las, como o link de descadastro ou uma solicitação de
            remoção pelo canal de contato. Ao receber um pedido de oposição ou descadastro, paramos
            os envios promocionais e mantemos, se necessário, apenas o registro mínimo para
            respeitar essa escolha e evitar novos envios. O descadastro de marketing não impede o
            envio de mensagens estritamente necessárias à execução de um contrato ou à operação do
            evento.
          </p>
          <p>
            Quando operamos uma lista em nome de um cliente, usamos os contatos somente para as
            finalidades e pelo período definidos nas instruções e no contrato do evento, e os
            devolvemos, eliminamos ou anonimizamos ao final do serviço, ressalvadas obrigações
            legais e instruções legítimas do controlador.
          </p>
          <p>
            Atualmente, a Cinthia Lenoch não usa uma plataforma dedicada de e-mail marketing ou
            disparos em massa. Se uma ferramenta externa vier a ser usada, ou se o cliente do evento
            indicar a plataforma, a informação será tratada conforme o projeto e esta política será
            atualizada quando necessário.
          </p>
        </section>

        <section>
          <h2>Bases legais e transparência</h2>
          <p>
            Conforme o contexto, o tratamento pode se apoiar na execução de contrato ou de medidas
            pré-contratuais, no cumprimento de obrigação legal, no consentimento, no exercício
            regular de direitos ou em legítimo interesse avaliado para a finalidade concreta e sem
            prevalecer sobre direitos e liberdades do titular. A base aplicável depende da atividade
            específica; não usamos uma única base para todas as operações. Quando o consentimento
            for necessário, ele será solicitado de forma específica e poderá ser revogado.
          </p>
          <p>
            Aplicamos a Lei Geral de Proteção de Dados Pessoais (LGPD) aos tratamentos sujeitos à
            legislação brasileira. O Regulamento Geral sobre a Proteção de Dados da União Europeia
            (GDPR, também conhecido como RGPD) será observado quando o tratamento estiver dentro do
            seu âmbito territorial e material de aplicação. Em projetos, o controlador do evento
            deve definir e comunicar a base legal apropriada aos participantes.
          </p>
        </section>

        <section>
          <h2>Compartilhamento e fornecedores</h2>
          <p>
            Dados podem ser compartilhados, no limite necessário, com o cliente que contratou o
            evento, fornecedores de hospedagem, comunicação por e-mail, inscrição e gestão de
            eventos, armazenamento, suporte técnico e segurança, além de autoridades quando exigido
            por lei. Cada fornecedor recebe apenas os dados necessários à função contratada e deve
            proteger as informações conforme suas obrigações. Os nomes das plataformas podem variar
            conforme o projeto e serão informados pelo controlador quando necessário.
          </p>
          <p>
            O link de contato deste site abre o WhatsApp, fornecido pela Meta. Ao usar o serviço,
            você também se sujeita aos termos e à política de privacidade da Meta. Fornecedores de
            e-mail, nuvem ou outros serviços podem armazenar ou acessar dados fora do Brasil. Quando
            houver transferência internacional, ela deverá observar os requisitos e mecanismos de
            proteção previstos na legislação aplicável.
          </p>
        </section>

        <section>
          <h2>Cookies e armazenamento</h2>
          <p>
            Este site não usa atualmente cookies próprios para publicidade ou rastreamento de
            audiência. O navegador ou os serviços técnicos de entrega e segurança podem utilizar
            armazenamento estritamente necessário ao funcionamento. Plataformas externas, como
            WhatsApp ou eventuais ferramentas de inscrição e e-mail, podem usar tecnologias próprias
            sujeitas aos avisos e controles delas.
          </p>
        </section>

        <section>
          <h2>Por quanto tempo guardamos os dados</h2>
          <p>
            Mantemos dados somente pelo período necessário às finalidades informadas, ao contrato, à
            prestação de contas do evento e ao cumprimento de obrigações legais ou defesa de
            direitos. Os prazos de dados de participantes tratados em nome de um cliente seguem as
            instruções contratuais do controlador; ao fim do serviço, os dados são devolvidos,
            eliminados ou anonimizados quando aplicável. Cópias de segurança podem permanecer por
            prazo limitado nos ciclos de retenção dos fornecedores, protegidas e sem uso para novas
            finalidades.
          </p>
        </section>

        <section>
          <h2>Segurança e incidentes</h2>
          <p>
            Adotamos medidas técnicas e administrativas proporcionais para proteger dados contra
            acesso, perda, alteração ou divulgação não autorizados. Nenhum canal ou sistema é
            totalmente livre de riscos. Se ocorrer incidente que possa causar risco ou dano
            relevante, a comunicação aos titulares e à autoridade competente será avaliada e
            realizada por quem tiver essa obrigação, conforme a lei aplicável e, em eventos, a
            divisão de responsabilidades acordada com o controlador.
          </p>
        </section>

        <section>
          <h2>Seus direitos</h2>
          <p>
            Conforme a lei aplicável, você pode pedir confirmação do tratamento, acesso, correção,
            informação sobre compartilhamentos, portabilidade quando regulamentada, anonimização,
            bloqueio ou eliminação nas hipóteses legais, e revogar o consentimento quando essa for a
            base utilizada. Você também pode se opor a tratamentos nos casos previstos em lei. Para
            marketing direto, a oposição pode ser feita a qualquer momento; depois do pedido, os
            dados deixam de ser usados para essa finalidade. Se o GDPR se aplicar, você poderá ainda
            solicitar restrição do tratamento e apresentar reclamação à autoridade de proteção de
            dados competente. Alguns direitos admitem exceções legais.
          </p>
        </section>

        <section>
          <h2>Como falar conosco</h2>
          <p>
            Para exercer seus direitos, cancelar comunicações promocionais ou tirar dúvidas sobre
            esta política, envie uma mensagem pelo{" "}
            <a href="https://wa.me/5548988504082">WhatsApp da Cinthia Lenoch</a>. Se seus dados
            forem tratados em nome de um cliente para um evento, informe o nome do evento e o
            cliente/organizador para que possamos encaminhar o pedido ao controlador responsável.
            Podemos solicitar informações razoáveis para confirmar sua identidade antes de atender
            ao pedido.
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
