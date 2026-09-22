import { useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowUpRight,
  Gamepad2,
  Play,
  Rocket,
  MessagesSquare,
  PanelsTopLeft,
  Workflow,
  MessageCircle,
  CalendarDays,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { Action, Eyebrow, Reveal } from "@/components/editorial";
import { contact } from "@/content/site";
import "@/event-extension.css";

// Source mapping and limits: NEW-SECTIONS-SOURCES.md.
// These six formats are possibilities requested by the client, not completed-project claims.
const solutions = [
  {
    title: "Gamificação",
    icon: Gamepad2,
    text: "Experiências interativas para convidar o público a participar de eventos e campanhas.",
  },
  {
    title: "Explicativos",
    icon: Play,
    text: "Conteúdos digitais para apresentar uma ideia, explicar uma proposta ou orientar o participante.",
  },
  {
    title: "Pré-lançamento",
    icon: Rocket,
    text: "Páginas e ações digitais para apresentar a novidade, despertar interesse e captar contatos.",
  },
  {
    title: "Pós-lançamento",
    icon: MessagesSquare,
    text: "Comunicação e experiências para dar continuidade à conversa com o público depois do lançamento.",
  },
  {
    title: "Landing pages",
    icon: PanelsTopLeft,
    text: "Páginas para reunir informações de eventos, campanhas e lançamentos, com foco no próximo passo.",
  },
  {
    title: "Automação",
    icon: Workflow,
    text: "Fluxos digitais para organizar interações e reduzir tarefas manuais, conforme a necessidade do projeto.",
  },
];
const applications = [
  {
    label: "Atender",
    icon: MessageCircle,
    title: "Uma conversa que acompanha o participante.",
    text: "Atendimento via WhatsApp para apoiar o público e facilitar o acesso às informações do evento.",
    entry: "Dúvidas do participante",
    channel: "WhatsApp",
    result: "Informações do evento",
    examples: [
      "Apoio ao participante antes da chegada e durante o evento.",
      "Informações sobre o encontro em uma conversa pelo WhatsApp.",
      "Atendimento a convidados internacionais, conforme o projeto.",
    ],
  },
  {
    label: "Orientar",
    icon: CalendarDays,
    title: "A programação, mais perto de cada pessoa.",
    text: "Concierge digital para consultar a programação e participar de enquetes durante a experiência.",
    entry: "Participação no evento",
    channel: "Concierge digital",
    result: "Programação e enquetes",
    examples: [
      "Consulta à programação pelo concierge digital.",
      "Orientações para acompanhar as atividades do evento.",
      "Enquetes para abrir espaço à participação do público.",
    ],
  },
  {
    label: "Captar",
    icon: PanelsTopLeft,
    title: "Transformar interesse em uma próxima conversa.",
    text: "Landing pages e ações de pré-lançamento podem reunir a proposta do projeto, captar contatos e preparar o público. A IA pode apoiar a comunicação dentro dessa jornada.",
    entry: "Divulgação e interesse",
    channel: "Landing page",
    result: "Contato com o público",
    examples: [
      "Páginas para eventos, campanhas e lançamentos.",
      "Conteúdos explicativos para apresentar a proposta com clareza.",
      "Captação de contatos para dar continuidade ao relacionamento.",
    ],
  },
  {
    label: "Envolver",
    icon: Gamepad2,
    title: "Dar ao público um papel na experiência.",
    text: "Gamificação, conteúdo personalizado e experiências com IA são possibilidades para criar participação em torno do tema do evento ou da campanha.",
    entry: "Tema do projeto",
    channel: "Interação",
    result: "Participação do público",
    examples: [
      "Experiências interativas ligadas ao contexto do encontro.",
      "Gamificação como convite à participação.",
      "Conteúdos e explicativos adaptados à proposta e ao público.",
    ],
  },
  {
    label: "Automatizar",
    icon: Workflow,
    title: "Mais continuidade, menos tarefas repetidas.",
    text: "Automação de processos e interações pode conectar etapas do atendimento e da comunicação. O ponto de partida é entender o trabalho que hoje depende de acompanhamento manual.",
    entry: "Rotina do projeto",
    channel: "Fluxo digital",
    result: "Etapas organizadas",
    examples: [
      "Identificação das interações que se repetem na rotina.",
      "Organização do fluxo de comunicação antes e depois do evento.",
      "Combinação de IA e automação conforme a necessidade do negócio.",
    ],
  },
  {
    label: "Ouvir",
    icon: ClipboardList,
    title: "O fim do evento também traz aprendizados.",
    text: "Coleta de feedbacks e relatórios pós-evento para apoiar a preparação do próximo encontro.",
    entry: "Experiência do público",
    channel: "Feedbacks",
    result: "Próximos encontros",
    examples: [
      "Coleta de feedbacks sobre a experiência dos participantes.",
      "Relatórios pós-evento para apoiar a avaliação do encontro.",
      "Comunicação de pós-lançamento e relacionamento para próximos projetos.",
    ],
  },
];
const stages = [
  {
    title: "Antes",
    subtitle: "Preparar o encontro",
    text: "Planejamento, cronograma e fornecedores. Divulgação, landing pages e preparação do público.",
  },
  {
    title: "Durante",
    subtitle: "Fazer acontecer",
    text: "Montagem e operação no local. Atendimento, enquetes e possibilidades de interação com o público.",
  },
  {
    title: "Depois",
    subtitle: "Continuar a conversa",
    text: "Acompanhamento da desmontagem, feedbacks e relacionamento para orientar os próximos passos.",
  },
];
const discuss = (subject: string) =>
  `${contact.whatsapp}?text=${encodeURIComponent(`Olá, M&C! Gostaria de conversar sobre ${subject} para meu projeto.`)}`;

export function AISolutions() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = applications[active]!;
  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % applications.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + applications.length) % applications.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = applications.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="mc-extension" id="solucoes-ia">
      <section className="mcx-ai" aria-labelledby="mcx-ai-title">
        <div className="shell mcx-ai-layout">
          <Reveal className="mcx-ai-intro">
            <Eyebrow>IA aplicada a eventos e negócios</Eyebrow>
            <h2 id="mcx-ai-title">
              O que é possível
              <br />
              fazer <em>com IA?</em>
            </h2>
            <p>
              Do primeiro contato ao pós-evento, a IA pode apoiar o atendimento, o conteúdo e a
              interação com o público. Landing pages e automações conectam essas possibilidades à
              jornada do seu projeto.
            </p>
          </Reveal>
          <div className="mcx-ai-explorer">
            <div className="mcx-tabs" role="tablist" aria-label="Aplicações de IA em eventos">
              {applications.map((application, index) => {
                const Icon = application.icon;
                return (
                  <button
                    key={application.label}
                    ref={(element) => {
                      buttons.current[index] = element;
                    }}
                    id={`mcx-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    aria-controls="mcx-ai-panel"
                    tabIndex={active === index ? 0 : -1}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => navigateTabs(event, index)}
                  >
                    <Icon size={17} strokeWidth={1.4} />
                    {application.label}
                  </button>
                );
              })}
            </div>
            <div
              id="mcx-ai-panel"
              className="mcx-ai-panel"
              role="tabpanel"
              aria-labelledby={`mcx-tab-${active}`}
              tabIndex={0}
            >
              <h3>{selected.title}</h3>
              <p>{selected.text}</p>
              <ul className="mcx-ai-examples" aria-label="Possibilidades desta aplicação">
                {selected.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <div
                className="mcx-flow"
                aria-label={`${selected.entry}, ${selected.channel}, ${selected.result}`}
              >
                <span>{selected.entry}</span>
                <ArrowRight size={16} aria-hidden="true" />
                <span className="mcx-flow-channel">{selected.channel}</span>
                <ArrowRight size={16} aria-hidden="true" />
                <span>{selected.result}</span>
              </div>
              <a
                className="text-link mcx-ai-discuss"
                href={discuss(`IA para ${selected.label.toLowerCase()}`)}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre esta aplicação <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="shell mcx-ai-formats">
          <Reveal className="mcx-section-heading">
            <div>
              <Eyebrow>Soluções com IA para eventos e negócios</Eyebrow>
              <h2>
                Da ideia à <em>experiência.</em>
              </h2>
            </div>
            <p>
              Gamificação, conteúdos, lançamentos, páginas e automações: formatos que podem integrar
              a IA à jornada do seu público, conforme o objetivo do projeto.
            </p>
          </Reveal>
          <div className="mcx-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <a
                  className="mcx-solution"
                  key={solution.title}
                  href={discuss(solution.title.toLowerCase())}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Conversar com a M&C sobre ${solution.title}`}
                >
                  <Icon size={24} strokeWidth={1.35} aria-hidden="true" />
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <span className="mcx-solution-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CinthiaSection() {
  return (
    <div className="mc-extension" id="sobre-cinthia">
      <section className="mcx-person" aria-labelledby="mcx-person-title">
        <div className="shell mcx-person-layout">
          <div className="mcx-portrait">
            <img
              src="/images/cinthia-lenoch.png"
              width="1060"
              height="1484"
              loading="lazy"
              alt="Cinthia Lenoch, profissional de produção executiva de eventos"
            />
          </div>
          <Reveal className="mcx-person-copy">
            <Eyebrow>Nos bastidores · Cinthia Lenoch</Eyebrow>
            <h2 id="mcx-person-title">
              O cuidado que
              <br />
              faz tudo <em>acontecer.</em>
            </h2>
            <p>
              Cinthia atua na produção executiva: organiza demandas, acompanha fornecedores e
              coordena o evento no local.
            </p>
            <div className="mcx-career">
              <p>
                <strong>2011</strong>
                <span>Encontros de Educação Médica Continuada no CRM-PR.</span>
              </p>
              <p>
                <strong>2023</strong>
                <span>De Assistente de Eventos a Coordenadora de Produção, em Florianópolis.</span>
              </p>
            </div>
            <a className="text-link" href={contact.portfolio} target="_blank" rel="noreferrer">
              Conhecer o portfólio de Cinthia <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function EventExtension() {
  return (
    <div className="mc-extension" id="pessoas-e-solucoes">
      <section className="mcx-company" aria-labelledby="mcx-company-title">
        <div className="shell mcx-company-layout">
          <Reveal>
            <Eyebrow>A M&C</Eyebrow>
            <h2 id="mcx-company-title">
              Produção, estrutura
              <br />e <em>novas possibilidades.</em>
            </h2>
          </Reveal>
          <Reveal className="mcx-company-copy">
            <p>
              A M&C Eventos e Locações reúne produção, mobiliário e soluções em IA. Do planejamento
              à operação, conecta as necessidades do evento a uma experiência pensada para quem
              organiza e para quem participa.
            </p>
            <ul aria-label="Frentes de atuação da M&C">
              <li>Produção</li>
              <li>Mobiliário</li>
              <li>Inteligência Artificial</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mcx-journey" aria-labelledby="mcx-journey-title">
        <div className="shell">
          <Reveal className="mcx-section-heading">
            <div>
              <Eyebrow>Uma experiência completa</Eyebrow>
              <h2 id="mcx-journey-title">
                O evento vai além <em>do dia.</em>
              </h2>
            </div>
            <p>Produção e soluções digitais podem acompanhar cada etapa, conforme o projeto.</p>
          </Reveal>
          <ol className="mcx-stages">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <span className="mcx-stage-number">0{index + 1}</span>
                <h3>
                  {stage.title}
                  <span>{stage.subtitle}</span>
                </h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mcx-final" aria-labelledby="mcx-final-title">
        <div className="shell mcx-final-layout">
          <Reveal>
            <Eyebrow>Vamos pensar no seu projeto?</Eyebrow>
            <h2 id="mcx-final-title">
              Sua próxima ideia.
              <br />
              <em>Uma conversa para começar.</em>
            </h2>
            <p>
              Conte o objetivo, o público e o momento do seu projeto. A M&C conversa com você sobre
              uma solução personalizada.
            </p>
          </Reveal>
          <Action href={discuss("uma solução personalizada")}>Conversar com a M&C</Action>
        </div>
      </section>
    </div>
  );
}
