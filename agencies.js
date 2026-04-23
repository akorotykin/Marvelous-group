// Agency data — original interpretations of brand archetypes.
// Logos are ORIGINAL typographic placeholders (SVG) — replaced with real logos if uploaded via CMS.

// ── CMS logo loader ──────────────────────────────────────────────
// Fetches _data/logo_agencies.json (saved by Netlify CMS) and
// replaces SVG placeholders with real <img> tags where a logo exists.
window._CMS_LOGOS = {};
(function() {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/_data/logo_agencies.json", false);
    xhr.send();
    if (xhr.status === 200) window._CMS_LOGOS = JSON.parse(xhr.responseText);
  } catch(e) {}
})();

function _logoOrSvg(id, svgFallback) {
  var src = window._CMS_LOGOS["logo_" + id];
  if (src) return "<img src=\"" + src + "\" alt=\"" + id + " logo\" style=\"max-width:100%;max-height:100%;object-fit:contain;\" />";
  return svgFallback;
}
// ────────────────────────────────────────────────────────────────

window.AGENCIES = [
  {
    id: "m",
    slug: "m",
    name: "[M]",
    nameFull: "M AGENCY",
    tag: "flagship",
    tagline: "Креатив, стратегия, рекламные кампании, brand building",
    desc: "Флагманское агентство группы. Полный цикл креатива — от позиционирования до кампаний «ключ-в-руки».",
    about: [
      "Флагман экосистемы. M Agency отвечает за стратегию бренда, большие креативные идеи и масштабные рекламные кампании. Здесь рождается платформа, которую потом раскатывают остальные агентства группы.",
      "Команда работает на стыке аналитики, копирайтинга, дизайна и режиссуры. Формат — полный цикл: от исследования и позиционирования до продакшна и размещения."
    ],
    services: [
      ["Brand Strategy", "позиционирование · tone of voice · нарратив"],
      ["Brand Identity", "логотипы · системы · гайдлайны"],
      ["Creative Campaigns", "концепция · креатив · продакшн"],
      ["Communication Platform", "ключевые сообщения · месседж-архитектура"]
    ],
    logo: _logoOrSvg("m", `
      <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" aria-label="[M]">
        <g fill="currentColor">
          <text x="130" y="95" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="110" text-anchor="middle" letter-spacing="-3">[<tspan dx="-2">M</tspan><tspan dx="-2">]</tspan></text>
        </g>
      </svg>`)
  },

  {
    id: "now",
    slug: "now",
    name: "NOW",
    nameFull: "NOW EVENTS",
    tag: "events",
    tagline: "Ивенты, партнёрские интеграции, маркетинговые коммуникации",
    desc: "Ивент-агентство: корпоративные события, фестивали, партнёрские активации под ключ.",
    about: [
      "Агентство событийного маркетинга. Делает мероприятия, в которых есть смысл: от камерных pr-ужинов и брендовых pop-up до корпоративных конференций и городских фестивалей.",
      "Сильная сторона — интеграции: NOW умеет собирать партнёрские коллаборации между брендами, медиа и площадками. Это даёт клиенту охват и снижает бюджет."
    ],
    services: [
      ["Brand Events", "запуски · презентации · pop-up"],
      ["Corporate Events", "конференции · форумы · внутренние события"],
      ["Partner Integrations", "коллаборации · ко-брендинг"],
      ["Festivals", "городские события · фестивали"]
    ],
    logo: _logoOrSvg("now", `
      <svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" aria-label="NOW">
        <g fill="currentColor" font-family="Space Grotesk, sans-serif" font-weight="700" letter-spacing="-2">
          <text x="130" y="90" font-size="92" text-anchor="middle">N<tspan fill="currentColor">:</tspan>OW</text>
          <rect x="120" y="44" width="4" height="18" />
          <rect x="120" y="70" width="4" height="4" />
        </g>
      </svg>`)
  },

  {
    id: "cartel",
    slug: "cartel",
    name: "CARTEL",
    nameFull: "CARTEL SOCIAL",
    tag: "smm",
    tagline: "SMM, аудит соцсетей, контент-план, стратегии, спецпроекты",
    desc: "Social-first агентство: от аудита и стратегии до ежедневного контента и спецпроектов.",
    about: [
      "Social-first агентство. Закрывает полный цикл работы с соцсетями: от аудита текущего присутствия и разработки контент-стратегии до ежедневного продакшна, сообществ и аналитики.",
      "Отдельное направление — спецпроекты: нестандартные форматы, которые собирают охваты и упоминания без покупной рекламы."
    ],
    services: [
      ["SMM", "ведение · community management"],
      ["Content Strategy", "контент-план · рубрикатор"],
      ["Social Audit", "диагностика · конкурентный анализ"],
      ["Спецпроекты", "вирусные механики · brand acts"]
    ],
    logo: _logoOrSvg("cartel", `
      <svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" aria-label="CARTEL">
        <g fill="currentColor" font-family="Space Grotesk, sans-serif" font-weight="700">
          <text x="130" y="85" font-size="68" text-anchor="middle" letter-spacing="1">CARTEL</text>
        </g>
      </svg>`)
  },

  {
    id: "bizar",
    slug: "bizar",
    name: "BIZAR",
    nameFull: "BIZAR MARKET",
    tag: "art",
    tagline: "Маркетплейс современного искусства",
    desc: "Платформа для современного искусства: галеристы, художники, коллекционеры в одном пространстве.",
    about: [
      "Маркетплейс современного искусства и связующее звено между художниками, галереями и коллекционерами. Агентство помогает брендам интегрироваться в арт-контекст: коллаборации с художниками, арт-тиражи, выставочные проекты.",
      "Работает и как отдельный продукт — онлайн-платформа с авторскими работами, — и как арт-консалтинг для компаний."
    ],
    services: [
      ["Art Marketplace", "платформа · витрина художников"],
      ["Brand × Art", "коллаборации · арт-тиражи"],
      ["Exhibitions", "кураторство · продакшн"],
      ["Art Consulting", "корпоративные коллекции"]
    ],
    logo: _logoOrSvg("bizar", `
      <svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" aria-label="BIZAR">
        <g fill="currentColor" font-family="Space Grotesk, sans-serif" font-weight="600">
          <path d="M 38 30 L 58 30 L 38 55 L 58 55 L 38 85 Z" fill="none" stroke="currentColor" stroke-width="4"/>
          <text x="160" y="80" font-size="62" text-anchor="middle" letter-spacing="2">BIZAR</text>
        </g>
      </svg>`)
  },

  {
    id: "shik",
    slug: "shik",
    name: "ШИК",
    nameFull: "МОСКОВСКИЙ ШИК",
    tag: "branding",
    tagline: "Брендинг, айдентика, разработка визуального стиля",
    desc: "Бренд-дизайн студия: айдентика, упаковка, визуальные системы со столичным характером.",
    about: [
      "Дизайн-студия с фокусом на айдентике и визуальных системах. Делает брендинг, который работает в диджитале, в городе и в рознице: логотипы, упаковка, навигация, типографика.",
      "Отдельное направление — ребрендинги существующих компаний с сохранением эквити бренда и аккуратной эволюцией визуального языка."
    ],
    services: [
      ["Brand Identity", "логотипы · знаки · система"],
      ["Packaging", "упаковка · POSM"],
      ["Type & Custom", "типографика · кастомные шрифты"],
      ["Rebranding", "эволюция визуального языка"]
    ],
    logo: _logoOrSvg("shik", `
      <svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" aria-label="ШИК">
        <g fill="currentColor">
          <polygon points="130,18 134,30 146,30 136,38 140,50 130,42 120,50 124,38 114,30 126,30" />
          <text x="130" y="45" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="3" text-anchor="middle" fill="currentColor">МОСКОВСКИЙ</text>
          <text x="130" y="115" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="72" letter-spacing="2" text-anchor="middle">ШИК</text>
        </g>
      </svg>`)
  },

  {
    id: "teammate",
    slug: "teammate",
    name: "TEAMMATE",
    nameFull: "TEAMMATE GAMING",
    tag: "gaming",
    tagline: "Креативные кампании и стратегии на территории гейминга и киберспорта",
    desc: "Gaming-агентство: интеграции в игры, киберспорт, работа с геймерской аудиторией.",
    about: [
      "Агентство на территории гейминга и киберспорта. Помогает брендам говорить с геймерской аудиторией на её языке: интеграции в игры, коллаборации с киберспортивными клубами, стримерами и турнирами.",
      "Закрывает полный цикл — от стратегии входа на рынок до продакшна инструментов (скинов, рекламных роликов, ивентов в игре и офлайн)."
    ],
    services: [
      ["Gaming Strategy", "вход бренда на gaming-рынок"],
      ["Esports", "партнёрства · турниры"],
      ["In-game Integrations", "интеграции · коллаборации"],
      ["Streamer Marketing", "работа со стримерами"]
    ],
    logo: _logoOrSvg("teammate", `
      <svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" aria-label="TEAMMATE">
        <g fill="currentColor">
          <circle cx="40" cy="60" r="26" fill="none" stroke="currentColor" stroke-width="4"/>
          <text x="40" y="68" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="22" text-anchor="middle">TM</text>
          <text x="160" y="72" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="44" letter-spacing="2" text-anchor="middle">TEAMMATE</text>
        </g>
      </svg>`)
  },

  {
    id: "reachninja",
    slug: "reach-ninja",
    name: "reach ninja",
    nameFull: "REACH NINJA",
    tag: "digital",
    tagline: "Digital-медиа агентство, спецпроекты, блогеры",
    desc: "Медийное агентство: перфоманс, инфлюенс-маркетинг, спецпроекты на площадках.",
    about: [
      "Digital-медиа агентство. Закупка охватных и перфоманс-форматов, планирование размещений, работа с блогерами и медийными площадками.",
      "Сильная сторона — спецпроекты с медиа и креаторами: нативные форматы, которые собирают больше реакций, чем стандартная баннерная реклама при сравнимом бюджете."
    ],
    services: [
      ["Digital Media", "планирование · закупка"],
      ["Influence Marketing", "блогеры · инфлюенсеры"],
      ["Media Спецпроекты", "нативные интеграции"],
      ["Performance", "перфоманс-кампании · аналитика"]
    ],
    logo: _logoOrSvg("reachninja", `
      <svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" aria-label="reach ninja">
        <g fill="currentColor" font-family="Space Grotesk, sans-serif" font-weight="500">
          <text x="130" y="60" font-size="44" text-anchor="middle" letter-spacing="-1">reach ninja</text>
          <line x1="68" y1="70" x2="192" y2="70" stroke="currentColor" stroke-width="1.5"/>
        </g>
      </svg>`)
  },

  {
    id: "ai",
    slug: "ai",
    name: "A+I",
    nameFull: "A+I · AI INFLUENCERS",
    tag: "ai",
    tagline: "Цифровые инфлюенсеры и аватары",
    desc: "AI-агентство: создание цифровых персонажей и виртуальных амбассадоров брендов.",
    about: [
      "Агентство цифровых персонажей. Разрабатывает виртуальных инфлюенсеров и AI-амбассадоров для брендов — от концепции и визуального канона до голоса, характера и контент-плана.",
      "Работает на стыке дизайна, 3D, копирайтинга и машинного обучения. Результат — управляемый цифровой герой, который всегда «в тоне» и всегда на связи."
    ],
    services: [
      ["AI Persona Design", "концепция · визуал · голос"],
      ["Virtual Ambassadors", "цифровые амбассадоры брендов"],
      ["3D & Motion", "продакшн визуала · анимация"],
      ["Content Operations", "ведение персонажа"]
    ],
    logo: _logoOrSvg("ai", `
      <svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg" aria-label="A+I">
        <g fill="currentColor" font-family="Space Grotesk, sans-serif" font-weight="700">
          <text x="130" y="75" font-size="80" text-anchor="middle" letter-spacing="-2">A<tspan dx="-4" font-weight="300">+</tspan><tspan dx="-4">I</tspan></text>
        </g>
      </svg>`)
  }
];
