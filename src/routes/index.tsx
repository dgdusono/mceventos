import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Bot, Layers3, Instagram, MessageCircle } from "lucide-react";
import { Header, Reveal, Action, Eyebrow } from "@/components/editorial";
import { EventGallery } from "@/components/collections";
import { contact, navigation, services } from "@/content/site";
import { AISolutions, CinthiaSection, EventExtension } from "@/components/event-extension";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Cinthia Lenoch | Produção de eventos" },
      {
        name: "description",
        content:
          "Produção, coordenação e soluções para eventos com Cinthia Lenoch. Conheça o portfólio e solicite seu orçamento.",
      },
      {
        property: "og:title",
        content: "Cinthia Lenoch | Eventos que conectam pessoas",
      },
      {
        property: "og:description",
        content:
          "Produção, coordenação e soluções para o seu evento. Conheça o trabalho da Cinthia Lenoch.",
      },
      { property: "og:locale", content: "pt_BR" },
      {
        property: "og:image",
        content: "https://cinthialenoch.com.br/images/cinthia-lenoch.png",
      },
      { property: "og:image:width", content: "1060" },
      { property: "og:image:height", content: "1484" },
      {
        name: "twitter:image",
        content: "https://cinthialenoch.com.br/images/cinthia-lenoch.png",
      },
    ],
  }),
});
const serviceIcons = [ClipboardCheck, Layers3, Bot];

function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="hero furniture-hero">
          <img
            className="hero-environment"
            src="/images/ortofloripa.webp"
            width="1600"
            height="1200"
            fetchPriority="high"
            alt="Palco do Congresso Ortofloripa 2025"
          />
          <div className="hero-shade" />
          <div className="shell hero-content">
            <Eyebrow>Cinthia Lenoch · Produção de eventos</Eyebrow>
            <h1>
              Eventos que
              <br />
              conectam
              <br />
              <em>pessoas.</em>
            </h1>
            <p>
              Produção e coordenação de eventos, do planejamento à execução. Cuidado em cada detalhe
              para fazer tudo acontecer.
            </p>
            <div className="actions">
              <Action href={contact.whatsapp}>Solicitar orçamento</Action>
              <Action href={contact.portfolio} outline>
                Ver portfólio completo
              </Action>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre-cinthia">
            <span>
              Conheça
              <br />a produção
            </span>
            <span className="scroll-line" />
          </a>
          <span className="environment-caption">
            Evento em cena <span>Ortofloripa · 2025</span>
          </span>
        </section>

        <CinthiaSection />

        <section id="sobre" className="about-section dark-section">
          <div className="about-photo">
            <img
              src="/images/ortofloripa.webp"
              width="1600"
              height="1068"
              loading="lazy"
              alt="Palco do congresso Ortofloripa 2025"
            />
          </div>
          <Reveal className="about-copy">
            <Eyebrow>Sobre a Cinthia</Eyebrow>
            <h2>
              A produção organiza.
              <br />O cuidado <em>conecta.</em>
            </h2>
            <p>
              Cinthia Lenoch reúne produção, coordenação e soluções para eventos. Planejamento e uma
              operação que acompanham cada etapa, da primeira conversa à realização.
            </p>
            <div className="about-details">
              <div>
                <ClipboardCheck />
                <span>
                  <strong>Planejamento</strong>para cada etapa do evento
                </span>
              </div>
              <div>
                <Layers3 />
                <span>
                  <strong>Coordenação</strong>de equipes e fornecedores
                </span>
              </div>
              <div>
                <ClipboardCheck />
                <span>
                  <strong>Execução</strong>acompanhada de perto
                </span>
              </div>
            </div>
            <p className="signature">Seu evento, pensado em cada detalhe.</p>
          </Reveal>
        </section>

        <AISolutions />
        <EventGallery />

        <section id="servicos" className="services-section paper-section">
          <div className="shell services-layout">
            <Reveal className="services-intro">
              <Eyebrow>Soluções para eventos</Eyebrow>
              <h2>
                Do planejamento
                <br />à execução.
                <br />
                <em>Tudo se conecta.</em>
              </h2>
              <p>Produção, coordenação e soluções para acompanhar cada etapa do evento.</p>
              <Action href={contact.whatsapp}>Falar com a Cinthia</Action>
            </Reveal>
            <div className="service-grid">
              {services.map((service, i) => {
                const Icon = serviceIcons[i] ?? ClipboardCheck;
                return (
                  <Reveal className="service-card" key={service.title}>
                    <Icon size={24} strokeWidth={1.4} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio-band dark-section">
          <div className="shell">
            <Reveal>
              <Eyebrow>Portfólio</Eyebrow>
              <h2>
                Conheça outros <em>trabalhos.</em>
              </h2>
            </Reveal>
            <Action href={contact.portfolio} outline>
              Ver portfólio completo
            </Action>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <img
            src="/images/cosems.webp"
            width="1600"
            height="1200"
            loading="lazy"
            alt="Palco do Congresso COSEMS-SC de 2025"
          />
          <div className="contact-shade" />
          <div className="shell contact-layout">
            <Reveal>
              <Eyebrow>Vamos planejar seu evento?</Eyebrow>
              <h2>
                Cada detalhe conta.
                <br />
                Vamos planejar seu
                <br />
                <em>próximo encontro.</em>
              </h2>
              <p>
                Conte a data, o local e o que você imagina.
                <br />
                Vamos pensar na produção do seu evento.
              </p>
              <div className="actions">
                <Action href={contact.whatsapp}>Solicitar orçamento</Action>
              </div>
            </Reveal>
            <span className="contact-signature">
              Produção, cuidado
              <br />e bons encontros.
            </span>
          </div>
        </section>
        <EventExtension />
      </main>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-main">
            <a className="brand" href="#inicio" aria-label="Cinthia Lenoch, início">
              <img
                src="/images/logo-cinthia.svg"
                width="300"
                height="60"
                alt="Cinthia Lenoch, produção de eventos"
              />
            </a>
            <nav aria-label="Navegação do rodapé">
              {navigation.map(([label, href]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="footer-social">
              <p>Acompanhe nosso trabalho</p>
              <div>
                <a
                  href={contact.instagram}
                  aria-label="Instagram da Cinthia Lenoch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href={contact.whatsapp}
                  aria-label="WhatsApp da Cinthia Lenoch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle />
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                Fale com a Cinthia no WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Cinthia Lenoch.</p>
            <div className="footer-bottom-meta">
              <a href="/politica-de-privacidade/">Política de Privacidade</a>
              <p>Produção · Coordenação · Eventos</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
