/* ═══════════════════════════════════════════════════════
   THALLES BARRETO — PORTFOLIO
   Language toggle (EN default, PT-BR via flag button)
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  /* Each entry maps a selector to its PT content.
     pt as string applies to every match; as array, by index (null skips).
     attr entries swap an attribute instead of innerHTML.
     firstText entries swap only the first text node (keeps child elements alive). */
  const I18N = [
    /* nav + menu */
    { sel: ".nav-links a", pt: ["Impacto", "Jornada", "IA", "Trabalhos", "Liderança", "Stack"] },
    { sel: ".nav-status", pt: '<i class="pulse"></i>ABERTO A PROPOSTAS' },
    { sel: ".nav-cta", pt: "Vamos conversar" },
    { sel: ".menu-links a", pt: [
      '<em class="mono">01</em>Impacto',
      '<em class="mono">02</em>Jornada',
      '<em class="mono">03</em>Expertise em IA',
      '<em class="mono">04</em>Trabalhos',
      '<em class="mono">05</em>Liderança',
      '<em class="mono">06</em>Stack',
      '<em class="mono">07</em>Contato',
    ] },

    /* hero */
    { sel: ".hero-eyebrow span", pt: ["BRASIL · ATUAÇÃO GLOBAL", null, null] },
    { sel: ".hero-desc", pt: "Profissional de marketing especializado em produtos de IA. Eu construo <strong>estratégias de go-to-market, sistemas de growth e programas de criadores</strong> para startups de IA, games e Web3." },
    { sel: ".hero-roles li", pt: ["PRODUCT MARKETING", "GROWTH COM IA", "ESTRATÉGIA DE GTM", "PROGRAMAS DE INFLUENCERS", "GESTÃO DE REDES SOCIAIS"] },
    { sel: ".hero-scroll", pt: 'ROLE<span class="hero-scroll-line"></span>' },
    { sel: ".hero-stats span", pt: ["<b>$4M+</b> EM RECEITA", "<b>15+</b> LANÇAMENTOS", "<b>13M+</b> IMPRESSÕES"] },
    { sel: ".marquee-track span", pt: "IA <i>×</i> PRODUCT MARKETING <i>×</i> GROWTH <i>×</i> UX/UI <i>×</i> PROGRAMAS DE INFLUENCERS <i>×</i> ESTRATÉGIA DE GTM <i>×</i> COMUNIDADE <i>×</i>&nbsp;" },

    /* section labels and titles */
    { sel: ".sec-label", pt: [
      "PERFIL",
      "IMPACTO SELECIONADO",
      "A JORNADA · DE 2020 ATÉ AGORA",
      "IA & AUTOMAÇÃO",
      "TRABALHOS SELECIONADOS",
      "PRODUCT & GROWTH MARKETING MANAGER",
      "ACADÊMICO & LIDERANÇA",
      "FERRAMENTAS & TECNOLOGIA",
    ] },
    { sel: ".sec-title", pt: [
      "Os números por trás<br><em>do trabalho.</em>",
      "IA como<br><em>prática diária.</em>",
      "Operações<br><em>selecionadas.</em>",
      "Produto e growth,<br><em>de ponta a ponta.</em>",
      "Além<br><em>do feed.</em>",
      "A stack<br><em>de operação.</em>",
    ] },

    /* profile */
    { sel: ".profile-badge", pt: "DESDE 2020 · SEM PARAR DE ENTREGAR" },
    { sel: ".profile-lead", pt: "Comecei em 2020 construindo comunidades de games, onde aprendi cedo que <em>atenção se conquista</em> um post de cada vez." },
    { sel: ".profile-copy > p", pt: [
      "Desde então meu caminho passou por agências, projetos Web3 e startups de IA. Cinco anos em mercados acelerados me ensinaram a aprender rápido e ficar perto do produto. Hoje trabalho ao lado de fundadores em times enxutos, confortável tanto desenhando a estratégia quanto executando no dia a dia.",
      "Gosto de entender como um produto realmente funciona antes de falar sobre ele. Esse hábito molda tudo que entrego, de planos de go-to-market a briefings de influencers e estudos de preço.",
    ] },
    { sel: ".profile-meta li", pt: [
      "<span>ATUAL</span>Product Marketing Specialist na UX Pilot (SaaS de Design com IA)",
      "<span>FOCO</span>Produtos de IA · GTM · Growth · Distribuição com criadores",
      "<span>IDIOMAS</span>Inglês · Espanhol · Português",
    ] },

    /* impact stats */
    { sel: ".stat-desc", pt: [
      "em receita gerada por lançamentos que liderei, incluindo quatro projetos Web3 esgotados",
      "lançamentos de produtos e campanhas liderados em IA, games e Web3",
      "de aumento em ativação com experimentos guiados por pesquisa no PostHog",
      "de redução no custo de aquisição em uma campanha de pré-lançamento de game",
      "impressões orgânicas somadas entre X, Instagram e LinkedIn",
      "pré-registros de jogo em 30 dias para Takedown Legends",
      "em verba de influencers gerenciada, da prospecção ao relatório",
      "programa de influencers construído do zero, com níveis, playbooks e tracking",
    ] },

    /* timeline */
    { sel: ".tl-hint", pt: "ROLE →" },
    { sel: ".tl-tag", pt: [
      "ORIGEM · GAMES & CONTEÚDO",
      "WEB3 · SELARTE AGENCY",
      "GAMES · FRIED CHICKEN LABS · SNACKCLUB",
      "AGÊNCIAS · MOVIMENTUM · HOUS3",
      "STARTUP DE IA · UX PILOT",
      "PRODUCT MARKETING · UX PILOT",
    ] },
    { sel: ".tl-card h3", pt: [
      "A arena",
      "A sequência de sell outs",
      "Velocidade de lançamento",
      "Pensamento sistêmico",
      "Motor de distribuição",
      "Produto × narrativa",
    ] },
    { sel: ".tl-card p", pt: [
      "Comecei construindo comunidades online do zero em nichos de games altamente competitivos. Sem orçamento por trás do trabalho, cada post precisava entregar resultado de verdade.",
      "Liderei conteúdo e comunidade para quatro projetos Web3 no Twitter e no Discord. Todos esgotaram, gerando mais de quatro milhões de dólares em receita.",
      "Desenhei o plano de go-to-market do pré-lançamento de Takedown Legends, que trouxe mais de 20.000 pré-registros em 30 dias e cortou o custo de aquisição em 35%.",
      "Conduzi campanhas com KOLs, operações de conteúdo multimarcas e thought leadership para executivos B2B, e construí minhas primeiras automações com IA para newsletters, agendamento e nutrição de leads.",
      "Entrei em uma startup de design com IA para liderar social media e influencer marketing. O trabalho passou de 8 milhões de impressões orgânicas e virou um programa de criadores com mais de $300K em campanhas.",
      "Hoje sou dono do go-to-market completo do Nodey, um agente de IA para o Figma. O papel cobre benchmarking competitivo, testes de produto e a narrativa de lançamento, junto com pesquisa de usuários no PostHog e sistemas de mensagem por ICP.",
    ] },
    { sel: ".tl-metric", pt: [
      "COMUNIDADE 0→1",
      "$4M+ EM RECEITA · 4/4 ESGOTADOS",
      "20K PRÉ-REGISTROS · −35% CPA",
      "AUTOMAÇÃO COM IA · CTR/CAC/ROI",
      "8M+ IMPRESSÕES · $300K GERENCIADOS",
      "PMM COMPLETO · AGORA",
    ] },

    /* ai section */
    { sel: ".sec-sub", pt: "Eu faço marketing de um produto de IA e uso IA para fazer esse trabalho. Essas ferramentas estão no centro de como pesquiso, construo e entrego marketing todos os dias." },
    { sel: ".ai-card h3", pt: [
      "GTM para produtos de IA",
      "Sistemas de automação",
      "Pesquisa com IA",
      "Construção assistida por IA",
    ] },
    { sel: ".ai-card p", pt: [
      "Liderei o go-to-market completo do Nodey, um agente de IA para o Figma. O trabalho cobriu benchmarking competitivo, testes práticos do produto, a narrativa de lançamento e a distribuição com criadores de conteúdo.",
      "Construo operações de growth com n8n e Clay, com automações de IA para geração de newsletters, agendamento de conteúdo e nutrição de leads que reduziram a carga de trabalho de times inteiros.",
      "Analiso gravações de sessão no PostHog em coortes de churn, não convertidos e convertidos para encontrar bloqueios de conversão, e transformo análises competitivas como a do Google Stitch em estratégia de go-to-market.",
      "Entrego protótipos, landing pages e produção criativa com ferramentas de IA para código e design, os mesmos workflows que apresento em palestras sobre desenvolvimento de produto assistido por IA. Este site é um exemplo.",
    ] },
    { sel: ".ai-tools > span", pt: "STACK DIÁRIA" },

    /* work */
    { sel: ".work-head", attr: "data-cursor-label", pt: "ABRIR" },
    { sel: ".work-head h3", pt: [
      "GTM do Nodey, um agente de IA",
      "Motor de influencers, do zero ao um",
      "Pré-lançamento de Takedown Legends",
      "A sequência de sell outs na Web3",
      "Thought leadership executivo",
    ] },
    { sel: ".work-meta", pt: [
      "UX PILOT · 2026",
      "UX PILOT · 2025 A 2026",
      "FRIED CHICKEN LABS · 2024",
      "SELARTE AGENCY · 2023",
      "HOUS3 · UX PILOT · 2025 A 2026",
    ] },
    { sel: ".work-metric", pt: [
      "GTM COMPLETO",
      "$300K+ GERENCIADOS",
      "20K EM 30 DIAS",
      "$4M+ EM RECEITA",
      "5M+ IMPRESSÕES",
    ] },
    { sel: ".work-body-inner p", pt: [
      "Fui dono do go-to-market completo do Nodey, um agente de IA para o Figma, do benchmarking competitivo e testes práticos do produto à narrativa de lançamento e distribuição liderada por criadores.",
      "Construí o programa de influencers da UX Pilot do zero, criando um sistema operacional completo para crescimento liderado por criadores em sete canais simultâneos de comunidade.",
      "Desenhei o plano de go-to-market do pré-lançamento de um estúdio de games, com estratégias de awareness em redes sociais e plataformas de vídeo alinhadas ao ciclo de desenvolvimento.",
      "Liderei conteúdo e gestão de comunidade para quatro projetos Web3 no Twitter e no Discord. Todos os projetos esgotaram e mantiveram audiências ativas e engajadas.",
      "Escrevo e conduzo estratégias de autoridade de marca para fundadores e CEOs no LinkedIn, transformando o conhecimento de quem opera em alcance entre decisores B2B.",
    ] },
    { sel: ".work-body-inner ul", pt: [
      "<li>→ BENCHMARKING COMPETITIVO & POSICIONAMENTO</li><li>→ NARRATIVA DE LANÇAMENTO & SISTEMA DE MENSAGEM</li><li>→ ESTRATÉGIA DE DISTRIBUIÇÃO COM CRIADORES</li><li>→ FRAMEWORKS DE ICP EM ORGÂNICO + PAGO</li>",
      "<li>→ ESTRUTURA DE NÍVEIS & FRAMEWORKS PRÓPRIOS DE KPI</li><li>→ PLAYBOOKS DE OUTREACH & TEMPLATES DE BRIEFING</li><li>→ SISTEMA DE TRACKING & RELATÓRIOS DE PERFORMANCE</li><li>→ 8M+ IMPRESSÕES ORGÂNICAS EM X & INSTAGRAM</li>",
      "<li>→ MAIS DE 20.000 PRÉ-REGISTROS EM 30 DIAS</li><li>→ REDUÇÃO DE 35% NO CPA</li><li>→ SISTEMA DE AWARENESS MULTIPLATAFORMA</li>",
      "<li>→ 4 DE 4 PROJETOS ESGOTADOS</li><li>→ $4M+ EM RECEITA GERADA</li><li>→ COPYWRITING & ARQUITETURA DE COMUNIDADE</li>",
      "<li>→ 5M+ IMPRESSÕES NO LINKEDIN DE UM CEO</li><li>→ TESTES A/B CONTÍNUOS DE CTR, CAC E ROI</li><li>→ ALINHAMENTO MULTICANAL ENTRE PAGO + ORGÂNICO</li>",
    ] },

    /* product & growth section */
    { sel: ".design-copy p", pt: "Atuo como Product and Growth Marketing Manager. Meu trabalho conecta o que um produto é capaz de fazer com as razões que levam as pessoas a escolhê-lo, e estas quatro áreas são onde eu gero mais valor." },
    { sel: ".design-card span", pt: [
      "A · PRODUCT MARKETING",
      "B · PESQUISA DE PRODUTO & UX",
      "C · PRODUCT THINKING",
      "D · GROWTH & BRAND MARKETING",
    ] },
    { sel: ".design-card p", pt: [
      "Posicionamento, narrativas de lançamento e planos de go-to-market construídos sobre entendimento real de produto. Liderei lançamentos de agentes de IA, games e projetos Web3, do primeiro benchmark ao relatório pós-lançamento.",
      "Análise de gravações de sessão no PostHog, estudos de coortes de usuários, pesquisa de preço e análises competitivas que transformam comportamento bruto em decisões claras para times de produto e growth.",
      "Eu testo o que divulgo, mapeio jornadas de usuário e fico perto de design e engenharia. Conhecer o produto a fundo é o que revela os ângulos que fazem uma campanha funcionar.",
      "Distribuição orgânica e paga trabalhando juntas. Programas de criadores, thought leadership executivo e sistemas de marca que compõem alcance, com CTR, CAC e ROI sob vigilância constante.",
    ] },

    /* leadership */
    { sel: ".lead-card h3", pt: [
      "Melhor ideia de startup do semestre",
      "Palestras sobre desenvolvimento de produto com IA",
      "Mesas redondas sobre marketing, tecnologia & inovação",
      "Formação & certificações",
    ] },
    { sel: ".lead-card > p", pt: [
      "Vencedor da competição universitária de startups da UNIFOR, depois de apresentar e defender o conceito de startup mais forte do semestre.",
      "Palestrante convidado sobre construção de produtos com IA, compartilhando workflows reais que vão da pesquisa e prototipação até o lançamento.",
      "TECNÓLOGO EM MARKETING<br>UNIVERSIDADE DE FORTALEZA · 2025 A 2026",
    ] },
    { sel: ".lead-tag", pt: [
      "UNIFOR · COMPETIÇÃO DE STARTUPS · VENCEDOR",
      "PALESTRANTE · IA × PRODUTO",
      "PAINELISTA · EVENTOS ACADÊMICOS UNIFOR",
    ] },
    { sel: ".lead-certs", pt: "<li>→ IA PARA MARKETING · 2025</li><li>→ SEO NA ERA DA IA · 2025</li><li>→ INBOUND MARKETING, HUBSPOT ACADEMY · 2024</li><li>→ MARKETING DE CONTEÚDO & REDES SOCIAIS · 2023</li><li>→ SOCIAL MEDIA & COPYWRITING · 2023</li>" },

    /* stack */
    { sel: ".stack-row h3", pt: [
      "ESTRATÉGIA & GTM",
      "DADOS & ANALYTICS",
      "AUTOMAÇÃO & CRM",
      "IA & CRIATIVO",
      "CONTEÚDO & SOCIAL",
      "PROCESSOS & GESTÃO",
    ] },
    { sel: ".stack-row p", pt: [
      "GTM · Inbound & Outbound · AARRR · ICE & RICE · ICP · Personas · Inteligência Competitiva · Estudos de Preço",
      null,
      "n8n · Clay · RD Station · Mailchimp · API do WhatsApp · Segmentação Comportamental",
      null,
      null,
      "SCRUM · Kanban · Roadmap de Produto · Liderança de Times Remotos · Trabalho Assíncrono",
    ] },

    /* contact + footer */
    { sel: ".contact-eyebrow", pt: "TEM UM PRODUTO QUE MERECE UMA BOA CONVERSA?" },
    { sel: ".contact-title .li", pt: ["VAMOS", "CONVERSAR"] },
    { sel: ".footer > span:nth-of-type(3)", pt: "PROJETADO E CONSTRUÍDO COM WORKFLOWS ASSISTIDOS POR IA · GSAP · THREE.JS" },
    { sel: ".footer-time", firstText: true, pt: "BRASIL · " },
  ];

  const applyLang = (lang) => {
    I18N.forEach((entry) => {
      document.querySelectorAll(entry.sel).forEach((el, i) => {
        const pt = Array.isArray(entry.pt) ? entry.pt[i] : entry.pt;
        if (pt == null) return;

        if (entry.attr) {
          if (el.dataset.enAttr == null) el.dataset.enAttr = el.getAttribute(entry.attr) || "";
          el.setAttribute(entry.attr, lang === "pt" ? pt : el.dataset.enAttr);
        } else if (entry.firstText) {
          if (el.dataset.enText == null) el.dataset.enText = el.firstChild.nodeValue;
          el.firstChild.nodeValue = lang === "pt" ? pt : el.dataset.enText;
        } else {
          if (el.dataset.en == null) el.dataset.en = el.innerHTML;
          el.innerHTML = lang === "pt" ? pt : el.dataset.en;
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
