import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  X,
  ChevronDown,
  SlidersHorizontal,
  Plus,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Action, Eyebrow } from "@/components/editorial";
import { contact } from "@/content/site";
import productsData from "@/content/catalog-products.json";

interface Product {
  id: string;
  name: string;
  sourceName: string;
  category: string;
  image: string | null;
  sourcePage: number;
  sourceRow: number;
}
const products: Product[] = productsData;
const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const slug = (text: string) =>
  normalize(text)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const categorySearchAliases: Record<string, string> = {
  Aparador: "Aparadores",
  Banqueta: "Banquetas",
  Cachepot: "Cachepots",
  Cadeira: "Cadeiras",
  Chaise: "Chaises",
  Diversos: "Complementos",
  Estúdios: "Estruturas de apoio",
  Floral: "Arranjos florais",
  Lustre: "Lustres",
  Mesa: "Mesas",
  Planta: "Plantas",
  Poltrona: "Poltronas",
  Puf: "Puffs",
  Sofá: "Sofás",
  "Som, Imagem e Iluminação": "Som, imagem e iluminação",
  Tapete: "Tapetes",
  Tecidos: "Tecidos",
  Toalha: "Toalhas",
  Vaso: "Vasos e suportes",
};
const categories = [...new Set(products.map((p) => p.category))].map((name) => ({
  name,
  label: name,
  id: slug(name),
  count: products.filter((p) => p.category === name).length,
}));
const orderedProducts = products;
const collectionSets: Record<string, { label: string; names: string[] }> = {
  "sofas-poltronas": { label: "Sofás e poltronas", names: ["Sofá", "Poltrona", "Chaise", "Puf"] },
  "cadeiras-banquetas": { label: "Cadeiras e banquetas", names: ["Cadeira", "Banqueta"] },
  "mesas-aparadores": { label: "Mesas e aparadores", names: ["Mesa", "Aparador"] },
  decoracao: {
    label: "Decoração",
    names: ["Cachepot", "Floral", "Lustre", "Planta", "Tapete", "Tecidos", "Toalha", "Vaso"],
  },
  "estrutura-audiovisual": {
    label: "Estrutura e audiovisual",
    names: ["Diversos", "Estúdios", "Som, Imagem e Iluminação"],
  },
};

export const Route = createFileRoute("/catalogo")({
  component: Catalog,
  validateSearch: (search: Record<string, unknown>) => ({
    categoria:
      typeof search["categoria"] === "string" &&
      (categories.some((c) => c.id === search["categoria"]) ||
        Object.hasOwn(collectionSets, search["categoria"]))
        ? search["categoria"]
        : "todos",
    busca: typeof search["busca"] === "string" ? search["busca"].slice(0, 100) : "",
  }),
  head: () => ({
    meta: [
      { title: "Catálogo de móveis e locações | M&C Eventos" },
      {
        name: "description",
        content:
          "Explore o acervo M&C: sofás, poltronas, cadeiras, mesas, decoração e estrutura para eventos. Consulte modelos, medidas e solicite seu orçamento.",
      },
      { property: "og:title", content: "O acervo M&C | Móveis e locações para o seu evento" },
      {
        property: "og:description",
        content:
          "Encontre as peças para o seu próximo encontro. Catálogo de mobiliário, decoração e soluções para eventos.",
      },
    ],
  }),
});

function ProductPhoto({ product }: { product: Product }) {
  return product.image ? (
    <img
      src={`/images/catalog-pdf/${product.image}`}
      width="127"
      height="127"
      loading="lazy"
      alt={product.name}
    />
  ) : (
    <span className="catalog-missing-photo">
      <span>Sem imagem</span>
    </span>
  );
}
function ProductCard({ product }: { product: Product }) {
  const quote = `${contact.whatsapp}?text=${encodeURIComponent(`Olá, M&C! Tenho interesse neste item do catálogo: ${product.sourceName} (página ${product.sourcePage}). Gostaria de consultar disponibilidade e orçamento para meu evento.`)}`;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="catalog-product" aria-label={`Ver detalhes: ${product.sourceName}`}>
          <span className="catalog-product-type">{product.category}</span>
          <span className="catalog-product-photo">
            <ProductPhoto product={product} />
          </span>
          <span className="catalog-product-info">
            <strong>{product.sourceName}</strong>
          </span>
          <span className="catalog-product-plus" aria-hidden="true">
            <Plus size={17} />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="catalog-detail">
        <div className="catalog-detail-photo">
          <ProductPhoto product={product} />
        </div>
        <div className="catalog-detail-copy">
          <DialogHeader>
            <Eyebrow>{product.category}</Eyebrow>
            <DialogTitle>{product.sourceName}</DialogTitle>
            <DialogDescription>Página {product.sourcePage} do catálogo original.</DialogDescription>
          </DialogHeader>
          <p className="catalog-detail-note">
            Conte a data e o local do evento para consultar a disponibilidade e receber uma
            proposta.
          </p>
          <Action href={quote}>Solicitar orçamento deste item</Action>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Catalog() {
  const { categoria, busca } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [limit, setLimit] = useState(24);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterToggle = useRef<HTMLButtonElement>(null);
  const [sort, setSort] = useState("acervo");
  const currentCategory = categories.find((c) => c.id === categoria);
  const currentCollection = collectionSets[categoria];
  const filtered = useMemo(() => {
    const query = normalize(busca.trim());
    const result = orderedProducts.filter(
      (p) =>
        (currentCategory
          ? p.category === currentCategory.name
          : currentCollection
            ? currentCollection.names.includes(p.category)
            : true) &&
        (!query ||
          normalize(
            `${p.sourceName} ${p.category} ${categorySearchAliases[p.category] ?? ""}`,
          ).includes(query)),
    );
    if (sort === "az") result.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    return result;
  }, [busca, currentCategory, currentCollection, sort]);
  useEffect(() => setLimit(24), [busca, categoria, sort]);
  function chooseCategory(value: string) {
    void navigate({ search: { categoria: value, busca }, replace: true, resetScroll: false });
    if (filtersOpen) filterToggle.current?.focus();
    setFiltersOpen(false);
  }
  function clearFilters() {
    void navigate({ search: { categoria: "todos", busca: "" }, replace: true, resetScroll: false });
    setSort("acervo");
  }
  return (
    <div className="catalog-page">
      <a className="skip-link" href="#catalogo-conteudo">
        Pular para o catálogo
      </a>
      <header className="catalog-header">
        <div className="catalog-shell">
          <Link className="brand" to="/" aria-label="M&C Eventos e Locações, início">
            <img src="/images/logo-mc.png" width="300" height="60" alt="M&C Locação e Eventos" />
          </Link>
          <nav aria-label="Navegação do catálogo">
            <Link to="/">Início</Link>
            <a href="#catalogo-conteudo" aria-current="page">
              Nosso acervo
            </a>
            <a href="/#sobre">A M&C</a>
          </nav>
          <Action href={contact.whatsapp} outline>
            Solicitar orçamento
          </Action>
        </div>
      </header>
      <main id="catalogo-conteudo">
        <section className="catalog-intro">
          <div className="catalog-shell">
            <div>
              <Link to="/" className="catalog-back">
                <ArrowLeft size={15} /> Voltar ao site
              </Link>
              <Eyebrow>M&C · Mobiliário & locações</Eyebrow>
              <h1>
                O seu evento.
                <br />
                <em>As peças certas.</em>
              </h1>
              <p>
                Explore os modelos, encontre sua composição
                <br className="desktop-break" /> e converse com a M&C.
              </p>
            </div>
            <div className="catalog-intro-scene">
              <img
                src="/images/ortofloripa-ambiente.webp"
                width="699"
                height="880"
                alt="Mobiliário e ambientação de evento apresentado pela M&C"
              />
              <span>
                Móveis que se encontram.
                <br />
                <em>Ambientes que acolhem.</em>
              </span>
            </div>
          </div>
        </section>
        <section className="catalog-browser catalog-shell" aria-label="Catálogo de produtos">
          <div className="catalog-toolbar">
            <label className="catalog-search">
              <Search size={20} />
              <span className="sr-only">Buscar no catálogo</span>
              <input
                type="search"
                placeholder="Busque por móvel, modelo ou acabamento"
                value={busca}
                onChange={(e) =>
                  void navigate({
                    search: { categoria, busca: e.target.value },
                    replace: true,
                    resetScroll: false,
                  })
                }
                autoComplete="off"
              />
              {busca && (
                <button
                  type="button"
                  onClick={() =>
                    void navigate({
                      search: { categoria, busca: "" },
                      replace: true,
                      resetScroll: false,
                    })
                  }
                  aria-label="Limpar busca"
                >
                  <X size={18} />
                </button>
              )}
            </label>
            <button
              ref={filterToggle}
              className="catalog-filter-toggle"
              aria-expanded={filtersOpen}
              aria-controls="catalog-categories"
              onClick={() => setFiltersOpen((v) => !v)}
            >
              <SlidersHorizontal size={18} /> Categorias <ChevronDown size={16} />
            </button>
            <label className="catalog-sort">
              <span>Ordenar</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Ordenar produtos"
              >
                <option value="acervo">Ordem do PDF</option>
                <option value="az">Nome: A a Z</option>
              </select>
              <ChevronDown size={15} />
            </label>
          </div>
          <div className="catalog-layout">
            <aside
              id="catalog-categories"
              className={`catalog-categories ${filtersOpen ? "filters-open" : ""}`}
            >
              <p className="catalog-sidebar-label">Explore o acervo</p>
              <nav aria-label="Categorias de produtos">
                <button
                  className={categoria === "todos" ? "selected" : ""}
                  onClick={() => chooseCategory("todos")}
                  aria-pressed={categoria === "todos"}
                >
                  <span>Todos os itens</span>
                  <span>{products.length}</span>
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={categoria === category.id ? "selected" : ""}
                    onClick={() => chooseCategory(category.id)}
                    aria-pressed={categoria === category.id}
                  >
                    <span>{category.label}</span>
                    <span>{category.count}</span>
                  </button>
                ))}
              </nav>
              <div className="catalog-help">
                <p>
                  Vamos compor
                  <br />
                  <em>seu ambiente?</em>
                </p>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                  Fale com a M&C <ArrowRight size={16} />
                </a>
              </div>
            </aside>
            <div className="catalog-results">
              <div className="catalog-results-heading">
                <div>
                  <h2>{currentCategory?.label ?? currentCollection?.label ?? "Nosso acervo"}</h2>
                  <p role="status" aria-live="polite">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "item encontrado" : "itens encontrados"}
                    {busca ? ` para “${busca}”` : ""}
                  </p>
                </div>
                {(busca || categoria !== "todos") && (
                  <button className="catalog-clear" onClick={clearFilters}>
                    Limpar filtros <X size={15} />
                  </button>
                )}
              </div>
              {filtered.length ? (
                <>
                  <div className="catalog-product-grid">
                    {filtered.slice(0, limit).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  <div className="catalog-pagination">
                    <p>
                      Você viu {Math.min(limit, filtered.length)} de {filtered.length} itens
                    </p>
                    {limit < filtered.length && (
                      <button
                        className="action catalog-load-more"
                        onClick={() => setLimit((v) => v + 24)}
                      >
                        Ver mais modelos <Plus size={17} />
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="catalog-empty">
                  <Search size={30} strokeWidth={1} />
                  <h3>Vamos procurar de outro jeito?</h3>
                  <p>Tente o nome de uma peça ou escolha outra categoria.</p>
                  <button className="action" onClick={clearFilters}>
                    Ver todo o acervo <ArrowRight size={17} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="catalog-contact">
          <div className="catalog-shell">
            <div>
              <Eyebrow>Da escolha à montagem</Eyebrow>
              <h2>
                Encontrou suas peças?
                <br />
                <em>Vamos criar seu evento.</em>
              </h2>
            </div>
            <div>
              <p>
                Conte o que você precisa, a data e o local.
                <br />A M&C prepara uma proposta para você.
              </p>
              <Action href={contact.whatsapp}>Solicitar orçamento</Action>
            </div>
          </div>
        </section>
      </main>
      <footer className="catalog-footer">
        <div className="catalog-shell">
          <Link className="brand" to="/" aria-label="Voltar à M&C">
            <img src="/images/logo-mc.png" width="300" height="60" alt="M&C Locação e Eventos" />
          </Link>
          <p>Mobiliário · Locação · Eventos</p>
          <a href={`mailto:${contact.email}`}>
            <Mail size={15} />
            {contact.email}
          </a>
          <Link to="/">
            Voltar ao site <ArrowRight size={16} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
