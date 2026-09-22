# M&C Eventos e Locações

Site institucional e catálogo de mobiliário, sobre a base React + TypeScript + TanStack Start fornecida.

## Desenvolvimento

Requer Node.js 22+ e Bun.

```sh
bun install --frozen-lockfile
bun run dev --host 127.0.0.1 --port 5173
```

## Validação e build

```sh
bunx tsc --noEmit
bun run build
```

O build preserva o preset Cloudflare original e gera `.output/public` e `.output/server`. Esta entrega não publica nem modifica o site oficial.

## Catálogo conforme o PDF

`/catalogo` apresenta as **163 linhas originais, na ordem do PDF**, inclusive a repetição do tecido preto de até 6 metros. São 162 produtos distintos; nenhuma linha foi consolidada nesta versão.

Nomes, medidas, grafia, maiúsculas, unidades, categorias e trechos incompletos permanecem no texto original. Não há correção editorial, conversão de medidas, nomes comerciais inventados ou descrição técnica acrescentada. A mensagem de orçamento também inclui o texto original.

As **151 fotos** são decodificadas pelo leitor PDFium, com a aparência de cores do PDF, em **127 × 127 pixels**, e salvas em PNG. Não foram redimensionadas, aprimoradas, recoloridas nem geradas. O site as mostra em 127 × 127 pixels, sem filtros, transparência ou mistura com o fundo, inclusive no celular e nos detalhes. As cinco imagens das coleções da home usam os mesmos arquivos do catálogo.

As **12 linhas sem imagem**, contando a repetição original, exibem somente “Sem imagem”. Não há foto substituta. Busca, filtros e ordenação são recursos de navegação; por padrão, a sequência segue o PDF. A ordenação alfabética continua disponível quando selecionada pelo visitante.

O PDF pessoal permanece como portfólio complementar, separado do catálogo. Os CTAs comerciais direcionam ao WhatsApp e ao e-mail oficiais; não há comércio eletrônico nem estoque presumido.

## Estrutura

- `src/routes/index.tsx`: home institucional.
- `src/routes/catalogo.tsx`: catálogo, busca, categorias e detalhes.
- `src/content/catalog-products.json`: transcrição literal de cada linha e sua página.
- `src/content/site.ts`: contatos, serviços e links das cinco coleções.
- `src/components/collections.tsx`: coleções, ambientes e carrossel.
- `src/editorial.css`, `src/furniture.css`, `src/catalog.css`: composição e responsividade.
- `public/images/catalog-pdf`: miniaturas com as cores interpretadas pelo leitor de PDF.
- `public/images`: logo e fotos reais de ambientes.
- `public/fonts`: fontes locais.
- `public/portfolio-cinthia-lenoch.pdf`: portfólio complementar original.

Fontes: [CONTENT-SOURCES.md](CONTENT-SOURCES.md). Verificações: [VALIDATION.md](VALIDATION.md).

## Área adicional na página inicial

A apresentação de Cinthia aparece logo após as coleções de móveis, antes da seção original Sobre a M&C. Logo após Sobre a M&C aparece a área de IA: seis aplicações, 18 exemplos práticos e os seis formatos de soluções digitais reunidos na mesma seção. Ao final da home permanecem o resumo da empresa, as etapas do evento e o contato final. A área usa `src/components/event-extension.tsx` e `src/event-extension.css`; seus estilos são isolados em `.mc-extension`. A prévia de compartilhamento usa a logo original da M&C em `public/images/logo-mc.png`, sem criar uma marca nova. O catálogo e as seções anteriores permanecem intactos.

Fontes, limites das afirmações e verificações desta adição: [NEW-SECTIONS-SOURCES.md](NEW-SECTIONS-SOURCES.md).
