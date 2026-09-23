import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { contact, navigation } from "@/content/site";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function Action({
  children,
  href,
  outline = false,
}: {
  children: ReactNode;
  href: string;
  outline?: boolean;
}) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <a
      className={`action ${outline ? "action-outline" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      {!outline && <ArrowRight size={19} />}
    </a>
  );
}
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    if (node.getBoundingClientRect().top > innerHeight) {
      node.classList.add("reveal-pending");
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            node.classList.remove("reveal-pending");
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px -35px 0px", threshold: 0.05 },
      );
      observer.observe(node);
      return () => observer.disconnect();
    }
    return undefined;
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 35);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive("#" + e.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach(([, id]) => {
      if (!id.startsWith("#")) return;
      const section = document.querySelector(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <a className="brand" href="#inicio" aria-label="M&C Locação e Eventos, início">
          <img src="/images/logo-mc.png" width="300" height="60" alt="M&C Locação e Eventos" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} aria-current={active === href ? "location" : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-budget" href={contact.whatsapp} target="_blank" rel="noreferrer">
          Orçamento
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="menu-trigger" aria-label="Abrir menu" aria-expanded={open}>
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet" side="right">
            <SheetTitle className="sr-only">Menu M&C</SheetTitle>
            <SheetDescription className="sr-only">
              Navegue pelas seções e fale com a M&C.
            </SheetDescription>
            <img src="/images/logo-mc.png" width="210" height="42" alt="M&C Locação e Eventos" />
            <nav aria-label="Navegação móvel">
              {navigation.map(([label, href], i) => (
                <SheetClose asChild key={href}>
                  <a href={href}>
                    <span>0{i + 1}</span>
                    {label}
                    <ArrowRight size={20} />
                  </a>
                </SheetClose>
              ))}
            </nav>
            <Action href={contact.whatsapp}>Solicitar orçamento</Action>
            <p>Mobiliário · Locação · Eventos</p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
