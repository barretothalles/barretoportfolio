/* ═══════════════════════════════════════════════════════
   THALLES BARRETO — PORTFOLIO v2
   Language toggle (EN default, PT-BR via flag button)
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const I18N = [
    /* nav + menu */
    { sel: ".nav-links a", pt: ["Cases", "Impacto", "Carreira", "Como trabalho", "Sobre"] },
    { sel: ".nav-resume", pt: "CURRÍCULO ↓" },
    { sel: ".nav-cta", pt: "Vamos conversar" },
    { sel: ".menu-links a", pt: [
      '<em class="mono">01</em>Cases',
      '<em class="mono">02</em>Impacto',
      '<em class="mono">03</em>Carreira',
      '<em class="mono">04</em>Como trabalho',
      '<em class="mono">05</em>Sobre',
      '<em class="mono">06</em>Contato',
    ] },
    { sel: ".menu-foot a", pt: ["Baixar currículo · PDF ↓", null, null] },

    /* hero */
    { sel: ".hero-eyebrow span", pt: ['<i class="pulse"></i>ABERTO A PROPOSTAS', null, "BRASIL · ATUAÇÃO GLOBAL", null, null] },
    { sel: ".hero-role .li", pt: ["Product Marketing Manager", "<em>para AI &amp; SaaS.</em>"] },
    { sel: ".hero-desc", pt: "Transformo produtos técnicos em posicionamento claro, adoção mais forte e crescimento mensurável, atuando em pricing, GTM, pesquisa e distribuição com criadores." },
    { sel: ".hero-proof span", pt: ["<b>+34.8%</b> FREE-TO-PAID", "<b>20K</b> REGISTROS EM 30 DIAS", "<b>$300K+</b> GERENCIADOS"] },
    { sel: ".btn-solid", pt: "Ver cases selecionados" },
    { sel: ".hero-ctas .btn-ghost", pt: "Baixar currículo · PDF" },
    { sel: ".hero-current", pt: "ATUALMENTE NA UX PILOT · SAAS DE DESIGN COM IA" },
    { sel: ".marquee-track span", pt: "AI SAAS <i>×</i> PRODUCT MARKETING <i>×</i> PRODUCT GROWTH <i>×</i> POSICIONAMENTO <i>×</i> PRICING <i>×</i> SALES ENABLEMENT <i>×</i> ESTRATÉGIA DE GTM <i>×</i>&nbsp;" },

    /* section labels + titles */
    { sel: ".sec-label", pt: [
      "PROVA, COM CONTEXTO",
      "CASE STUDIES SELECIONADOS",
      "RESUMO DE CARREIRA · 2020 ATÉ AGORA",
      "COMO EU TRABALHO",
      "SOBRE & LIDERANÇA",
    ] },
    { sel: ".sec-title", pt: [
      "Os números por trás<br><em>do trabalho.</em>",
      "Três cases,<br><em>em profundidade.</em>",
      "Do insight de audiência<br><em>ao PMM completo.</em>",
      "Produto e growth,<br><em>de ponta a ponta.</em>",
    ] },
    { sel: ".cases .sec-sub", pt: "Cada case cobre o contexto, as decisões e o resultado medido. Decks completos com screenshots e dados anonimizados ficam disponíveis em entrevistas." },
    { sel: ".operate .sec-sub", pt: "Eu testo o que divulgo, pesquiso antes de escrever e trato IA como infraestrutura do dia a dia. Estas quatro áreas são onde eu gero mais valor." },

    /* impact stats */
    { sel: ".stat-tag", pt: [
      "UX PILOT · PRICING & PACKAGING · 2026",
      "UX PILOT · ATIVAÇÃO · 2026",
      "FRIED CHICKEN LABS · AQUISIÇÃO · 2024",
      "FRIED CHICKEN LABS · GTM · 2024",
      "UX PILOT · HOUS3 · DISTRIBUIÇÃO",
      "UX PILOT · PROGRAMA DE CRIADORES · 2025 A 2026",
    ] },
    { sel: ".stat-desc", pt: [
      "de aumento na conversão free-to-paid após pricing por geografia e comunicação de valor por segmento, medido contra o ciclo anterior",
      "de aumento em ativação com experimentos de onboarding guiados por gravações de sessão no PostHog em coortes de churn, não convertidos e convertidos",
      "de redução no custo de aquisição durante o pré-lançamento de um produto de consumo, com otimização de canais e criativos",
      "registros nos primeiros 30 dias do mesmo pré-lançamento, alinhado ao ciclo de desenvolvimento do produto",
      "impressões orgânicas somadas entre X, Instagram e LinkedIn, incluindo 5M+ de thought leadership executivo",
      "em verba de criadores gerenciada de ponta a ponta, da prospecção e briefing ao relatório de performance",
    ] },

    /* cases */
    { sel: ".case-head h3", pt: [
      "Pricing & packaging para um SaaS de IA",
      "Go-to-market do Nodey, um agente de IA",
      "Distribuição product-led com criadores",
    ] },
    { sel: ".case-chips", pt: [
      "<span>UX PILOT · 2026</span><span>PRICING</span><span>PACKAGING</span><span>COMUNICAÇÃO DE VALOR</span>",
      "<span>UX PILOT · 2026</span><span>POSICIONAMENTO</span><span>INTELIGÊNCIA COMPETITIVA</span><span>LANÇAMENTO</span>",
      "<span>UX PILOT · 2025 A 2026</span><span>DESENHO DE PROGRAMA</span><span>0→1</span><span>$300K+ GERENCIADOS</span>",
    ] },
    { sel: ".case-lead", pt: [
      "Os cadastros gratuitos cresciam enquanto a conversão paga ficava parada, e a diferença era maior fora dos mercados centrais do produto.",
      "Um agente de IA para o Figma entrando em um mercado que o Google Stitch e ferramentas aceleradas de design redesenhavam todo mês.",
      "A aquisição paga estava cara e o produto brilha nas mãos de especialistas, então desenhei a distribuição como um programa permanente.",
    ] },
    { sel: ".case-block h4", pt: [
      "CONTEXTO", "HIPÓTESE & EXPERIMENTO", "RESULTADO",
      "MERCADO & ICP", "POSICIONAMENTO & MENSAGEM", "DISTRIBUIÇÃO & SINAIS",
      "ARQUITETURA", "SISTEMA OPERACIONAL", "RESULTADO",
    ] },
    { sel: ".case-block p", pt: [
      "A UX Pilot atende uma base global de designers em modelo freemium. Relatórios de coorte mostravam boa ativação com upgrades fracos em várias regiões, e as gravações de sessão apontavam hesitação na página de preços, e o produto seguia bem avaliado.",
      "Um preço global único ignorava poder de compra e a forma como cada segmento descreve valor. Rodei um estudo de elasticidade de preço, mapeei disposição a pagar por região e lancei pricing por geografia com planos reempacotados, reescrevendo a comunicação de valor para cada segmento.",
      "A conversão free-to-paid subiu 34.8% contra o ciclo anterior, com churn e LTV acompanhados em relatórios de coorte dedicados para confirmar que o ganho era receita saudável.",
      "Mapeei o mercado em uma matriz competitiva, fiz um teardown completo do Google Stitch e testei o produto na prática por semanas. A partir daí defini o ICP e os jobs to be done em que o Nodey vence, onde automação profunda de workflow importa mais que geração bruta.",
      "O posicionamento ancorou o Nodey como o agente que trabalha dentro de arquivos reais de design. Construí a hierarquia de mensagem do gancho à prova e a transformei em assets de lançamento, narrativa de landing, roteiros de demo e briefings de criadores.",
      "A distribuição do lançamento rodou pelo motor de criadores descrito no case 03, dando alcance à narrativa desde o primeiro dia. Os sinais iniciais incluem adoção consistente da mensagem entre canais e signups vindos de demos rastreados no PostHog.",
      "Desenhei um programa de três níveis com critérios claros de entrada, de embaixadores de comunidade a especialistas de destaque. Cada nível tem seu template de briefing que traduz casos de uso do produto em ganchos, provas e formatos de publicação.",
      "Playbooks de outreach, um framework próprio de KPIs e um sistema de tracking mantêm sete canais de comunidade rodando ao mesmo tempo, com relatórios de performance que realimentam os briefings a cada ciclo.",
      "O programa passou de 8M+ de impressões orgânicas no X e no Instagram, escalou para $300K+ em campanhas gerenciadas e hoje roda como um sistema repetível que sustentou o lançamento do Nodey no case 02.",
    ] },
    { sel: ".case-learn", pt: '<span class="mono">O QUE EU APRENDI</span>Preço é mensagem. O enquadramento do valor moveu o comportamento tanto quanto o número em si.' },
    { sel: ".case-link", pt: ["Ver a página de preços no ar<span>↗</span>", "Conhecer o Nodey no ar<span>↗</span>"] },
    { sel: ".case-exhibit figcaption", pt: [
      "CONVERSÃO FREE-TO-PAID · INDEXADA",
      "MATRIZ DE POSICIONAMENTO · SIMPLIFICADA",
      "ARQUITETURA DO PROGRAMA",
    ] },
    { sel: ".bar-label", pt: ["ANTES", "DEPOIS"] },
    { sel: ".exhibit-chips", pt: "<span>TIERS POR GEOGRAFIA</span><span>REEMPACOTAMENTO DE PLANOS</span><span>ESTUDO DE ELASTICIDADE</span><span>GUARDRAILS DE CHURN & LTV</span>" },
    { sel: ".matrix-axis-y", pt: "PROFUNDIDADE DE WORKFLOW →" },
    { sel: ".matrix-axis-x", pt: "FACILIDADE DE ADOÇÃO →" },
    { sel: ".msg-stack span", pt: ["GANCHO", "VALOR", "PROVA", "CTA"] },
    { sel: ".tier span", pt: ["T1 · ESPECIALISTAS DE DESTAQUE", "T2 · CRIADORES INTERMEDIÁRIOS", "T3 · EMBAIXADORES DE COMUNIDADE"] },
    { sel: ".tier em", pt: ["INTEGRAÇÕES PROFUNDAS", "FORMATOS RECORRENTES", "PRESENÇA CONTÍNUA"] },
    { sel: ".exhibit-stats span", pt: ["IMPRESSÕES ORGÂNICAS", "GERENCIADOS", "CANAIS"] },
    { sel: ".case-mini > .mono", pt: ["TAMBÉM · FRIED CHICKEN LABS · 2024", "TAMBÉM · HOUS3 · UX PILOT · 2025 A 2026"] },
    { sel: ".case-mini h4", pt: [
      "Pré-lançamento de produto de consumo com 20K registros em 30 dias e queda de 35% no CPA",
      "Thought leadership executivo com 5M+ de impressões no LinkedIn de um CEO entre compradores B2B",
    ] },

    /* career */
    { sel: ".career-main h3", pt: [
      "Insight de cliente em comunidades digitais",
      "Mensagem de lançamento na Selarte Agency",
      "GTM de aquisição na Fried Chicken Labs",
      "Lifecycle e demanda na Movimentum e na Hous3",
      "Distribuição product-led na UX Pilot",
      "Product Marketing Manager na UX Pilot",
    ] },
    { sel: ".career-main p", pt: [
      "Construí comunidades do zero e aprendi como a linguagem da audiência e os loops de feedback movem aquisição e retenção.",
      "Escrevi copy de lançamento e jornadas de comunidade para quatro lançamentos digitais liderados por comunidade, todos lotados.",
      "Liderei o go-to-market de pré-lançamento de um produto de entretenimento de consumo entre canais, criativos e comunidade.",
      "Conduzi onboarding multimarcas, demanda B2B e programas de lifecycle com automação de IA para newsletters e nutrição.",
      "Construí do zero o programa de criadores que virou motor de distribuição de um SaaS de design com IA.",
      "Hoje sou dono de posicionamento, pricing, inteligência competitiva, Voice of Customer e sales enablement do produto.",
    ] },
    { sel: ".career-metric", pt: ["VOC · COMUNIDADE 0→1", "4/4 LOTADOS", "20K · −35% CPA", "LIFECYCLE · PIPELINE", "8M+ · $300K+", "+34.8% FREE-TO-PAID"] },

    /* operate */
    { sel: ".op-card h3", pt: ["Product marketing", "Pesquisa de produto & UX", "Growth & distribuição", "IA como infraestrutura"] },
    { sel: ".op-card p", pt: [
      "Posicionamento, narrativas de lançamento e planos de GTM construídos sobre entendimento real de produto. ICPs, personas, battlecards e propostas de valor prontas para vendas, como o lançamento do Nodey no case 02.",
      "Análise de gravações de sessão no PostHog, estudos de coorte, pesquisa de preço e teardowns competitivos que transformam comportamento bruto em decisões, a mesma pesquisa que sustentou o case 01.",
      "Orgânico e pago trabalhando juntos por programas de criadores, thought leadership executivo e sistemas de lifecycle, com CTR, CAC e ROI sob vigilância constante.",
      "Automações em n8n e Clay para newsletters, agendamento e nutrição, além de ferramentas de IA para código e design em protótipos e landing pages. Este site é um exemplo.",
    ] },
    { sel: ".ai-tools > span", pt: "STACK DIÁRIA" },

    /* about & leadership */
    { sel: ".profile-badge", pt: "DESDE 2020 · SEM PARAR DE ENTREGAR" },
    { sel: ".panel-media figcaption", pt: "PAINELISTA · MARKETING, TECNOLOGIA & INOVAÇÃO · UNIFOR" },
    { sel: ".profile-lead", pt: "Transformo produtos digitais complexos em <em>razões claras para comprar, adotar e continuar usando.</em>" },
    { sel: ".about-copy > p", pt: "Em cinco anos entre SaaS, produtos de IA e negócios digitais acelerados, saí do trabalho de audiência e aquisição para o product marketing completo. Trabalho lado a lado com Produto, Growth, Design e Vendas, da pesquisa e pricing a battlecards e mensagens de lifecycle." },
    { sel: ".profile-meta li", pt: [
      "<span>ATUAL</span>Product Marketing Manager na UX Pilot (SaaS de Design com IA)",
      "<span>FOCO</span>SaaS de IA · Posicionamento · Pricing · GTM · Adoção",
      "<span>IDIOMAS</span>Inglês · Espanhol · Português",
    ] },
    { sel: ".lead-list h3", pt: [
      "Melhor ideia de startup do semestre",
      "Palestras sobre desenvolvimento de produto com IA",
      "Tecnólogo em Marketing, UNIFOR",
    ] },
    { sel: ".lead-list p", pt: [
      "Vencedor da competição universitária de startups da UNIFOR.",
      "Palestrante convidado sobre workflows reais, da pesquisa e prototipação ao lançamento.",
      "Com certificações em IA para Marketing, SEO na Era da IA e Inbound da HubSpot.",
    ] },

    /* contact + footer */
    { sel: ".contact-eyebrow", pt: "TEM UM PRODUTO QUE MERECE UMA BOA CONVERSA?" },
    { sel: ".contact-title .li", pt: ["VAMOS", "CONVERSAR"] },
    { sel: ".contact-link", pt: [null, null, "Baixar currículo · PDF<span>↓</span>"] },
    { sel: ".footer-time", firstText: true, pt: "BRASIL · " },
  ];

  /* keep word-reveal elements readable after a language swap */
  const rewrapWords = (el) => {
    if (!el.hasAttribute("data-words")) return;
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="w" style="opacity:1">${w}</span>`).join(" ");
  };

  const applyLang = (lang) => {
    I18N.forEach((entry) => {
      document.querySelectorAll(entry.sel).forEach((el, i) => {
        const pt = Array.isArray(entry.pt) ? entry.pt[i] : entry.pt;
        if (pt == null) return;

        if (entry.firstText) {
          if (el.dataset.enText == null) el.dataset.enText = el.firstChild.nodeValue;
          el.firstChild.nodeValue = lang === "pt" ? pt : el.dataset.enText;
        } else {
          if (el.dataset.en == null) el.dataset.en = el.innerHTML;
          el.innerHTML = lang === "pt" ? pt : el.dataset.en;
          rewrapWords(el);
        }
      });
    });

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.body.classList.toggle("lang-pt", lang === "pt");
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  };

  let current = "en";
  try { current = localStorage.getItem("lang") === "pt" ? "pt" : "en"; } catch (e) { /* private mode */ }
  if (current === "pt") applyLang("pt");

  document.getElementById("langToggle").addEventListener("click", () => {
    current = current === "en" ? "pt" : "en";
    applyLang(current);
  });
})();
