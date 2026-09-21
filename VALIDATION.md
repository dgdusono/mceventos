# Validação da versão fiel ao PDF

Revisão de 20/09/2026 após o pedido de preservar literalmente os produtos e as imagens do documento.

- 163 entradas, na ordem original, incluindo a linha repetida. Nomes, categorias e informações transcritos sem correção editorial.
- 151 PNGs de 127 × 127 pixels comparados com os pixels decodificados pelo leitor PDFium: nenhuma divergência.
- 12 entradas sem foto exibidas apenas com “Sem imagem”, incluindo a repetição do documento.
- Em 320, 390, 768, 1024 e 1440 px: todas as imagens do catálogo e das cinco coleções da home continuam em 127 × 127 pixels, sem filtros, mistura com o fundo ou transparência; nenhum transbordamento horizontal.
- Nomes e ordem dos 163 cards conferidos no navegador contra a transcrição. Medidas e trechos incompletos preservados, incluindo `97X200`, `00x00x00cm` e `(120`.
- Detalhes e mensagem de orçamento usam o texto original. Navegação por teclado e retorno de foco conferidos.
- Nenhum erro de execução observado nos testes de navegador. TypeScript, ESLint dos arquivos alterados e build de produção aprovados.
- Conferência visual da Poltrona PETALA 1L BEGE: o tom esverdeado anterior foi eliminado; a imagem agora conserva a aparência decodificada do PDF.

As imagens e os produtos não foram gerados por IA. Os arquivos de imagem CMYK anteriores foram retirados dos assets do site. Os PNGs atuais são decodificações dos recursos do PDF, sem redimensionamento, retoque, alteração criativa de cores ou aumento de resolução.

A página possui uma apresentação própria e recursos de navegação; a informação dos produtos e suas fotografias são preservadas. A disponibilidade depende de consulta à empresa. Nenhuma mensagem foi enviada durante os testes.

Relatórios e proveniência: `qa/identical-browser-report.json` e `qa/pdf-identical-assets.json`. Fonte: `CONTENT-SOURCES.md`.
