import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Action, Eyebrow, Reveal } from "@/components/editorial";
import { contact, productCollections, eventScenes } from "@/content/site";

const catalogCollections = [
  "sofas-poltronas",
  "cadeiras-banquetas",
  "mesas-aparadores",
  "decoracao",
];
export function Products() {
  return (
    <section id="moveis" className="products-section paper-section">
      <div className="shell">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>Nosso acervo · Móveis & locações</Eyebrow>
            <h2>
              Peças que dão vida
              <br className="mobile-break" /> <em>ao seu evento.</em>
            </h2>
          </div>
          <a className="text-link" href={contact.catalog}>
            Explorar catálogo completo <ArrowRight size={18} />
          </a>
        </Reveal>
        <div className="collection-grid">
          {productCollections.map((collection, i) => (
            <a
              key={collection.title}
              className="collection-card"
              href={`${contact.catalog}?categoria=${catalogCollections[i]}`}
              aria-label={`Explorar catálogo de ${collection.title.toLowerCase()}`}
            >
              <span className="collection-number">0{i + 1}</span>
              <div className="collection-object">
                <img
                  src={`/images/catalog-pdf/${collection.image}`}
                  alt=""
                  width="127"
                  height="127"
                  loading="lazy"
                />
              </div>
              <div className="collection-copy">
                <h3>{collection.title}</h3>
                <span>
                  Explorar modelos <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="collection-footnote">
          <p>Mobiliário e complementos para diferentes composições.</p>
          <a href={contact.whatsapp} className="text-link" target="_blank" rel="noreferrer">
            Vamos escolher suas peças? <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

const atmospheres = [
  {
    image: "ortofloripa-ambiente",
    title: "Mobiliário em harmonia.",
    detail: "Poltronas e ambientação · Ortofloripa 2025",
    alt: "Composição de poltronas brancas, mesas de apoio e plantas no Ortofloripa 2025",
  },
  {
    image: "cobrafito",
    title: "Os detalhes fazem parte.",
    detail: "Mesas de apoio e poltronas · Cobrafito 2025",
    alt: "Mesas de apoio e poltronas brancas no palco do Cobrafito 2025",
  },
  {
    image: "cosems",
    title: "Espaço para se encontrar.",
    detail: "Estrutura e mobiliário · COSEMS-SC 2025",
    alt: "Mobiliário e estrutura de palco no Congresso COSEMS-SC 2025",
  },
];
export function AmbientGallery() {
  return (
    <section id="ambientes" className="ambient-section paper-section">
      <div className="shell">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>Ambientes & composições</Eyebrow>
            <h2>
              Da peça ao cenário.
              <br />
              <em>Uma nova perspectiva.</em>
            </h2>
          </div>
          <p>Móveis, detalhes e estruturas que se encontram em ambientes reais.</p>
        </Reveal>
        <div className="ambient-grid">
          {atmospheres.map((scene, i) => (
            <Dialog key={scene.title}>
              <DialogTrigger asChild>
                <button
                  className={`ambient-photo ambient-photo-${i + 1}`}
                  aria-label={`Ampliar: ${scene.detail}`}
                >
                  <img
                    src={`/images/${scene.image}.webp`}
                    width="1600"
                    height="1200"
                    loading="lazy"
                    alt={scene.alt}
                  />
                  <span className="ambient-overlay" />
                  <span className="ambient-expand">
                    <Expand size={18} />
                  </span>
                  <span className="ambient-caption">
                    <strong>{scene.title}</strong>
                    <span>{scene.detail}</span>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="ambient-dialog">
                <DialogHeader className="sr-only">
                  <DialogTitle>{scene.title}</DialogTitle>
                  <DialogDescription>{scene.detail}</DialogDescription>
                </DialogHeader>
                <img src={`/images/${scene.image}.webp`} alt={scene.alt} />
                <p>{scene.detail}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventGallery() {
  const [slide, setSlide] = useState(0);
  const scene = eventScenes[slide]!;
  return (
    <section id="eventos" className="event-section dark-section" aria-labelledby="event-title">
      <div className="shell event-layout">
        <Reveal className="event-intro">
          <Eyebrow>Em cena, a M&C</Eyebrow>
          <h2 id="event-title">
            Móveis que
            <br />
            fazem parte de
            <br />
            <em>grandes encontros.</em>
          </h2>
          <p>
            Conheça ambientes de eventos apresentados pela M&C e imagine as possibilidades para o
            seu.
          </p>
          <Action href={contact.whatsapp} outline>
            Planejar meu ambiente
          </Action>
        </Reveal>
        <div
          className="event-showcase"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Ambientes em eventos"
        >
          <div className="event-showcase-photo">
            <img
              key={scene.image}
              src={`/images/${scene.image}.webp`}
              width="1600"
              height="1200"
              loading="lazy"
              alt={scene.alt}
            />
            <span>{scene.name}</span>
          </div>
          <div className="event-description">
            <div aria-live="polite" aria-atomic="true">
              <span className="event-label">{scene.label}</span>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </div>
            <div className="gallery-controls">
              <button
                onClick={() => setSlide((s) => (s + eventScenes.length - 1) % eventScenes.length)}
                aria-label="Evento anterior"
              >
                <ArrowLeft size={20} />
              </button>
              <span>
                {slide + 1} <span>/ {eventScenes.length}</span>
              </span>
              <button
                onClick={() => setSlide((s) => (s + 1) % eventScenes.length)}
                aria-label="Próximo evento"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
