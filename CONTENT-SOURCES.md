# Conteúdo e procedência dos arquivos

Revisão de 20/09/2026. A direção atual é **M&C, mobiliário e locações**. O pedido de revisão substitui a orientação anterior de destacar a trajetória pessoal.

Adição autorizada em 21/09/2026: o conteúdo original permanece intacto, e uma área complementar sobre Cinthia, M&C e soluções digitais foi acrescentada somente ao final da home. As fontes e os limites desta nova área estão em [NEW-SECTIONS-SOURCES.md](NEW-SECTIONS-SOURCES.md).

## Fontes de verdade

- Site oficial: https://www.mceventoselocacoes.com.br/
- Catálogo divulgado pelo site: https://www.mceventoselocacoes.com.br/assets/lista_de_produtos-DtOjPgsG.pdf
- O arquivo `lista_de_produtos-DtOjPgsG.pdf` enviado pelo usuário foi comparado byte a byte por SHA-256 com a fonte extraída: ambos têm hash `7f2b8e261908a2ccd5fd373781fac69598d5780a3f19ee337a34aa3ec20cc442`. Ele é a fonte exclusiva dos produtos; nenhum modelo foi criado ou acrescentado de outra fonte.
- PDF complementar fornecido pelo usuário: `Cinthia Lenoch WE.pdf`, copiado sem alterações para `public/portfolio-cinthia-lenoch.pdf`. Só é aberto por links; a home não reproduz biografia nem trabalhos pessoais.
- Referência visual fornecida: composição editorial, serifas, fundos escuros e claros, imagens amplas e CTAs discretos. Nenhum texto, nome, logo ou fotografia da outra marca foi usado.

## Acervo fiel ao PDF enviado

A fonte exclusiva dos produtos é `lista_de_produtos-DtOjPgsG.pdf`, enviado pelo usuário, com 11 páginas e hash SHA-256 `7f2b8e261908a2ccd5fd373781fac69598d5780a3f19ee337a34aa3ec20cc442`.

A página `/catalogo` mantém as **163 linhas em 19 categorias**, na ordem original. A repetição de “Tecido PRETO (fechamento altura de até 6 metros)” permanece. Não foi criado nenhum produto. A contagem de produtos distintos é 162, mas a interface apresenta todas as 163 entradas do documento.

`sourceName` e `name` preservam literalmente o texto da linha, incluindo medidas, grafia e trechos incompletos. São mantidos `97X200`, `00x00x00cm`, o trecho `(120` da tela, a notação original das TVs e todas as demais informações. Medidas não são reorganizadas, completadas ou interpretadas. Os rótulos das 19 categorias também mantêm a grafia original. Aliases no mecanismo de busca permitem consultas no plural sem alterar os nomes exibidos.

As fotos são associadas às respectivas linhas pela posição na página. O leitor PDFium decodifica as imagens no tamanho nativo, respeitando a interpretação de cores do PDF. Os PNGs RGB de 127 × 127 pixels não recebem redimensionamento nem edição visual. A verificação compara os pixels de cada arquivo publicado com a imagem decodificada do PDF. Não foi usado gerador de imagens.

Há 151 fotos e 12 entradas sem foto, incluindo a repetição original. As ausências são mostradas apenas como texto “Sem imagem”. Os arquivos CMYK extraídos anteriormente foram removidos dos assets do site, evitando a alteração de cores causada pela interpretação direta desses arquivos no navegador. Também foram removidos os efeitos CSS de mistura da imagem com o fundo dos cards. As cinco coleções da home reutilizam as miniaturas corretas do catálogo.

As chamadas de orçamento, busca e filtros pertencem à interface do site e não acrescentam características aos produtos. Quantidades da lista de separação não são apresentadas como estoque ou disponibilidade. O PDF pessoal de Cinthia continua separado, como portfólio complementar.

## Fotografias dos ambientes

Todos os ambientes vieram do site oficial e foram convertidos para WebP sem alterar seu conteúdo.

| Arquivo local | URL original |
| --- | --- |
| `cobrafito.webp` | https://www.mceventoselocacoes.com.br/assets/00b931fa2b67c94ee3bddbdb75805f84fc3abafa-BoLu_d4s.jpg |
| `ortofloripa.webp` | https://www.mceventoselocacoes.com.br/assets/6069e86a8d2c87194d9cf6c3066a866fdf13653f-DCdBW07g.jpg |
| `ortofloripa-ambiente.webp` | https://www.mceventoselocacoes.com.br/assets/horto-l77bgu3W.png |
| `cosems.webp` | https://www.mceventoselocacoes.com.br/assets/dbef4ae5dc40ccf4d0f0690e84b1d5b271a937bd-Brt_-dW2.jpg |

A imagem cujo nome original contém “horto” mostra Ortofloripa 2025; não foi inventado um case “Espaço Horto”. As legendas descrevem os ambientes mostrados, sem atribuir à M&C a organização integral ou a autoria de cada elemento da cena. Os enquadramentos responsivos usam CSS e `object-fit`, sem deformação.

## Marca, serviços e contatos

- Logo original: https://www.mceventoselocacoes.com.br/assets/logo-footer-DhWqlb63.png — mantido sem redesenho ou alteração de proporção.
- Serviços publicados: mobiliário, logística/montagem, produção completa e IA para eventos. Estrutura e ambientação também constam no catálogo.
- WhatsApp preservado exatamente dos CTAs oficiais: https://wa.me/554892219278
- E-mail: mec.eventos@outlook.com
- Instagram: https://www.instagram.com/mclocacaoeventos/
- LinkedIn: https://www.linkedin.com/company/mc-eventos

O telefone escrito no módulo de privacidade do site oficial diverge do endereço dos CTAs de WhatsApp. A revisão preserva o link oficial e não infere um novo número. Não foi publicado endereço físico sem confirmação.

## Reconhecimento

As três frases e as logos COBRAFITO, COSEMS-SC e ACORS são as publicadas no site oficial. As atribuições continuam “Diretor” e os identificadores originais. Duplicatas foram removidas. Nenhuma pessoa foi nomeada, nenhum depoimento foi criado e as organizações não foram apresentadas como patrocinadoras.

Não foram copiados números institucionais sem metodologia, escassez vencida de 2025 nem a fotografia do Unsplash presente no site original. Também não foram criados dados de vendas, estoque, clientes ou experiência.
