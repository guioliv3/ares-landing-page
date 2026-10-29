# ARES Aquarius — direção visual

## Identidade e intenção

Landing page imobiliária de conversão, em português brasileiro. O visitante deve entender que ARES Aquarius é um empreendimento residencial e conseguir solicitar informações pelo formulário. A composição e a fotografia de referência fornecidas pelo usuário são a autoridade visual desta página: arquitetura noturna, tecido de revelação, verde petróleo quase preto, sage e branco quente. Preservar essa direção com fidelidade; não substituir por uma estética imobiliária genérica.

**Ideia visual:** a fachada coberta pelo tecido é o gesto de revelação que abre a página; o tecido e suas curvas reaparecem como transição suave entre capítulos, sem ornamentos acrescentados.

## Tokens

Valores iniciais para implementação; ajustar contraste em contexto e manter os papéis consistentes.

| Token | Valor | Uso |
|---|---|---|
| `--ares-ink` | `#07131A` | Fundo hero, seções escuras e rodapé |
| `--ares-petrol` | `#102A2B` | Faixas e painéis escuros secundários |
| `--ares-sage` | `#98AA9D` | Painel de conversão, acentos e detalhes funcionais |
| `--ares-sage-deep` | `#63796D` | Hover e ênfase em fundo claro |
| `--ares-paper` | `#F3F1EA` | Plantas, superfícies claras e fundo dos campos |
| `--ares-white` | `#FCFBF7` | Texto principal em fundo escuro |
| `--ares-muted` | `#C3CBC5` | Texto secundário em fundo escuro; conferir contraste |
| `--ares-metal` | `#B99A77` | Pequeno acento quente, presente na luz/render da fachada |

Não usar gradientes, glow, vidro fosco ou sombra decorativa. Diferenciar seções por campos inteiros de cor, fotografia e escala. Texto corrente deve manter contraste legível; não usar sage claro ou cinza fraco como texto pequeno sobre o fundo escuro.

## Tipografia

Uma família sans-serif geométrica e contemporânea, de preferência Manrope (com fallback sans-serif), para títulos, corpo, navegação e formulários. O wordmark exibido no hero integra a fotografia. O logo vetorial usado em navegação/rodapé é uma reconstrução SVG provisória, traçada pelo responsável a partir da geometria de referência fornecida pelo usuário; substituir pelo vetor oficial quando disponível. Títulos com peso regular ou médio e espaçamento ligeiramente fechado; corpo com peso regular e entrelinha confortável. Evitar tracking exagerado em caixa alta e fontes decorativas. Garantir carregamento local/estável ou fallback visual equivalente.

## Composição e sequência

1. **Hero / apresentação.** Imagem da torre coberta à noite ocupa o campo dominante. Navegação discreta no topo (marca, âncoras essenciais e ação de contato). Copy e formulário à esquerda: “RESPIRE NOVOS ARES.”, identificação de ARES Aquarius em Jardim Aquarius, São José dos Campos, e ação de interesse. Diferenciais com ícones lineares simples em coluna à direita, alinhados abaixo do wordmark aplicado no tecido; não cobrir a marca da fotografia. Usar scrim escuro sob texto apenas para contraste.
2. **Faixa de especificações.** Faixa contrastante sage ou clara, com terminação ondulada inspirada no drapeado do tecido. Organizar em uma linha arejada os dados fornecidos na referência: 3 dormitórios (1 suíte), 102 a 106 m² e 2 vagas. O contorno ondulado é uma transição de seção, não um conjunto de formas decorativas.
3. **Lazer.** Título em campo escuro, imagem ampla da piscina e cinco miniaturas selecionáveis em faixa horizontal sob a imagem, vindas dos renders fornecidos. A miniatura ativa deve ter estado visual claro e acessível por teclado. Em telefone, imagem em largura total e miniaturas em trilho horizontal rolável.
4. **Plantas.** Campo `--ares-paper`; título e apoio à esquerda, duas plantas humanizadas lado a lado à direita, identificadas como “Planta A” e “Planta B”. Mostrar imagem em tamanho suficiente para leitura e oferecer ampliação/visualização sem esconder o conteúdo no mobile; no telefone, título vem antes das duas plantas em coluna.
5. **Região e tour 360°.** Panorama amplo para localização/entorno em Jardim Aquarius e chamada para tour 360°. Não atribuir ao Aquarius panoramas ou vistas que não tenham validação do empreendimento. Como não há endpoint/Panoee fornecido, preparar o destino do tour como configuração por URL e ocultar/desativar a chamada enquanto não houver link real; nunca simular uma visita concluída.
6. **Pontos de interesse.** Lista editorial pareada a mapa ou imagem, com os pontos citados na referência: Colinas Shopping, Pão de Açúcar, Parque Ribeirão Vermelho e Av. Cassiano Ricardo. Não adicionar tempos/distâncias sem fonte.
7. **Mapa e contato.** Mapa junto a painel sage de contato, com Jardim Aquarius, São José dos Campos. A posição exata do empreendimento, pin e rotas devem usar endereço/coordenadas confirmados; até então, manter mapa/endereço configuráveis e não posicionar um pin fictício.
8. **Formulário final e rodapé.** Repetir CTA com formulário curto e mesma linguagem visual do hero. Rodapé escuro, nome ARES Aquarius em destaque e links institucionais/legais somente quando fornecidos.

Cada seção deve ter título próprio e composição distinta. Usar uma grelha comum e margens externas iguais. Ritmo amplo entre capítulos; componentes internos compactos e alinhados. Evitar grades de cartões uniformes. Cantos predominantemente retos, alinhados ao caráter arquitetônico; controles devem continuar fáceis de tocar.

## Responsividade

- Desktop: manter a fachada como imagem dominante; copy/form e diferenciais distribuem-se em colunas sem comprimir o título nem cobrir o wordmark do tecido.
- Tablet: reduzir a navegação a links essenciais e reorganizar conteúdo em duas colunas quando houver espaço real; preservar imagem e leitura dos títulos.
- Telefone: menu compacto acessível; hero em composição vertical, com imagem/crop que preserve a torre identificável e o título/form claramente legíveis. Diferenciais fluem abaixo do formulário em lista, não em minúsculos ícones. Estatísticas podem virar linha rolável ou lista curta; thumbs do lazer rolam horizontalmente. Plantas têm leitura e zoom próprios. Painéis e campos ocupam a largura disponível com alvo de toque confortável.
- Evitar overflow horizontal e conteúdo dependente de hover. Estados de foco visíveis, labels persistentes nos campos e mensagens de validação claras.

## Interação e movimento

Formulários priorizam poucos campos, labels visíveis e validação acessível. Não há endpoint informado: manter o envio preparado para configuração, sem exibir confirmação de sucesso falsa; esclarecer indisponibilidade de envio até integração. Navegação salta para as seções. Galeria de lazer seleciona imagem por clique, toque e teclado, com estado anunciado. Tour deve aceitar URL configurável e só abrir quando receber link real. Mapa e telefone/email devem usar destinos reais. Movimento discreto pode sugerir a revelação/drapeado apenas se não atrasar leitura, com alternativa `prefers-reduced-motion` e conteúdo visível sem JavaScript.

## Notas para revisão visual

Na revisão, a referência enviada pelo usuário prevalece sobre heurísticas visuais genéricas. Scrim neutro sobre a fotografia, hairlines necessárias a campos/controles e a ausência de vídeo ou movimento decorativo são escolhas intencionais quando mantêm a composição legível e estável. Corrigir sempre colisões com o wordmark, texto pequeno, quebra excessiva de títulos, crop que perca a torre e mudanças estruturais que afastem a página da referência.

## Imagens e proveniência

- `assets-source/fachada-tecido.png`: imagem de referência fornecida do ARES Aquarius. É a imagem-chave do hero e inclui wordmark aplicado no tecido. `public/ares-aquarius.svg` é uma reconstrução geométrica provisória fornecida pelo responsável para cabeçalho/rodapé, não uma arte original vetorial.
- `assets-source/Itajaí/Perspectivas/`: renders fornecidos pelo usuário e liberados para uso na página. O nome da pasta e nomes dos arquivos indicam outra origem/projeto; usar somente como material visual fornecido, sem afirmar que retratam o Aquarius.
- `assets-source/Itajaí/Plantas Humanizadas/`: plantas fornecidas pelo usuário e liberadas para uso visual. Tipologia, metragem, configuração e correspondência com Aquarius permanecem por confirmar.

Preservar a proveniência nos arquivos/nomes e na comunicação interna de implementação. Não inventar legenda factual para imagens potencialmente de outro empreendimento. Antes de publicação, substituir ou aprovar explicitamente cada render/planta como válido para o Aquarius.

## Limites de conteúdo

Copy fornecida na referência do usuário e liberada para uso: Jardim Aquarius, São José dos Campos; 3 dormitórios (1 suíte); 102 a 106 m²; 2 vagas; Colinas Shopping, Pão de Açúcar, Parque Ribeirão Vermelho e Av. Cassiano Ricardo. Não inventar distâncias ou tempos. O material de Itajaí não comprova que renders ou plantas retratam o Aquarius; essa correspondência deve constar na revisão de pré-publicação. Confirmar endereço/coordenadas do pin, URL real do tour, contatos, texto legal e backend/destino do formulário antes da publicação. Usar o logo fornecido pelo usuário; na ausência de vetor disponível no workspace, uma reprodução SVG fiel é aceitável e deve ser substituída pelo arquivo oficial quando disponível.

## Revis�o visual final (29/10/2026)

Inspecionada a captura real mobile de 390 px (`.qa/final-390-fold.jpg` e `.qa/final-390-full.jpg`). O hero empilha marca, headline e formul�rio com a torre identific�vel ao fundo e transi��o suave; os diferenciais seguem depois do formul�rio. As duas plantas agora ocupam a largura �til em coluna, com imagens leg�veis e controles de amplia��o vis�veis; isto corrige a vers�o anterior, que mantinha uma coluna lateral estreita no telefone. A galeria mant�m miniaturas em trilho horizontal. N�o alegar aus�ncia de clipping global apenas com esta captura mobile; os testes de overflow em 320/390/768/1440 foram reportados pelo root como aprovados.

Limites visuais conhecidos: o painel do mapa aparece como superf�cie neutra/fallback quando o embed externo n�o carrega; manter link real para Google Maps e n�o tratar esse quadro como mapa funcional em todos os ambientes. O panorama da regi�o � material ilustrativo do pacote fornecido, n�o evid�ncia de vista do Aquarius; a pr�pria captura mostra legenda de imagem ilustrativa. Faltam integra��o real de envio do formul�rio e URL do tour 360; o comportamento atual deve explicitar indisponibilidade e n�o simular sucesso.
