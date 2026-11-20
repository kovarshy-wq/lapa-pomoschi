const CONTACT = {
  email: "Nastusha2416@yandex.ru",
  vk: "https://vk.ru/41dobrye_dela",
  address: "Посадская, 3"
};

const DOGS = [
  {
    slug: "grom",
    name: "Гром",
    age: "около 2 лет",
    status: "search",
    child: false,
    house: false,
    tags: ["робкий", "ласковый", "спокойный"],
    desc: "Я скромный и робкий с новыми людьми, но очень ласковый с теми, кому доверяю. Знаю команды «сидеть», «дай лапу» и очень хочу домой.",
    traits: [
      ["Характер", "Робкий с незнакомыми, ласковый и контактный, когда привыкнет. Любит внимание и поглаживания."],
      ["Особенности", "Опасается других собак. Старается терпеть до выгула и постепенно перестаёт бояться."],
      ["Условия", "Спокойный дом без других животных и много терпения на первых порах."],
      ["Здоровье", "Привит, кастрирован."]
    ]
  },
  {
    slug: "yasha",
    name: "Яша",
    age: "около 3-4 лет",
    status: "search",
    child: false,
    house: false,
    tags: ["энергичный", "контактный", "пищевик"],
    desc: "Я активный, контактный и дружелюбный, а в роду у меня точно была лайка. Обожаю движение и очень хочу домой.",
    traits: [
      ["Характер", "Активный, контактный, дружелюбный и уравновешенный."],
      ["Особенности", "Выраженный пищевик: во время еды нужно личное пространство."],
      ["Условия", "Подойдёт взрослому человеку или семье без маленьких детей."],
      ["Здоровье", "Привит, обработан, кастрирован."]
    ]
  },
  {
    slug: "gus",
    name: "Гусь",
    age: "5 лет",
    status: "search",
    child: false,
    house: false,
    tags: ["слепой", "нежный", "спокойный"],
    desc: "Я нежный, чуткий и обаятельный. Не вижу, но отлично ориентируюсь по слуху и запахам - и очень хочу тихий дом.",
    traits: [
      ["Характер", "Нежный, чуткий, ласковый, доверчивый и дружелюбный."],
      ["Особенности", "Слепой: ориентируется на другие органы чувств."],
      ["Условия", "Спокойная обстановка, бережное отношение и готовность учитывать особенность."],
      ["Здоровье", "Привит, обработан."]
    ]
  },
  {
    slug: "lesha",
    name: "Лёша",
    age: "2 года",
    status: "search",
    child: true,
    house: false,
    tags: ["компаньон", "по колено", "для семьи с детьми"],
    desc: "Я чуткий, душевный и скромный компаньон. Ласковый с близкими, аккуратный по характеру - и уже готов к дому.",
    traits: [
      ["Характер", "Чуткий, душевный, скромный, избирательный, милый и ласковый с близкими."],
      ["Особенности", "Компаньон, размер «по колено»."],
      ["Условия", "В семью с детьми любого возраста."],
      ["Здоровье", "Привит, обработан, готов к дому."]
    ]
  },
  {
    slug: "black",
    name: "Блэк",
    age: "около 4 лет",
    status: "search",
    child: false,
    house: true,
    tags: ["чёрный", "охранник", "крупный"],
    desc: "Я спокойный и терпеливый, отличный охранник и верный защитник. С девочками дружу, а с кобелями не схожусь.",
    traits: [
      ["Характер", "Спокойный, терпеливый, отличный охранник и верный защитник."],
      ["Особенности", "Дружит с девочками, не ладит с кобелями."],
      ["Условия", "Только частный дом с территорией - не на цепь и не в вольер."],
      ["Здоровье", "Привит, кастрирован."]
    ]
  },
  {
    slug: "muravey",
    name: "Муравей",
    age: "около 2 лет",
    status: "search",
    child: false,
    house: true,
    tags: ["охранник", "активный", "один питомец"],
    desc: "Я активный и энергичный, очень контактный и отличный «звоночек». Лучше буду единственным питомцем в доме.",
    traits: [
      ["Характер", "Активный, энергичный, очень контактный, отличный охранник и «звоночек»."],
      ["Особенности", "Лучше единственным питомцем."],
      ["Условия", "Отлично подойдёт для частного дома."],
      ["Здоровье", "Привит, обработан."]
    ]
  },
  {
    slug: "smile",
    name: "Смайлик",
    age: "около 5 лет",
    status: "search",
    child: true,
    house: true,
    tags: ["компаньон", "учится доверять", "для семьи с детьми"],
    desc: "Раньше я был пугливым, а сейчас учусь доверять людям: иду на контакт, хорошо обучаюсь и очень хочу свой дом.",
    traits: [
      ["Характер", "Ласковый компаньон, не охранник, хорошо обучается."],
      ["Особенности", "Был пугливым - сейчас учится доверять людям и больше общаться."],
      ["Условия", "Только частный дом с территорией. Хорошо подойдёт в семью с детьми."],
      ["Здоровье", "Привит, обработан."]
    ]
  },
  {
    slug: "mara",
    name: "Мара",
    age: "7-8 лет",
    status: "search",
    child: false,
    house: false,
    tags: ["спокойная", "взрослая", "для тихого дома"],
    desc: "Я спокойная, с внутренним позитивом и очень ориентирована на человека. Ищу тихий дом, где будет спокойно и по-доброму.",
    traits: [
      ["Характер", "Спокойная, с внутренним позитивом, ласковая с близкими, очень ориентирована на человека."],
      ["Особенности", "Стрессует от шума и большого количества собак. Может защищаться, если нарушают личное пространство."],
      ["Условия", "Тихий, спокойный дом."],
      ["Здоровье", "Привита, обработана, стерилизована."]
    ]
  }
];

const GALLERY = [
  ["g01.webp", "Блэк и волонтёр"],
  ["g02.webp", "Знакомство"],
  ["g03.webp", "Лёша в вольере"],
  ["g04.webp", "Взгляд из-за решётки"],
  ["g05.webp", "Визит в приют"],
  ["g06.webp", "У вольеров"],
  ["g07.webp", "Прогулка по территории"],
  ["g08.webp", "Знакомство с собакой"],
  ["g09.webp", "Разговор через решётку"],
  ["g10.webp", "Команда проекта"],
];

const FORM_TEXTS = {
  walk: ["Записаться на прогулку", "Оставьте телефон - мы напишем и договоримся о встрече в приюте."],
  adopt: ["Забрать собаку домой", "Оставьте телефон - куратор приюта свяжется с вами и всё расскажет."],
  dog: ["Забрать собаку домой", "Оставьте телефон - куратор приюта свяжется с вами и всё расскажет."],
  food: ["Принести корм", "Оставьте телефон - договоримся, когда и куда привезти корм."],
  share: ["Помочь с репостом", "Оставьте телефон или страницу - пришлём готовый текст для репоста."]
};

const FORM_MESSAGES = {
  walk: name => name ? `Хочу познакомиться с собакой ${name}.` : "Хочу записаться на прогулку.",
  adopt: name => name ? `Хочу забрать домой собаку ${name}.` : "Хочу забрать собаку домой.",
  dog: name => name ? `Хочу забрать домой собаку ${name}.` : "Хочу забрать собаку домой.",
  food: () => "Хочу принести корм.",
  share: () => "Хочу помочь с публикацией сайта."
};

const icons = {
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7 2.7C19 15.6 12 20 12 20Z"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 11 8-7 8 7v9H4v-9Z"/><path d="M9 20v-6h6v6"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>`
};

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("stat-dogs").textContent = DOGS.length;

const grid = document.getElementById("dogsGrid");
const filterCounts = { all: DOGS.length, search: 0, home: 0 };

function dogCard(dog) {
  const statusText = dog.status === "home" ? "Нашла семью" : "Ищет дом";
  return `
    <article class="dog reveal" data-status="${dog.status}" data-child="${dog.child}" data-house="${dog.house}">
      <div class="dog__media">
        <img src="${dog.slug}-cover.webp" alt="Собака ${dog.name} из приюта" loading="lazy" width="760" height="900">
        <span class="dog__status ${dog.status === "home" ? "dog__status--home" : ""}"><i></i>${statusText}</span>
      </div>
      <div class="dog__body">
        <h3 class="dog__name">${dog.name}</h3>
        <div class="dog__tags">
          <span class="tag tag--olive">${dog.age}</span>
          ${dog.tags.slice(0, 2).map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <p class="dog__desc">${dog.desc}</p>
        <div class="dog__actions">
          <button class="btn btn--olive" data-adopt="${dog.slug}">Хочу забрать домой</button>
          <button class="btn btn--ghost" data-walk="${dog.slug}">Записаться на прогулку</button>
        </div>
        <button class="dog__link" data-more="${dog.slug}">Анкета целиком →</button>
      </div>
    </article>`;
}

grid.innerHTML = DOGS.map(dogCard).join("");
DOGS.forEach(d => {
  if (d.status === "search") filterCounts.search++;
  if (d.status === "home") filterCounts.home++;
});
Object.keys(filterCounts).forEach(k => {
  const el = document.getElementById("count-" + k);
  if (el) el.textContent = filterCounts[k];
});

const emptyState = document.createElement("div");
emptyState.className = "dogs__empty";
emptyState.innerHTML = `<h3>Пока здесь пусто</h3><p>И это лучшая новость: все собаки из этой подборки уже дома. Загляните в «Ищет дом» - там ждут.</p>`;
emptyState.hidden = true;
grid.appendChild(emptyState);

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => {
      c.classList.remove("is-active");
      c.setAttribute("aria-selected", "false");
    });
    chip.classList.add("is-active");
    chip.setAttribute("aria-selected", "true");
    const f = chip.dataset.filter;
    let visible = 0;
    grid.querySelectorAll(".dog").forEach(card => {
      const ok =
        f === "all" ||
        (f === "search" && card.dataset.status === "search") ||
        (f === "home" && card.dataset.status === "home");
      card.hidden = !ok;
      if (ok) visible++;
    });
    emptyState.hidden = visible > 0;
  });
});

const galleryEl = document.getElementById("gallery");
galleryEl.innerHTML = GALLERY.map(([src, cap]) =>
  `<img src="${src}" alt="${cap}" loading="lazy" data-full="${src}">`).join("");

const galleryImages = galleryEl.querySelectorAll("img");
if ("IntersectionObserver" in window) {
  const galleryObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  galleryImages.forEach(img => galleryObserver.observe(img));
} else {
  galleryImages.forEach(img => img.classList.add("is-in"));
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.classList.remove("is-locked");
}

galleryEl.addEventListener("click", e => {
  const img = e.target.closest("img");
  if (img) openLightbox(img.dataset.full, img.alt);
});
lightbox.addEventListener("click", e => {
  if (e.target === lightbox || e.target.closest("[data-close-lightbox]")) closeLightbox();
});

const dogModal = document.getElementById("dogModal");
const dogSheet = document.getElementById("dogSheet");
const formModal = document.getElementById("formModal");

function sheetHTML(dog) {
  return `
    <div class="sheet__img">
      <img src="${dog.slug}-poster.webp" alt="Печатная анкета собаки ${dog.name}" width="750" height="1000">
    </div>
    <div class="sheet__body">
      <h3 id="dogModalTitle">${dog.name}</h3>
      <div class="sheet__tags">
        <span class="tag tag--olive">${dog.age}</span>
        ${dog.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <p style="margin:0">${dog.desc}</p>
      <div class="sheet__traits">
        <div class="trait">${icons.heart}<span><b>${dog.traits[0][0]}.</b> ${dog.traits[0][1]}</span></div>
        <div class="trait">${icons.info}<span><b>${dog.traits[1][0]}.</b> ${dog.traits[1][1]}</span></div>
        <div class="trait">${icons.home}<span><b>${dog.traits[2][0]}.</b> ${dog.traits[2][1]}</span></div>
        <div class="trait">${icons.shield}<span><b>${dog.traits[3][0]}.</b> ${dog.traits[3][1]}</span></div>
      </div>
      <div class="sheet__actions">
        <button class="btn btn--clay btn--wide" data-adopt="${dog.slug}">Хочу забрать домой</button>
        <button class="btn btn--ghost btn--wide" data-walk="${dog.slug}">Записаться на прогулку</button>
        <div class="sheet__meta">
          <span class="status-pill ${dog.status === "home" ? "status-pill--home" : ""}"><i></i>${dog.status === "home" ? "Нашла семью" : "Ищет дом"}</span>
        </div>
      </div>
      <p class="sheet__note">Перед передачей собаки мы обязательно знакомим и подписываем договор с куратором приюта.</p>
    </div>`;
}

function openDog(slug) {
  const dog = DOGS.find(d => d.slug === slug);
  if (!dog) return;
  dogSheet.innerHTML = sheetHTML(dog);
  openModal(dogModal);
}

function openModal(el) {
  el.classList.add("is-open");
  el.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  const close = el.querySelector(".modal__close");
  if (close) close.focus();
}

function closeModal(el) {
  el.classList.remove("is-open");
  el.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

const leadForm = document.getElementById("leadForm");
const formTitle = document.getElementById("formTitle");
const formSub = document.getElementById("formSub");
const leadMsg = document.getElementById("leadMsg");
let formIntent = "walk";
let formDog = "";

function openForm(intent, dogSlug) {
  formIntent = intent || "walk";
  formDog = dogSlug ? (DOGS.find(d => d.slug === dogSlug) || {}).name || "" : "";
  const [title, sub] = FORM_TEXTS[formIntent] || FORM_TEXTS.walk;
  formTitle.textContent = title;
  formSub.textContent = sub;
  const msgFn = FORM_MESSAGES[formIntent] || FORM_MESSAGES.walk;
  leadMsg.value = msgFn(formDog);
  openModal(formModal);
  document.getElementById("leadName").focus();
}

document.addEventListener("click", e => {
  const more = e.target.closest("[data-more]");
  if (more) { openDog(more.dataset.more); return; }
  const adopt = e.target.closest("[data-adopt]");
  if (adopt) { openForm("adopt", adopt.dataset.adopt); return; }
  const walk = e.target.closest("[data-walk]");
  if (walk) { openForm("walk", walk.dataset.walk); return; }
  const poster = e.target.closest("[data-poster]");
  if (poster) { openLightbox(poster.dataset.poster, "Печатная анкета"); return; }
  const formBtn = e.target.closest("[data-open-form]");
  if (formBtn) { openForm(formBtn.dataset.openForm); return; }
  const close = e.target.closest(".modal [data-close]");
  if (close) { closeModal(close.closest(".modal")); return; }
});

[dogModal, formModal].forEach(m => {
  if (!m) return;
  m.addEventListener("click", e => { if (e.target === m) closeModal(m); });
});

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (lightbox.classList.contains("is-open")) return closeLightbox();
  document.querySelectorAll(".modal.is-open").forEach(closeModal);
});

leadForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("leadName").value.trim();
  const contact = document.getElementById("leadContact").value.trim();
  const message = leadMsg.value.trim();
  const subject = message || (FORM_TEXTS[formIntent] || FORM_TEXTS.walk)[0];
  const body = `${message}\n\nИмя: ${name}\nТелефон: ${contact}\nЗаявка с сайта «Лапа помощи»`;
  const mail = `https://mail.yandex.ru/compose?to=${encodeURIComponent(CONTACT.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mail, "_blank", "noopener");
  if (navigator.clipboard) navigator.clipboard.writeText(body).catch(() => {});
  closeModal(formModal);
  leadForm.reset();
});

const header = document.getElementById("header");
const progress = document.getElementById("progress");
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => {
  header.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}));

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("is-stuck", y > 40);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = h > 0 ? `${(y / h) * 100}%` : "0%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const dur = 1400;
      const start = performance.now();
      const decimal = !Number.isInteger(target);
      const fmt = value => decimal ? value.toFixed(1).replace('.', ',') : String(Math.round(value));
      const step = now => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target);
      };
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));
}

const initialDog = location.hash.replace("#", "");
if (initialDog && DOGS.some(d => d.slug === initialDog)) {
  window.addEventListener("load", () => openDog(initialDog));
}

const copyButtons = document.querySelectorAll('[data-copy]');
copyButtons.forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    const original = btn.textContent;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
      }
      btn.textContent = 'Ссылка скопирована';
    } catch (e) {
      btn.textContent = text;
    }
    setTimeout(() => { btn.textContent = original; }, 2200);
  });
});
