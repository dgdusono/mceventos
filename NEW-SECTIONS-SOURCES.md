## Integração das soluções à IA

A área de IA agora vem imediatamente após Sobre a M&C. Gamificação, Explicativos, Pré-lançamento, Pós-lançamento, Landing pages e Automação integram essa mesma seção, sem bloco separado. Conteúdo e fontes mantidos; catálogo e imagens inalterados. Validação em 320, 390, 768 e 1440 px: ordem, seis cartões dentro da IA, abas, exemplos, teclado e ausência de transbordamento ou erros de execução. TypeScript, ESLint e build aprovados.

# Área adicional: Cinthia, M&C e soluções digitais

## Atualização de posição e conteúdo

Por novo pedido do usuário, Cinthia agora aparece imediatamente após as coleções de móveis e antes da seção original Sobre a M&C. As demais seções mantêm sua sequência. O bloco de IA foi ampliado para seis aplicações e 18 exemplos: atender, orientar, captar, envolver, automatizar e ouvir. As novas possibilidades seguem os exemplos fornecidos pelo usuário; o atendimento internacional vem do AI Experience Plan já registrado na fonte oficial. Não foram acrescentados cases ou resultados. Verificações atuais: `qa/reordered-report.json`.

O registro abaixo descreve a implementação inicial, anterior a essa mudança de posição.

Adição de 21/09/2026, autorizada pelo pedido do usuário e pela confirmação de que a nova área deve existir somente na página inicial, após o conteúdo atual. O componente é inserido no fim do `main`, antes do rodapé original. Nenhuma seção existente foi substituída ou reordenada.

## Fontes e limites de cada texto

| Nova área | Fonte | Tratamento |
| --- | --- | --- |
| Cinthia Lenoch | `Cinthia Lenoch WE.pdf` e `Cinthia Lenoch WA.pdf`, páginas 1, 4, 5, 8, 10 e 11 | Produção executiva, fornecedores, coordenação presencial, congressos e produção de estande. Marcos de 2011 no CRM-PR e 2023 em Florianópolis. Não se atribui fundação, propriedade ou cargo de direção na M&C. |
| Retrato | Imagem incorporada na página 1 do PDF WE | Arquivo PNG original copiado sem alteração para `public/images/cinthia-lenoch.png`. |
| M&C | Conteúdo do site oficial já verificado neste projeto | Produção, mobiliário e soluções em IA, conforme `CONTENT-SOURCES.md`. Sem números ou resultados acrescentados. |
| Gamificação, explicativos, pré e pós-lançamento, landing pages e automação | Exemplos expressamente fornecidos pelo usuário no pedido de 21/09/2026 | Apresentados como possibilidades para desenvolver sob medida, com escopo definido por projeto. Não são apresentados como cases concluídos ou capacidades comprovadas pelos PDFs. |
| IA: atender, orientar e ouvir | Seção de IA e AI Experience Plan do site oficial, registrados na pesquisa deste projeto | WhatsApp, concierge digital, programação, enquetes, feedbacks e relatórios pós-evento. Sem simulação de produto funcionando, integrações técnicas inventadas ou garantias de desempenho. |
| Antes, durante e depois | PDFs WE/WA, páginas 10 e 11; aplicações do site oficial; possibilidades do pedido do usuário | Produção, montagem e desmontagem contextualizadas com comunicação e soluções digitais. |
| Contato final | CTA oficial da M&C | Mesmo endereço de WhatsApp do restante do site, com mensagem editável. Nenhuma mensagem foi enviada. |

Os três PDFs foram relidos antes da implementação: WE e WA com 17 páginas cada e o catálogo de produtos com 11. Os PDFs pessoais não descrevem IA, gamificação, landing pages ou automação. Por isso, essas possibilidades não são atribuídas aos PDFs nem à trajetória comprovada de Cinthia. O nome publicado permanece **Cinthia Lenoch**, conforme os documentos.

## Preservação do site existente

- Única alteração em arquivo de código existente: importação e inclusão de `EventExtension` no final da home.
- Estilos adicionais inteiramente limitados ao seletor `.mc-extension`, em um novo arquivo.
- Header, menu, carrossel, catálogo, dados, 151 miniaturas, cores e estilos existentes permanecem sem alteração.
- `/catalogo` não recebe a nova área.
- Conteúdo, posições e dimensões de todas as seções originais comparados antes/depois em 390 e 1440 px: iguais.
- Capturas da primeira tela em 390 e 1440 px: arquivos idênticos.
- Nova área testada em 320, 390, 768, 1024 e 1440 px, e com texto a 200%, sem transbordamento horizontal.
- Abas de IA testadas com clique, setas e tecla Home. Links de contato conferidos sem envio de mensagens.
- TypeScript, ESLint dos arquivos alterados e build de produção verificados.

Relatório de navegador: `qa/new-sections-report.json`.
