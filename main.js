// MARVELOUS GROUP — main.js
// Renders the agency grid, handles modal, reveal-on-scroll, form, nav.

(function(){
  const AGENCIES = window.AGENCIES || [];

  // ---------- Render grid ----------
  const grid = document.getElementById("agencyGrid");
  const invertedIds = new Set(["now", "ai"]); // visual rhythm
  AGENCIES.forEach((a, i) => {
    const card = document.createElement("a");
    card.href = `agency/${a.slug}.html`;
    card.className = "card" + (invertedIds.has(a.id) ? " card--inverse" : "");
    card.dataset.id = a.id;
    card.setAttribute("aria-label", a.name);
    card.innerHTML = `
      <span class="card__index">0${i+1}</span>
      <span class="card__tag">${a.tag}</span>
      <span class="card__arrow">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 14L14 4M14 4H7M14 4V11" stroke="currentColor" stroke-width="1.4"/></svg>
      </span>
      <div class="card__logo">${a.logo}</div>
      <div class="card__desc">${a.tagline}</div>
    `;
    // clicking the card opens the modal instead of navigating immediately
    card.addEventListener("click", (e) => {
      // allow cmd/ctrl-click to open stub page in new tab
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      openModal(a.id);
    });
    grid.appendChild(card);
  });

  // ---------- Scroll reveal ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        ent.target.classList.add("is-in");
        io.unobserve(ent.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

  // stagger-in for cards
  const cardIo = new IntersectionObserver((entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        const idx = Array.from(grid.children).indexOf(ent.target);
        ent.target.style.transitionDelay = (idx % 4) * 80 + "ms";
        ent.target.classList.add("is-in");
        cardIo.unobserve(ent.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".card").forEach((el) => cardIo.observe(el));

  // ---------- Modal ----------
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  function openModal(id){
    const a = AGENCIES.find((x) => x.id === id);
    if(!a) return;
    modalBody.innerHTML = renderDetail(a);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__panel").scrollTop = 0;
  }
  function closeModal(){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function renderDetail(a){
    const inverseLogo = invertedIds.has(a.id) ? "detail__logo--inverse" : "";
    return `
      <section class="detail">
        <div class="detail__head">
          <div>
            <div class="mono detail__eyebrow">агентство · ${a.tag}</div>
            <h2 class="detail__name">${a.nameFull}</h2>
            <p class="detail__tagline">${a.tagline}</p>
          </div>
          <div class="detail__logo ${inverseLogo}">${a.logo}</div>
        </div>
        <div class="detail__body">
          <div>
            <h3>О агентстве</h3>
            ${a.about.map((p) => `<p>${p}</p>`).join("")}
          </div>
          <div>
            <h3>Услуги</h3>
            <ul class="detail__services">
              ${a.services.map((s) => `<li><strong>${s[0]}</strong><span>${s[1]}</span></li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="detail__cta">
          <a class="btn" href="agency/${a.slug}.html">
            <span>Открыть страницу агентства</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" stroke-width="1.5"/></svg>
          </a>
          <a class="ghost" href="#contacts" onclick="document.getElementById('modal').classList.remove('is-open');document.body.style.overflow='';">Написать бриф</a>
        </div>
      </section>
    `;
  }

  // ---------- Chips for form ----------
  const chipsWrap = document.getElementById("chips");
  AGENCIES.forEach((a) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = a.nameFull;
    chip.dataset.id = a.id;
    chip.addEventListener("click", () => chip.classList.toggle("is-on"));
    chipsWrap.appendChild(chip);
  });

  // ---------- Form ----------
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (!data.get("name") || !data.get("contact")){
      status.textContent = "Заполните имя и контакт";
      status.classList.remove("is-ok");
      return;
    }
    status.textContent = "Отправлено. Свяжемся в течение рабочего дня.";
    status.classList.add("is-ok");
    form.reset();
    document.querySelectorAll(".chip.is-on").forEach((c) => c.classList.remove("is-on"));
  });

  // ---------- Smooth anchor scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
