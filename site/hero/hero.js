// Moves a glowing dot along the hero line, then lights the whole line up.
// Done in JS (getPointAtLength) because CSS offset-path does not follow the
// SVG viewBox scaling reliably across browsers.
(() => {
  const svg = document.querySelector(".hero-line");
  if (!svg) return;
  const path = svg.querySelector(".line-base");
  const dot = svg.querySelector(".line-dot");
  const light = () => svg.classList.add("lit");

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return light();

  const len = path.getTotalLength();
  const DURATION = 3200;
  const START_DELAY = 700; // lets the hero text finish rising first
  // Ease-in-out so the dot accelerates through the tangle and settles on the straight run.
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  let t0 = 0;
  const step = (now) => {
    if (!t0) t0 = now;
    const t = Math.min((now - t0) / DURATION, 1);
    const p = path.getPointAtLength(len * ease(t));
    dot.setAttribute("cx", p.x);
    dot.setAttribute("cy", p.y);
    if (t < 1) return requestAnimationFrame(step);
    dot.style.transition = "opacity 0.5s";
    dot.style.opacity = 0;
    light();
  };

  setTimeout(() => {
    dot.style.opacity = 1;
    requestAnimationFrame(step);
  }, START_DELAY);
})();
