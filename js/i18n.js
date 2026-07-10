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
    { sel: ".hero-desc", pt: "Product Marketing Manager para IA e SaaS. Transformo capacidades técnicas e insights de clientes em <strong>posicionamento, sistemas de GTM, adoção e crescimento mensurável.</strong>" },
    { sel: ".hero-roles li", pt: ["PRODUCT MARKETING", "PRODUCT GROWTH", "POSICIONAMENTO & GTM", "PRICING & PACKAGING", "SALES ENABLEMENT"] },
    { sel: ".hero-scroll", pt: 'ROLE<span class="hero-scroll-line"></span>' },
    { sel: ".hero-stats span", pt: ["<b>+34,8%</b> FREE-TO-PAID", "<b>20K+</b> CADASTROS", "<b>$300K+</b> GERENCIADOS"] },
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
    { sel: ".profile-lead", pt: "Transformo produtos digitais complexos em <em>razões claras para comprar, adotar e continuar usando.</em>" },
    { sel: ".profile-copy > p", pt: [
      "Em mais de cinco anos entre SaaS, produtos de IA e negócios digitais, evoluí de audiência e aquisição para product marketing de ponta a ponta. Hoje conecto capacidades do produto, dores do comprador e contexto de mercado em posicionamento, lançamentos, conversão e adoção.",
      "Trabalho com Produto, Growth, Design e Vendas: pesquiso usuários, mapeio ICPs, testo pricing, construo battlecards e transformo workflows técnicos em landing pages, lifecycle messaging e narrativas prontas para vendas.",
    ] },
    { sel: ".profile-meta li", pt: [
      "<span>ATUAL</span>Product Marketing Manager na UX Pilot (SaaS de Design com IA)",
      "<span>FOCO</span>AI SaaS · Posicionamento · GTM · Adoção · Product Growth",
      "<span>IDIOMAS</span>Inglês · Espanhol · Português",
    ] },

    /* impact stats */
    { sel: ".stat-desc", pt: [
      "de aumento em free-to-paid com experimentos de pricing, packaging e comunicação de valor por segmento",
      "lançamentos de produtos e campanhas liderados em AI SaaS e outros produtos digitais",
      "de aumento em ativação com experimentos guiados por pesquisa no PostHog",
      "de redução no custo de aquisição em um lançamento de produto digital",
      "impressões orgânicas somadas entre X, Instagram e LinkedIn",
      "cadastros em 30 dias para o lançamento de um produto digital",
      "em verba de influencers gerenciada, da prospecção ao relatório",
      "programa de influencers construído do zero, com níveis, playbooks e tracking",
    ] },

    /* timeline */
    { sel: ".tl-hint", pt: "ROLE →" },
    { sel: ".tl-tag", pt: [
      "PESQUISA DE AUDIÊNCIA · COMUNIDADES DIGITAIS",
      "PRODUTOS DIGITAIS · SELARTE AGENCY",
      "LANÇAMENTO DE PRODUTO · FRIED CHICKEN LABS",
      "AGÊNCIAS · MOVIMENTUM · HOUS3",
      "STARTUP DE IA · UX PILOT",
      "PRODUCT MARKETING · UX PILOT",
    ] },
    { sel: ".tl-card h3", pt: [
      "Aprendendo com o cliente",
      "Mensagem de lançamento em alta velocidade",
      "Aquisição encontra GTM",
      "Sistemas de lifecycle e demanda",
      "Distribuição product-led",
      "Product marketing de ponta a ponta",
    ] },
    { sel: ".tl-card p", pt: [
      "Comecei construindo comunidades digitais do zero, aprendendo como linguagem do público, feedback loops e formatos recorrentes influenciam aquisição, engajamento e retenção.",
      "Construí copy de lançamento, formatos recorrentes e jornadas de comunidade para produtos digitais, conectando narrativa de produto a demanda, conversão e retenção pós-lançamento.",
      "Liderei o go-to-market de um produto digital, alinhando público, canais, criativos e comunidade ao ciclo de desenvolvimento para gerar mais de 20.000 cadastros em 30 dias.",
      "Gerenciei onboarding multimarcas, geração de demanda B2B e lifecycle, usando automação de IA para newsletters e lead nurturing enquanto testava CTR, CAC e ROI.",
      "Construí um programa de distribuição com especialistas do zero, transformando casos de uso do produto em briefings, hooks e provas. O sistema atingiu 8M+ de impressões e $300K+ gerenciados.",
      "Sou responsável por posicionamento, GTM, inteligência competitiva, Voice of Customer, pricing e sales enablement para um AI SaaS. Experimentos elevaram a conversão free-to-paid em 34,8%.",
    ] },
    { sel: ".tl-metric", pt: [
      "VOC · COMUNIDADE 0→1",
      "4/4 LOTADOS · COPY DE LANÇAMENTO",
      "20K CADASTROS · −35% CPA",
      "LIFECYCLE · AUTOMAÇÃO · PIPELINE",
      "8M+ IMPRESSÕES · $300K GERENCIADOS",
      "+34,8% FREE-TO-PAID · AGORA",
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
      "Lançamento de produto digital",
      "Growth com pricing & packaging",
      "Thought leadership executivo",
    ] },
    { sel: ".work-meta", pt: [
      "UX PILOT · 2026",
      "UX PILOT · 2025 A 2026",
      "FRIED CHICKEN LABS · 2024",
      "UX PILOT · 2026",
      "HOUS3 · UX PILOT · 2025 A 2026",
    ] },
    { sel: ".work-metric", pt: [
      "GTM COMPLETO",
      "$300K+ GERENCIADOS",
      "20K EM 30 DIAS",
      "+34,8% CONVERSÃO",
      "5M+ IMPRESSÕES",
    ] },
    { sel: ".work-body-inner p", pt: [
      "Fui dono do go-to-market completo do Nodey, um agente de IA para o Figma, do benchmarking competitivo e testes práticos do produto à narrativa de lançamento e distribuição liderada por criadores.",
      "Construí o programa de influencers da UX Pilot do zero, criando um sistema operacional completo para crescimento liderado por criadores em sete canais simultâneos de comunidade.",
      "Desenhei o plano de go-to-market de um produto digital, alinhando canais de aquisição, testes criativos e engajamento da audiência ao ciclo de desenvolvimento.",
      "Conectei comportamento por segmento, geografia e percepção de valor a experimentos de pricing e packaging na UX Pilot, melhorando o caminho do uso gratuito à adoção paga.",
      "Escrevo e conduzo estratégias de autoridade de marca para fundadores e CEOs no LinkedIn, transformando o conhecimento de quem opera em alcance entre decisores B2B.",
    ] },
    { sel: ".work-body-inner ul", pt: [
      "<li>→ BENCHMARKING COMPETITIVO & POSICIONAMENTO</li><li>→ NARRATIVA DE LANÇAMENTO & SISTEMA DE MENSAGEM</li><li>→ ESTRATÉGIA DE DISTRIBUIÇÃO COM CRIADORES</li><li>→ FRAMEWORKS DE ICP EM ORGÂNICO + PAGO</li>",
      "<li>→ ESTRUTURA DE NÍVEIS & FRAMEWORKS PRÓPRIOS DE KPI</li><li>→ PLAYBOOKS DE OUTREACH & TEMPLATES DE BRIEFING</li><li>→ SISTEMA DE TRACKING & RELATÓRIOS DE PERFORMANCE</li><li>→ 8M+ IMPRESSÕES ORGÂNICAS EM X & INSTAGRAM</li>",
      "<li>→ MAIS DE 20.000 PRÉ-REGISTROS EM 30 DIAS</li><li>→ REDUÇÃO DE 35% NO CPA</li><li>→ SISTEMA DE AWARENESS MULTIPLATAFORMA</li>",
      "<li>→ 34,8% DE AUMENTO EM FREE-TO-PAID</li><li>→ EXPERIMENTOS DE PRICING POR GEOGRAFIA</li><li>→ COMUNICAÇÃO DE VALOR POR SEGMENTO</li>",
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
      "Posicionamento, narrativas de lançamento e planos de go-to-market construídos sobre entendimento real de produto. Crio ICPs, personas, battlecards, launch briefs e propostas de valor prontas para vendas em AI SaaS e produtos digitais.",
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
