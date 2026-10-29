# ARES Aquarius

Landing page em React, TypeScript, Vite e Tailwind CSS.

## Desenvolvimento

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env` e configure as integrações quando os destinos oficiais estiverem disponíveis.
3. Inicie o servidor local com `npm run dev`.

`VITE_LEAD_ENDPOINT` recebe os dados do formulário por `POST` em JSON. Sem endpoint, o formulário informa que está indisponível e não exibe confirmação de envio. `VITE_PANOEE_URL` habilita o link externo para o tour 360; sem URL, o tour aparece como indisponível.

## Revisões necessárias antes de publicar

- Configurar e validar o endpoint do formulário, incluindo consentimento, política de privacidade e tratamento dos dados.
- Fornecer o endereço comercial exato, o ponto confirmado do mapa e o link do tour 360.
- Confirmar as especificações exibidas (3 dormitórios, 1 suíte, 102–106 m² e 2 vagas) com a documentação oficial.
- Confirmar que cada render e planta corresponde ao ARES Aquarius. As imagens vieram do pacote de referência do usuário em `assets-source/Itajaí/` e foram mantidas por fidelidade visual; os nomes dos arquivos indicam outro projeto. Até a validação, as imagens devem ser entendidas como ilustrativas. As plantas aparecem apenas como A e B, sem associação a uma tipologia específica.
- Substituir a recriação vetorial provisória do wordmark pelo arquivo oficial, se disponível.
- Validar os quatro pontos de interesse e suas buscas de mapa: Colinas Shopping, Pão de Açúcar, Parque Ribeirão Vermelho e Avenida Cassiano Ricardo.
- Revisar avisos legais e texto final com a equipe responsável pelo empreendimento.

O mapa é uma ilustração de contexto do bairro, não um mapa cartográfico nem um pin do endereço do empreendimento. O link de localização abre uma busca genérica até a equipe fornecer endereço e coordenadas confirmados.

## Verificação

Verificado em 2026-10-29: `npm run build` e `npx eslint src`.

No Playwright, passaram nove verificações: menu móvel abre/fecha; âncora de plantas; galeria abre, avança e fecha com Escape; planta amplia e fecha com Escape; formulário informa que o envio está indisponível sem endpoint. Também foram verificadas as larguras 390, 768 e 1440 px sem overflow e todos os links de âncora apontando para seções existentes. O navegador terminou sem erros ou avisos de console. As capturas desktop, tablet e celular foram revisadas com o inspetor da skill de design. O inspetor ainda aponta regras que conflitam com a referência visual solicitada (título de lazer em três linhas, rótulos, campos contornados e textos auxiliares pequenos); mantive essas escolhas onde aparecem no material de referência. O envio para CRM e o tour Panoee dependem dos destinos oficiais e não foram testados em produção.

## Origem dos materiais

`assets-source/` reúne os arquivos fornecidos pelo usuário: a fachada de referência do ARES Aquarius e renders/plantas do pacote chamado Itajaí. `public/images/hero-wide.webp` e `public/images/hero-mobile.webp` são imagens derivadas por geração a partir da fachada fornecida, com enquadramentos próprios para desktop e celular. Os demais derivados otimizados ficam em `public/images/`; o manifesto registra a relação com as fontes. Os arquivos originais são ignorados pelo Git para evitar adicionar o pacote bruto ao repositório.
