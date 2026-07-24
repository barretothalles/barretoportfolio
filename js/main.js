/* ═══════════════════════════════════════════════════════
   THALLES BARRETO — PORTFOLIO v2 (Minimal)
   Theme · clock · reveals · count-up · magnetic
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const root = document.documentElement;

  /* ── theme (light default; dark only if stored) ── */
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) { /* private */ }
      themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", dark ? "#0c0a09" : "#ffffff");
    });
  }

  /* ── clock (Brazil time) ── */
  const clockEl = document.getElementById("current-time");
  if (clockEl) {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit", hour12: false,
      timeZone: "America/Fortaleza",
    });
    const tick = () => { clockEl.textContent = fmt.format(new Date()).replace(",", ""); };
    tick();
    setInterval(tick, 1000);
  }

  /* ── count-up (preserves styled symbols) ── */
  const runCount = (el) => {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const finalHTML = el.innerHTML;
    const m = el.textContent.match(/[\d.,]+/);
    if (!m || reduce) return;
    const raw = m[0].replace(/,/g, "");
    const target = parseFloat(raw);
    if (isNaN(target)) return;
    const decimals = (raw.split(".")[1] || "").length;
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = (target * eased).toFixed(decimals);
      el.innerHTML = finalHTML.replace(/[\d.,]+/, val);
      if (t < 1) requestAnimationFrame(step);
      else el.innerHTML = finalHTML;
    };
    requestAnimationFrame(step);
  };

  /* ── reveal + count-up on scroll ── */
  const reveals = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll(".count-up");
  if (!("IntersectionObserver" in window) || reduce) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));

    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { runCount(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  }

  /* ── magnetic pull (CTA + control buttons) ── */
  if (fine && !reduce) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      const strength = el.classList.contains("cta") ? 0.4 : 0.3;
      let raf = null;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => { el.style.transform = `translate(${x}px, ${y}px)`; });
      });
      el.addEventListener("mouseleave", () => {
        cancelAnimationFrame(raf);
        el.style.transform = "";
      });
    });
  }
})();
