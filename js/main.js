/* ═══════════════════════════════════════════════════════
   THALLES BARRETO — PORTFOLIO v2
   GSAP + ScrollTrigger + Lenis + Three.js
   No preloader · theme-aware · word reveals
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const hasMotion = window.gsap && !prefersReduced;

  if (!hasMotion) document.body.classList.add("no-anim");
  if (window.gsap) gsap.registerPlugin(ScrollTrigger);

  /* ─────────── Lenis smooth scroll ─────────── */
  let lenis = null;
  if (hasMotion && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: 0 });
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ─────────── Theme toggle ─────────── */
  const themeBtn = document.getElementById("themeToggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let onThemeChange = null; /* webgl hook, set below */

  const applyThemeSideEffects = () => {
    const light = document.documentElement.classList.contains("light");
    if (themeMeta) themeMeta.setAttribute("content", light ? "#f4f1ea" : "#070605");
    themeBtn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    if (onThemeChange) onThemeChange(light);
  };
  themeBtn.addEventListener("click", () => {
    const light = document.documentElement.classList.toggle("light");
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) { /* private mode */ }
    applyThemeSideEffects();
  });

  /* ─────────── Hero intro (fast, no preloader) ─────────── */
  const intro = () => {
    if (!hasMotion) return;
    gsap.timeline()
      .to(".hero-title .li, .hero-role .li", { y: 0, duration: 0.9, ease: "power4.out", stagger: 0.09 })
      .from(".hero-eyebrow", { opacity: 0, duration: 0.5 }, "-=0.6")
      .from(".hero-desc, .hero-proof, .hero-ctas", { opacity: 0, y: 18, duration: 0.6, ease: "power2.out", stagger: 0.08 }, "-=0.5")
      .from(".hero-bottom", { opacity: 0, duration: 0.5 }, "-=0.3")
      .from(".nav", { opacity: 0, duration: 0.6, clearProps: "opacity" }, "-=0.5");
  };
  if (document.fonts && document.fonts.ready) {
    let started = false;
    const startIntro = () => { if (started) return; started = true; intro(); };
    document.fonts.ready.then(startIntro);
    setTimeout(startIntro, 900);
  } else {
    intro();
  }

  /* ─────────── Custom cursor ─────────── */
  if (isFinePointer && hasMotion) {
    const cursor = document.querySelector(".cursor");
    const dot = cursor.querySelector(".cursor-dot");
    const ring = cursor.querySelector(".cursor-ring");
    const label = cursor.querySelector(".cursor-label");
    let mx = -100, my = -100, rx = -100, ry = -100;

    window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    gsap.ticker.add(() => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
    });
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const text = el.getAttribute("data-cursor-label");
        if (text) { label.textContent = text; cursor.classList.add("has-label"); }
        else cursor.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover", "has-label"));
    });
  }

  /* ─────────── Magnetic elements ─────────── */
  if (isFinePointer && hasMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      const strength = 0.3;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * strength,
          y: (e.clientY - r.top - r.height / 2) * strength,
          duration: 0.4, ease: "power2.out",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });
  }

  /* ─────────── Nav behavior ─────────── */
  const nav = document.getElementById("nav");
  if (window.gsap) {
    let lastY = 0;
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        nav.classList.toggle("is-scrolled", y > 60);
        if (y > 400 && y > lastY + 4) nav.classList.add("is-hidden");
        else if (y < lastY - 4) nav.classList.remove("is-hidden");
        lastY = y;
      },
    });
  } else {
    window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", window.scrollY > 60), { passive: true });
  }

  /* anchor links */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        closeMenu();
        scrollTo(id);
      }
    });
  });

  /* ─────────── Mobile menu ─────────── */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const closeMenu = () => {
    menu.classList.remove("is-open");
    burger.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    if (lenis) lenis.start();
  };
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
  });

  /* ─────────── Scroll reveals ─────────── */
  if (hasMotion) {
    document.querySelectorAll(".sec-title, .profile-lead, .case-lead").forEach((el) => {
      gsap.from(el, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 86%" },
      });
    });
    document.querySelectorAll(".stat, .op-card, .case-mini, .career-row, .lead-list li, .case-block").forEach((el) => {
      gsap.from(el, {
        opacity: 0, y: 30, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
    document.querySelectorAll(".reveal-img").forEach((el) => {
      gsap.to(el, {
        clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 84%" },
      });
    });

    /* contact title lines */
    gsap.to(".contact-title .li", {
      y: 0, duration: 1.0, ease: "power4.out", stagger: 0.12,
      scrollTrigger: { trigger: ".contact", start: "top 75%" },
    });
  }

  /* ─────────── Word reveal on scroll (scrub) ─────────── */
  document.querySelectorAll("[data-words]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(" ");
    if (!hasMotion) return;
    gsap.to(el.querySelectorAll(".w"), {
      opacity: 1, stagger: 0.06, ease: "none",
      scrollTrigger: { trigger: el, start: "top 88%", end: "top 42%", scrub: 0.4 },
    });
  });

  /* ─────────── Count-up stats ─────────── */
  document.querySelectorAll(".count").forEach((el) => {
    const value = parseFloat(el.dataset.value);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    if (isNaN(value) || !hasMotion) return;

    const obj = { v: 0 };
    gsap.to(obj, {
      v: value, duration: 1.6, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => { el.textContent = prefix + obj.v.toFixed(decimals) + suffix; },
    });
  });

  /* ─────────── Exhibit bar animation ─────────── */
  document.querySelectorAll(".case-exhibit").forEach((el) => {
    if (!window.gsap) { el.classList.add("is-inview"); return; }
    ScrollTrigger.create({
      trigger: el, start: "top 82%", once: true,
      onEnter: () => el.classList.add("is-inview"),
    });
  });

  /* ─────────── Local time in footer ─────────── */
  const timeEl = document.getElementById("localTime");
  const tickTime = () => {
    timeEl.textContent = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit", minute: "2-digit", hour12: false,
      timeZone: "America/Fortaleza",
    }).format(new Date());
  };
  tickTime();
  setInterval(tickTime, 30000);

  /* ─────────── Three.js — theme-aware particle terrain ─────────── */
  const initWebGL = () => {
    if (prefersReduced || typeof THREE === "undefined") return;

    const canvas = document.getElementById("webgl");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2.6, 9);
    camera.lookAt(0, 0, 0);

    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,0.55)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    const mobile = window.innerWidth < 900;
    const COLS = mobile ? 70 : 130;
    const ROWS = mobile ? 36 : 60;
    const SPREAD_X = 34;
    const SPREAD_Z = 22;
    const total = COLS * ROWS;

    const positions = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);
    const colorRoll = new Float32Array(total); /* remember each point's palette slot */

    const palettes = {
      dark: { hot: 0xff8a3c, mid: 0xff4d00, dim: 0x3a2a1c, fog: 0x070605, blending: THREE.AdditiveBlending, opacity: 0.9 },
      light: { hot: 0xd84300, mid: 0xe86a30, dim: 0xcbc2b0, fog: 0xf4f1ea, blending: THREE.NormalBlending, opacity: 0.55 },
    };

    const paintColors = (light) => {
      const p = light ? palettes.light : palettes.dark;
      const cHot = new THREE.Color(p.hot), cMid = new THREE.Color(p.mid), cDim = new THREE.Color(p.dim);
      for (let j = 0; j < total; j++) {
        const t = colorRoll[j];
        const c = t > 0.92 ? cHot : t > 0.6 ? cMid : cDim;
        colors[j * 3] = c.r; colors[j * 3 + 1] = c.g; colors[j * 3 + 2] = c.b;
      }
    };

    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        positions[i * 3] = (x / (COLS - 1) - 0.5) * SPREAD_X;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (z / (ROWS - 1) - 0.5) * SPREAD_Z;
        colorRoll[i] = Math.random();
        i++;
      }
    }

    const isLightNow = () => document.documentElement.classList.contains("light");
    paintColors(isLightNow());

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.09, map: sprite, vertexColors: true, transparent: true,
      depthWrite: false, sizeAttenuation: true,
    });

    const applyMaterialTheme = (light) => {
      const p = light ? palettes.light : palettes.dark;
      mat.blending = p.blending;
      mat.opacity = p.opacity;
      mat.needsUpdate = true;
      scene.fog = new THREE.FogExp2(p.fog, 0.055);
    };
    applyMaterialTheme(isLightNow());

    const points = new THREE.Points(geo, mat);
    points.position.y = -1.2;
    scene.add(points);

    onThemeChange = (light) => {
      paintColors(light);
      geo.attributes.color.needsUpdate = true;
      applyMaterialTheme(light);
    };

    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    let heroVisible = true;
    new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; }, { threshold: 0 })
      .observe(document.getElementById("hero"));

    const pos = geo.attributes.position;
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      if (!heroVisible || document.hidden) return;

      const t = clock.getElapsedTime();
      for (let j = 0; j < total; j++) {
        const px = pos.array[j * 3];
        const pz = pos.array[j * 3 + 2];
        pos.array[j * 3 + 1] =
          Math.sin(px * 0.45 + t * 0.7) * 0.55 +
          Math.cos(pz * 0.5 + t * 0.55) * 0.45 +
          Math.sin((px + pz) * 0.22 + t * 0.32) * 0.5;
      }
      pos.needsUpdate = true;

      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.03;
      camera.position.y += (2.6 - mouseY * 0.8 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };
  initWebGL();
  applyThemeSideEffects();

  /* refresh triggers once fonts settle */
  if (window.gsap && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
