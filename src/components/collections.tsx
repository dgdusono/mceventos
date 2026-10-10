import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Action, Eyebrow, Reveal } from "@/components/editorial";
import { contact, eventScenes } from "@/content/site";

export function EventGallery() {
  const [slide, setSlide] = useState(0);
  const scene = eventScenes[slide]!;
  return (
    <section id="eventos" className="event-section dark-section" aria-labelledby="event-title">
      <div className="shell event-layout">
        <Reveal className="event-intro">
          <Eyebrow>Em cena, a M&C</Eyebrow>
          <h2 id="event-title">
            Eventos que
            <br />
            aproximam pessoas
            <br />
            <em>e ideias.</em>
          </h2>
          <p>
            Conheça experiências em congressos e encontros e imagine as possibilidades para o seu
            evento.
          </p>
          <Action href={contact.whatsapp} outline>
            Planejar meu evento
          </Action>
        </Reveal>
        <div
          className="event-showcase"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Eventos realizados"
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
