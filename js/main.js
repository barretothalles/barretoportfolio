/* ═══════════════════════════════════════════════════════
   THALLES BARRETO — PORTFOLIO
   GSAP + ScrollTrigger + Lenis + Three.js
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const isDesktop = () => window.innerWidth > 900;

  if (prefersReduced) document.body.classList.add("no-anim");

  gsap.registerPlugin(ScrollTrigger);

  /* ─────────── Lenis smooth scroll ─────────── */
  let lenis = null;
  if (!prefersReduced) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: 0 });
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ─────────── Preloader ─────────── */
  const preloader = document.getElementById("preloader");
  const preCount = document.getElementById("preCount");
  const preBar = document.getElementById("preBar");

  const heroIntro = () => {
    document.body.removeAttribute("data-loading");
    if (prefersReduced) { preloader.remove(); return; }

    const tl = gsap.timeline();
    tl.to(preloader, { yPercent: -100, duration: 0.9, ease: "power3.inOut" })
      .set(preloader, { display: "none" })
      .to(".hero-title .li", { y: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 }, "-=0.55")
      .from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.7, ease: "power2.out" }, "-=0.7")
      .from(".hero-desc", { opacity: 0, y: 24, duration: 0.7, ease: "power2.out" }, "-=0.5")
      .from(".hero-roles li", { opacity: 0, x: 24, duration: 0.5, ease: "power2.out", stagger: 0.07 }, "-=0.55")
      .from(".hero-bottom", { opacity: 0, duration: 0.7 }, "-=0.3")
      .from(".nav", { opacity: 0, duration: 0.8, ease: "power2.out", clearProps: "opacity" }, "-=0.6");
  };

  if (prefersReduced) {
    heroIntro();
  } else {
    const counter = { v: 0 };
    gsap.to(counter, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        const n = Math.round(counter.v);
        preCount.textContent = String(n).padStart(2, "0");
        preBar.style.width = n + "%";
      },
      onComplete: heroIntro,
    });
  }

  /* ─────────── Custom cursor ─────────── */
  if (isFinePointer && !prefersReduced) {
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
  if (isFinePointer && !prefersReduced) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      const strength = 0.35;
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

  /* anchor links through lenis */
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

  /* Content below the hero is intentionally static. This avoids the visual
     shimmer caused by moving sections over viewport-fixed effects. */
  document.querySelectorAll(".contact-title .li").forEach((el) => (el.style.transform = "none"));

  /* ─────────── Count-up stats ─────────── */
  document.querySelectorAll(".count").forEach((el) => {
    const value = parseFloat(el.dataset.value);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (isNaN(value) || prefersReduced) return;

    const obj = { v: 0 };
    gsap.to(obj, {
      v: value, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        const decimals = String(value).includes(".") ? String(value).split(".")[1].length : 0;
        el.textContent = prefix + obj.v.toFixed(decimals) + suffix;
      },
    });
  });

  /* ─────────── Horizontal timeline ─────────── */
  const tlTrack = document.getElementById("tlTrack");
  const tlPin = document.getElementById("tlPin");
  const tlProgress = document.getElementById("tlProgress");

  ScrollTrigger.matchMedia({
    "(min-width: 901px)": () => {
      if (prefersReduced) return;
      const getDistance = () => tlTrack.scrollWidth - window.innerWidth + 64;
      gsap.to(tlTrack, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: tlPin,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + getDistance(),
          invalidateOnRefresh: true,
          onUpdate: (self) => { tlProgress.style.width = self.progress * 100 + "%"; },
        },
      });
    },
    "(max-width: 900px)": () => {
      return;
    },
  });

  /* ─────────── Work accordions ─────────── */
  document.querySelectorAll(".work-item").forEach((item) => {
    const head = item.querySelector(".work-head");
    const body = item.querySelector(".work-body");

    head.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      /* close others */
      document.querySelectorAll(".work-item.is-open").forEach((other) => {
        if (other === item) return;
        other.classList.remove("is-open");
        other.querySelector(".work-head").setAttribute("aria-expanded", "false");
        gsap.to(other.querySelector(".work-body"), { height: 0, duration: 0.5, ease: "power3.inOut" });
      });

      item.classList.toggle("is-open", !isOpen);
      head.setAttribute("aria-expanded", String(!isOpen));
      gsap.to(body, {
        height: isOpen ? 0 : body.scrollHeight + "px",
        duration: 0.55, ease: "power3.inOut",
        onComplete: () => {
          if (!isOpen) body.style.height = "auto";
          ScrollTrigger.refresh();
        },
      });
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

  /* ─────────── Three.js — ember particle terrain ─────────── */
  const initWebGL = () => {
    if (prefersReduced || typeof THREE === "undefined") return;

    const canvas = document.getElementById("webgl");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070605, 0.055);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2.6, 9);
    camera.lookAt(0, 0, 0);

    /* point sprite */
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

    /* particle grid */
    const mobile = window.innerWidth < 900;
    const COLS = mobile ? 70 : 130;
    const ROWS = mobile ? 36 : 60;
    const SPREAD_X = 34;
    const SPREAD_Z = 22;
    const total = COLS * ROWS;

    const positions = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);
    const cEmber = new THREE.Color(0xff4d00);
    const cAmber = new THREE.Color(0xff8a3c);
    const cDim = new THREE.Color(0x3a2a1c);

    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        positions[i * 3] = (x / (COLS - 1) - 0.5) * SPREAD_X;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (z / (ROWS - 1) - 0.5) * SPREAD_Z;

        const t = Math.random();
        const c = t > 0.92 ? cAmber : t > 0.6 ? cEmber : cDim;
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
        i++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.09,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    points.position.y = -1.2;
    scene.add(points);

    /* mouse parallax */
    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    /* pause when hero offscreen / tab hidden */
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

  /* refresh triggers once fonts settle (layout shifts) */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
