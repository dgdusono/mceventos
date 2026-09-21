import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  Truck,
  Sofa,
  Bot,
  Layers3,
  Volume2,
  Instagram,
  Mail,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import { Header, Reveal, Action, Eyebrow } from "@/components/editorial";
import { Products, EventGallery, AmbientGallery } from "@/components/collections";
import { contact, navigation, services } from "@/content/site";
import { AISolutions, CinthiaSection, EventExtension } from "@/components/event-extension";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "M&C Eventos e Locações | Móveis e soluções para eventos" },
      {
        name: "description",
        content:
          "Móveis para locação, ambientes e soluções completas para eventos. Conheça sofás, poltronas, cadeiras, mesas, decoração e audiovisual da M&C. Solicite seu orçamento.",
      },
      {
        property: "og:title",
        content: "M&C Eventos e Locações | Móveis que transformam encontros",
      },
      {
        property: "og:description",
        content:
          "Mobiliário, produção e soluções para o seu evento. Explore o acervo e fale com a M&C.",
      },
      { property: "og:locale", content: "pt_BR" },
    ],
  }),
});
const serviceIcons = [Sofa, Truck, ClipboardCheck, Volume2, Layers3, Bot];

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
            src="/images/cobrafito.webp"
            width="1600"
            height="1200"
            fetchPriority="high"
            alt="Poltronas brancas e mesas de apoio em ambiente do Cobrafito 2025, apresentado pela M&C"
          />
          <div className="hero-shade" />
          <div className="shell hero-content">
            <Eyebrow>M&C Eventos e Locações</Eyebrow>
            <h1>
              Móveis que
              <br />
              transformam
              <br />
              <em>encontros.</em>
            </h1>
            <p>
              Locação de mobiliário, ambientes e soluções para eventos. Do primeiro detalhe à
              montagem completa.
            </p>
            <div className="actions">
              <Action href={contact.whatsapp}>Solicitar orçamento</Action>
              <Action href={contact.portfolio} outline>
                Ver portfólio completo
              </Action>
            </div>
            <a className="hero-collection-link" href={contact.catalog}>
              Explore nossos móveis <ArrowRight size={17} />
            </a>
          </div>
          <a className="scroll-cue" href="#moveis">
            <span>
              Conheça
              <br />o acervo
            </span>
            <span className="scroll-line" />
          </a>
          <span className="environment-caption">
            Mobiliário em cena <span>Cobrafito · 2025</span>
          </span>
        </section>

        <Products />
        <CinthiaSection />

        <section id="sobre" className="about-section dark-section">
          <div className="about-photo">
            <img
              src="/images/ortofloripa.webp"
              width="1600"
              height="1068"
              loading="lazy"
              alt="Poltronas brancas, palco e ambientação no Ortofloripa 2025"
            />
          </div>
          <Reveal className="about-copy">
            <Eyebrow>Sobre a M&C</Eyebrow>
            <h2>
              Os móveis compõem.
              <br />O cuidado <em>conecta.</em>
            </h2>
            <p>
              A M&C Eventos e Locações reúne mobiliário, produção e soluções para eventos. Peças
              versáteis, planejamento e uma operação que acompanha cada etapa, da escolha dos móveis
              à retirada.
            </p>
            <div className="about-details">
              <div>
                <Sofa />
                <span>
                  <strong>Mobiliário</strong>para diferentes ambientes
                </span>
              </div>
              <div>
                <Truck />
                <span>
                  <strong>Logística</strong>entrega e retirada organizadas
                </span>
              </div>
              <div>
                <ClipboardCheck />
                <span>
                  <strong>Montagem</strong>profissional e eficiente
                </span>
              </div>
            </div>
            <p className="signature">Seu evento, pensado em cada detalhe.</p>
          </Reveal>
        </section>

        <AISolutions />
        <AmbientGallery />
        <EventGallery />

        <section id="servicos" className="services-section paper-section">
          <div className="shell services-layout">
            <Reveal className="services-intro">
              <Eyebrow>Soluções para eventos</Eyebrow>
              <h2>
                Do mobiliário
                <br />à entrega.
                <br />
                <em>Tudo se conecta.</em>
              </h2>
              <p>
                Escolha as peças e conte com soluções que acompanham o seu evento, do planejamento à
                operação.
              </p>
              <Action href={contact.whatsapp}>Falar com a M&C</Action>
              <a className="text-link catalog-link" href={contact.catalog}>
                Ver catálogo completo <ArrowRight size={17} />
              </a>
            </Reveal>
            <div className="service-grid">
              {services.map((service, i) => {
                const Icon = serviceIcons[i] ?? Sofa;
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

        <section className="testimonials-section dark-section" aria-labelledby="recognition-title">
          <div className="shell testimonials-layout">
            <Reveal>
              <Eyebrow>Quem já esteve com a M&C</Eyebrow>
              <h2 id="recognition-title">
                O cuidado também
                <br />
                se vê no <em>resultado.</em>
              </h2>
            </Reveal>
            <div className="testimonial-grid">
              <blockquote>
                <img
                  src="/images/logo-cobrafito.svg"
                  width="110"
                  height="42"
                  loading="lazy"
                  alt="Cobrafito"
                />
                <p>“Nossa melhor venda de ingressos da história.”</p>
                <footer>
                  Diretor <span>@cobrafito</span>
                </footer>
              </blockquote>
              <blockquote>
                <img
                  src="/images/logo-cosems.png"
                  width="110"
                  height="42"
                  loading="lazy"
                  alt="COSEMS-SC"
                />
                <p>“Evento impecável, zero problemas.”</p>
                <footer>
                  Diretor <span>@cosemssc</span>
                </footer>
              </blockquote>
              <blockquote>
                <img
                  src="/images/logo-acors.png"
                  width="110"
                  height="42"
                  loading="lazy"
                  alt="ACORS"
                />
                <p>“A IA mudou nosso jogo.”</p>
                <footer>
                  Diretor <span>@associacaoacors</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio-band dark-section">
          <div className="shell">
            <Reveal>
              <Eyebrow>Mais trabalhos, em um só lugar</Eyebrow>
              <h2>
                Quer conhecer <em>mais?</em>
              </h2>
              <p>Explore o portfólio completo para conhecer outros trabalhos e informações.</p>
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
            alt="Mobiliário e estrutura de palco no Congresso COSEMS-SC de 2025"
          />
          <div className="contact-shade" />
          <div className="shell contact-layout">
            <Reveal>
              <Eyebrow>Vamos criar seu ambiente?</Eyebrow>
              <h2>
                Os móveis certos.
                <br />O cenário para o seu
                <br />
                <em>próximo encontro.</em>
              </h2>
              <p>
                Conte a data, o local e o que você imagina.
                <br />
                Vamos encontrar as peças para o seu evento.
              </p>
              <div className="actions">
                <Action href={contact.whatsapp}>Solicitar orçamento</Action>
                <a className="text-link" href={`mailto:${contact.email}`}>
                  Enviar e-mail <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>
            <span className="contact-signature">
              Móveis, ambientes
              <br />e bons encontros.
            </span>
          </div>
        </section>
        <EventExtension />
      </main>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-main">
            <a className="brand" href="#inicio" aria-label="M&C Eventos e Locações, início">
              <img src="/images/logo-mc.png" width="300" height="60" alt="M&C Locação e Eventos" />
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
                  aria-label="Instagram da M&C"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href={contact.linkedin}
                  aria-label="LinkedIn da M&C"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href={contact.whatsapp}
                  aria-label="WhatsApp da M&C"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle />
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <a href={`mailto:${contact.email}`}>
                <Mail size={15} />
                {contact.email}
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                Fale com a M&C no WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} M&C Eventos e Locações.</p>
            <p>Mobiliário · Locação · Produção de Eventos</p>
          </div>
        </div>
      </footer>
    </>
  );
}
