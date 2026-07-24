/* ═══════════════════════════════════════════════════════
   THALLES BARRETO — PORTFOLIO v2
   Language toggle · EN default · PT-BR on request
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const common = [
    { sel: ".cta", mode: "text", pt: "Trabalhe comigo" },
  ];

  const pages = {
    home: [
      { sel: ".intro h2", pt: "Product Marketing Manager para AI e SaaS. Transformo produtos técnicos em posicionamento claro, adoção mais forte e crescimento mensurável." },
      { sel: ".intro p", pt: 'Meu trabalho percorre toda a stack de go-to-market, do pricing e packaging à narrativa de lançamento, pesquisa de produto e distribuição com criadores. Levo uma mentalidade de builder para o marketing, então a história continua fiel ao produto e os números se sustentam. Agora estou à frente do marketing de produto na <a href="https://uxpilot.ai" target="_blank" rel="noopener" class="link">UX Pilot</a>, uma plataforma de design com IA.' },
      { sel: ".navlink-l", mode: "text", pt: ["Trabalhos", "Sobre", "Stack", "LinkedIn", "Email", "Currículo · PDF"] },
      { sel: ".featured figcaption", pt: "No palco · Marketing, tecnologia e inovação · UNIFOR" },
      { sel: ".proof-label", pt: "Resultados selecionados" },
      { sel: ".proof-cap", pt: ["de conversão free-to-paid via pricing e packaging", "registros em 30 dias em um lançamento de produto", "de verba de criadores gerenciada de ponta a ponta"] },
      { sel: ".quote p", pt: '"Bom marketing começa dentro do produto."' },
    ],

    work: [
      { sel: ".title-row h1", pt: "Trabalhos selecionados" },
      { sel: ".title-row .role", pt: "Estudos de caso" },
      { sel: ".lead-p", pt: "Três casos em profundidade, com o contexto, as decisões e o resultado medido. Decks completos com prints e dados anonimizados ficam disponíveis em entrevistas." },
      { sel: ".case h3", pt: [
        "Pricing e packaging para um SaaS de IA",
        "Go-to-market do Nodey, um agente de IA",
        "Distribuição com criadores product-led",
      ] },
      { sel: ".chip", pt: [
        "UX Pilot · 2026", "Pricing", "Packaging", "Comunicação de valor",
        "UX Pilot · 2026", "Posicionamento", "Inteligência competitiva", "Lançamento",
        "UX Pilot · 2025 a 2026", "Design de programa", "0→1", "$300K+ gerenciados",
      ] },
      { sel: ".case-lead", pt: [
        "Os cadastros gratuitos cresciam enquanto a conversão paga ficava estagnada, e a diferença era maior fora dos mercados principais do produto.",
        "Um agente de IA para o Figma entrando num mercado que o Google Stitch e ferramentas de design velozes redesenhavam todo mês.",
        "A aquisição paga era cara e o produto brilha nas mãos de especialistas, então desenhei a distribuição como um programa permanente.",
      ] },
      { sel: ".cblock h4", pt: [
        "Contexto", "Hipótese e experimento", "Resultado", "O que aprendi",
        "Mercado e ICP", "Posicionamento e mensagem", "Distribuição e sinais", "O que aprendi",
        "Arquitetura", "Sistema operacional", "Resultado", "O que aprendi",
      ] },
      { sel: ".cblock p", pt: [
        "A UX Pilot atende uma base global de designers em modelo freemium. Relatórios de coorte mostravam boa ativação com upgrades fracos em várias regiões, e as gravações de sessão apontavam hesitação na página de preços, com o produto seguindo bem avaliado.",
        "Um preço global único ignorava o poder de compra e como cada segmento descrevia valor. Rodei um estudo de elasticidade de preço, mapeei a disposição a pagar por região e lancei preços por geografia com planos reempacotados, reescrevendo a comunicação de valor para cada segmento.",
        "A conversão free-to-paid subiu 34,8% em relação ao ciclo anterior, com guardrails de churn e LTV acompanhados em relatórios de coorte dedicados para confirmar que o ganho se sustentava como receita saudável.",
        "Preço é mensagem. O enquadramento do valor moveu o comportamento tanto quanto o número em si.",
        "Mapeei o cenário numa matriz competitiva, fiz um teardown completo do Google Stitch e testei o produto na prática por semanas. A partir daí defini o ICP e os jobs to be done em que o Nodey vence, onde a automação profunda de fluxo importa mais que a geração pura.",
        "O posicionamento ancorou o Nodey como o agente que trabalha dentro de arquivos de design reais. Construí a hierarquia de mensagem do gancho à prova, e a transformei em assets de lançamento, narrativa de landing, roteiros de demo e briefs de criadores.",
        "A distribuição do lançamento passou pelo motor de criadores do caso 03, dando alcance à narrativa desde o primeiro dia. Os sinais iniciais incluem adoção consistente da mensagem entre canais e cadastros vindos de demos rastreados no PostHog.",
        "Numa categoria cheia, um ponto de vista afiado vence uma lista maior de features toda vez.",
        "Desenhei um programa de três níveis com critérios claros de entrada, de embaixadores da comunidade a especialistas de destaque. Cada nível tem seu próprio template de briefing que traduz casos de uso do produto em ganchos, provas e formatos de publicação.",
        "Playbooks de outreach, um framework próprio de KPIs e um sistema de tracking mantêm sete canais de comunidade rodando ao mesmo tempo, com relatórios de performance que realimentam os briefs a cada ciclo.",
        "O programa alcançou 8M+ de impressões orgânicas no X e no Instagram, escalou para $300K+ em campanhas gerenciadas e hoje roda como um sistema repetível que sustentou o lançamento do Nodey no caso 02.",
        "A distribuição compõe quando é um sistema com donos e métricas, então nada depende de um único post de sorte.",
      ] },
      { sel: ".case-metric b", pt: [null, "GTM completo", null] },
      { sel: ".case-metric span", pt: ["de conversão free-to-paid", "do posicionamento ao lançamento", "impressões orgânicas"] },
      { sel: ".case-link", mode: "text", pt: ["Ver a página de preços no ar", "Conheça o Nodey no ar", "Peça o detalhamento completo"] },
      { sel: ".mini-meta", pt: ["Também · Fried Chicken Labs · 2024", "Também · Hous3 · UX Pilot · 2025 a 2026"] },
      { sel: ".mini h4", pt: [
        "Pré-lançamento de produto de consumo com 20K registros em 30 dias e queda de 35% no CPA.",
        "Thought leadership executivo com 5M+ de impressões no LinkedIn de um CEO entre compradores B2B.",
      ] },
      { sel: ".pn span", pt: ["A seguir", "Depois"] },
      { sel: ".pn strong", mode: "text", pt: ["Sobre", "Stack"] },
    ],

    about: [
      { sel: ".title-row h1", pt: ["Sobre", "Carreira", "Além do trabalho"] },
      { sel: ".title-row .role", pt: [null, "2020 até agora", "Liderança e formação"] },
      { sel: ".about-paras p", pt: [
        'Transformo produtos digitais complexos em <strong>razões claras para comprar, adotar e continuar usando.</strong>',
        "Em cinco anos entre SaaS, produtos de IA e negócios digitais de alta velocidade, saí do trabalho de audiência e aquisição para o product marketing completo. Trabalho lado a lado com Produto, Growth, Design e Vendas, da pesquisa e pricing a battlecards e mensagens de ciclo de vida.",
        "Gosto de entender como um produto realmente funciona antes de falar sobre ele. Esse hábito molda tudo que entrego, de planos de go-to-market a briefs de influenciadores e estudos de preço. Estou no Brasil e atuo globalmente, em inglês, espanhol e português.",
      ] },
      { sel: ".cmain h3", pt: [
        "Insight de clientes por comunidades digitais",
        "Mensagem de lançamento na Selarte Agency",
        "GTM de aquisição na Fried Chicken Labs",
        "Ciclo de vida e demanda na Movimentum e Hous3",
        "Distribuição product-led na UX Pilot",
        "Product Marketing Manager na UX Pilot",
      ] },
      { sel: ".cmain p", pt: [
        "Construí comunidades do zero e aprendi como a linguagem da audiência e os loops de feedback movem aquisição e retenção.",
        "Escrevi copy de lançamento e jornadas de comunidade para quatro lançamentos digitais liderados por comunidade, todos lotados.",
        "Liderei o go-to-market de pré-lançamento de um produto de entretenimento de consumo entre canais, criativos e comunidade.",
        "Conduzi onboarding multimarca, demanda B2B e programas de ciclo de vida com automação de IA para newsletters e nutrição.",
        "Construí o programa de criadores do zero até virar um motor de distribuição para um SaaS de design com IA.",
        "Hoje sou dono de posicionamento, pricing, inteligência competitiva, Voice of Customer e sales enablement do produto.",
      ] },
      { sel: ".cmetric", pt: ["VOC · comunidade 0→1", "4/4 lotados", "20K · −35% CPA", "ciclo de vida · pipeline", "8M+ · $300K+", "+34.8% free-to-paid"] },
      { sel: ".leaditem h3", pt: [
        "Melhor ideia de startup do semestre",
        "Palestras sobre desenvolvimento de produto com IA",
        "Tecnólogo em Marketing, UNIFOR",
      ] },
      { sel: ".leaditem p", pt: [
        "Vencedor da competição de startups da universidade na UNIFOR.",
        "Palestrante convidado sobre fluxos reais que vão da pesquisa e prototipação ao lançamento.",
        "Com certificações em IA para Marketing, SEO na Era da IA e Inbound da HubSpot.",
      ] },
      { sel: ".li-tag", pt: [
        "UNIFOR · competição de startups · vencedor",
        "Palestrante · IA × produto",
        "2025 a 2026 · Universidade de Fortaleza",
      ] },
      { sel: ".pn span", pt: ["Voltar", "A seguir"] },
      { sel: ".pn strong", mode: "text", pt: ["Trabalhos", "Stack"] },
    ],

    stack: [
      { sel: ".title-row h1", pt: ["Stack", "As ferramentas"] },
      { sel: ".title-row .role", pt: ["Como eu trabalho", "Dia a dia"] },
      { sel: ".lead-p", pt: "Eu testo o que divulgo, pesquiso antes de escrever e trato IA como infraestrutura do dia a dia. Estas quatro áreas são onde entrego mais valor." },
      { sel: ".pillar h3", pt: ["Product marketing", "Pesquisa de produto e UX", "Growth e distribuição", "IA como infraestrutura"] },
      { sel: ".pillar p", pt: [
        "Posicionamento, narrativas de lançamento e planos de GTM construídos sobre entendimento real do produto. ICPs, buyer personas, battlecards e propostas de valor prontas para vendas, como o lançamento do Nodey.",
        "Análise de gravações de sessão no PostHog, estudos de coorte, pesquisa de preço e teardowns competitivos que transformam comportamento bruto em decisões.",
        "Orgânico e pago trabalhando juntos por programas de criadores, thought leadership executivo e sistemas de ciclo de vida, com CTR, CAC e ROI sob observação constante.",
        "Automações em n8n e Clay para newsletters, agendamento e nutrição, além de ferramentas de IA para código e design em protótipos e landing pages.",
      ] },
      { sel: ".group h3", pt: ["Estratégia e GTM", "Dados e Analytics", "Automação e CRM", "IA e Criativo", "Conteúdo e Social", "Processo e PM"] },
      { sel: ".pn span", pt: ["Voltar", "Início"] },
      { sel: ".pn strong", mode: "text", pt: ["Sobre", "Recomeçar"] },
    ],
  };

  const firstTextNode = (el) => {
    for (const n of el.childNodes) {
      if (n.nodeType === Node.TEXT_NODE && n.nodeValue.trim().length) return n;
    }
    return null;
  };

  const applyEntry = (entry, lang) => {
    document.querySelectorAll(entry.sel).forEach((el, i) => {
      const val = Array.isArray(entry.pt) ? entry.pt[i] : entry.pt;
      if (val == null) return;
      if (entry.mode === "text") {
        const node = firstTextNode(el);
        if (!node) return;
        if (el.dataset.enText == null) el.dataset.enText = node.nodeValue;
        node.nodeValue = lang === "pt" ? val : el.dataset.enText;
      } else {
        if (el.dataset.en == null) el.dataset.en = el.innerHTML;
        el.innerHTML = lang === "pt" ? val : el.dataset.en;
      }
    });
  };

  const page = document.body.dataset.page;
  const entries = common.concat(pages[page] || []);

  const applyLang = (lang) => {
    entries.forEach((e) => applyEntry(e, lang));
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    const code = document.querySelector(".lang-code");
    if (code) code.textContent = lang === "pt" ? "PT" : "EN";
    try { localStorage.setItem("lang", lang); } catch (e) { /* private */ }
  };

  let current = "en";
  try { if (localStorage.getItem("lang") === "pt") current = "pt"; } catch (e) { /* private */ }
  if (current === "pt") applyLang("pt");

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      current = current === "en" ? "pt" : "en";
      applyLang(current);
    });
  }
})();
