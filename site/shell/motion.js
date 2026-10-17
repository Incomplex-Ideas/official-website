// Shared motion: scroll reveal and header state. Kept dependency-free so the
// page stays light; every effect degrades to static content without it.
document.documentElement.classList.add("js");

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const items = document.querySelectorAll(".reveal");

if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("in"));
} else {
  // Unobserve after the first reveal: replaying on every scroll feels noisy
  // and keeps the observer cost constant.
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        io.unobserve(e.target);
        // Drop the reveal transition once done: its slow 0.7s timing would
        // otherwise override the faster hover transitions of cards and buttons.
        e.target.addEventListener(
          "transitionend",
          (ev) => {
            if (ev.propertyName === "opacity") e.target.classList.remove("reveal", "in");
          },
          { once: false }
        );
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

const header = document.querySelector(".site-header");
const bar = header.querySelector(".scroll-progress");
let idleTimer;
// 600ms of no scroll counts as "reading": long enough not to flicker between
// wheel ticks, short enough to feel responsive.
const IDLE_MS = 600;
let ticking = false;
addEventListener(
  "scroll",
  () => {
    header.classList.add("active");
    bar.classList.add("active");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      header.classList.remove("active");
      bar.classList.remove("active");
    }, IDLE_MS);
    if (ticking) return;
    ticking = true;
    // rAF-throttled so the scroll handler never blocks painting.
    requestAnimationFrame(() => {
      header.classList.toggle("scrolled", scrollY > 8);
      const max = document.documentElement.scrollHeight - innerHeight;
      header.style.setProperty("--progress", max > 0 ? Math.min(scrollY / max, 1) : 0);
      ticking = false;
    });
  },
  { passive: true }
);
addEventListener("resize", () => dispatchEvent(new Event("scroll")), { passive: true });
