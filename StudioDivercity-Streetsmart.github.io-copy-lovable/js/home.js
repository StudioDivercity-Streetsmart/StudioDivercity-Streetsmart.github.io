// StreetSmart home page — mobile menu + lightweight carousels (no framework).

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- mobile menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    const setOpen = (open) => {
      mobileNav.classList.toggle("show", open);
      hamburger.setAttribute("aria-expanded", String(open));
      hamburger.textContent = open ? "✕" : "☰";
      hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    hamburger.addEventListener("click", () =>
      setOpen(!mobileNav.classList.contains("show"))
    );

    mobileNav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => setOpen(false))
    );
  }

  /* ---------- carousels ---------- */
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);

  function setupCarousel(root) {
    const viewport = root.querySelector(".carousel-viewport");
    const track = root.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevBtn = root.querySelector('[data-dir="prev"]');
    const nextBtn = root.querySelector('[data-dir="next"]');
    if (!viewport || !track || slides.length === 0) return;

    viewport.style.touchAction = "pan-y";

    let index = 0;
    let step = 0; // px width of one slide
    let maxIndex = 0;

    function measure() {
      step = slides[0].getBoundingClientRect().width;
      const perView = step > 0 ? Math.round(viewport.clientWidth / step) : 1;
      maxIndex = Math.max(0, slides.length - Math.max(1, perView));
      if (index > maxIndex) index = maxIndex;
    }

    function render(animate = true) {
      track.style.transition = animate
        ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)"
        : "none";
      track.style.transform = `translateX(${-index * step}px)`;
      updateButtons();
    }

    function updateButtons() {
      [
        [prevBtn, index <= 0],
        [nextBtn, index >= maxIndex],
      ].forEach(([btn, disabled]) => {
        if (!btn) return;
        btn.disabled = disabled;
        btn.style.opacity = disabled ? "0.4" : "1";
        btn.style.cursor = disabled ? "default" : "pointer";
      });
    }

    function go(delta) {
      index = Math.min(maxIndex, Math.max(0, index + delta));
      render(true);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => go(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => go(1));

    /* drag / swipe */
    let dragging = false;
    let startX = 0;
    let baseTranslate = 0;

    function onDown(e) {
      dragging = true;
      startX = e.clientX;
      baseTranslate = -index * step;
      track.style.transition = "none";
      viewport.setPointerCapture?.(e.pointerId);
    }

    function onMove(e) {
      if (!dragging) return;
      const dx = e.clientX - startX;
      track.style.transform = `translateX(${baseTranslate + dx}px)`;
    }

    function onUp(e) {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      const threshold = step / 4;
      if (dx <= -threshold) go(1);
      else if (dx >= threshold) go(-1);
      else render(true);
    }

    viewport.addEventListener("pointerdown", onDown);
    viewport.addEventListener("pointermove", onMove);
    viewport.addEventListener("pointerup", onUp);
    viewport.addEventListener("pointercancel", onUp);

    // avoid native image drag interfering with swipe
    track.querySelectorAll("img").forEach((img) => (img.draggable = false));

    measure();
    render(false);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measure();
        render(false);
      }, 150);
    });
  }
});
