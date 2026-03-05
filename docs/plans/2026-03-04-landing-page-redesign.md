# Landing Page Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the Zennes landing page to maximize conversion for Mexican PYMEs by adding social proof, lead capture, better copy, and missing sections.

**Architecture:** Single-page static site overhaul. Same HTML/CSS/JS stack, no new dependencies. Add Formspree for form handling, floating WhatsApp button, FAQ accordion, founder section, and rewrite all copy to be outcome-driven.

**Tech Stack:** Vanilla HTML, CSS, JavaScript. Formspree (free tier) for form backend.

**Design doc:** `docs/plans/2026-03-04-landing-page-redesign-design.md`

---

### Task 1: Fix WhatsApp link and init git

**Files:**
- Modify: `index.html` (lines 47, 152)

**Step 1: Initialize git repo**

```bash
cd /Users/luis/code/experiments/zennes-site
git init
git add -A
git commit -m "chore: initial commit — current site state"
```

**Step 2: Replace placeholder WhatsApp number**

In `index.html`, replace both instances of `https://wa.me/0000000000` with `https://wa.me/REAL_NUMBER` (ask user for real number).

**Step 3: Verify**

Open `index.html` in browser, click both WhatsApp buttons, confirm they open WhatsApp correctly.

**Step 4: Commit**

```bash
git add index.html
git commit -m "fix: replace placeholder WhatsApp number with real number"
```

---

### Task 2: Redesign Nav

**Files:**
- Modify: `index.html` (lines 14-28)
- Modify: `styles.css` (nav section, ~lines 90-155)
- Modify: `main.js` (if needed for mobile button behavior)

**Step 1: Update nav HTML**

Replace the nav links and add a CTA button:

```html
<nav class="nav" id="nav">
  <div class="nav__inner">
    <a href="#" class="nav__logo">Zennes</a>
    <button class="nav__hamburger" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
      <span class="nav__hamburger-line"></span>
      <span class="nav__hamburger-line"></span>
      <span class="nav__hamburger-line"></span>
    </button>
    <ul class="nav__links" id="nav-links">
      <li><a href="#servicios" class="nav__link">Servicios</a></li>
      <li><a href="#proceso" class="nav__link">Proceso</a></li>
      <li><a href="#preguntas" class="nav__link">Preguntas</a></li>
      <li><a href="#contacto" class="nav__link">Contacto</a></li>
    </ul>
    <a href="https://wa.me/REAL_NUMBER?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20de%20automatizaci%C3%B3n%20para%20mi%20empresa." class="btn btn--solid nav__cta" target="_blank" rel="noopener">Hablemos</a>
  </div>
</nav>
```

**Step 2: Add nav CTA styles in `styles.css`**

After the `.nav__link:hover` rule (~line 135):

```css
.nav__cta {
  padding: 0.5rem 1.25rem;
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  margin-left: 1rem;
  white-space: nowrap;
}
```

In the mobile breakpoint (`@media (max-width: 767px)`), add:

```css
.nav__cta {
  margin-left: 0;
  margin-right: 0.5rem;
  padding: 0.4rem 1rem;
  font-size: 0.75rem;
}
```

**Step 3: Verify**

- Desktop: nav shows Logo | links | teal "Hablemos" button
- Mobile: "Hablemos" button visible next to hamburger, not hidden in menu
- Button opens WhatsApp with pre-filled message

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add WhatsApp CTA button to nav"
```

---

### Task 3: Rewrite Hero

**Files:**
- Modify: `index.html` (lines 31-54, hero section)

**Step 1: Replace hero content**

```html
<section class="hero" id="hero">
  <div class="hero__gradient-blob hero__gradient-blob--1"></div>
  <div class="hero__gradient-blob hero__gradient-blob--2"></div>
  <div class="hero__inner">
    <div class="hero__content">
      <h1 class="hero__heading">
        Eliminamos el<br>
        trabajo manual<br>
        que frena tu<br>
        crecimiento
      </h1>
      <p class="hero__subtext">Automatizamos los procesos repetitivos de tu empresa con IA — para que tu equipo se enfoque en lo que genera ingresos.</p>
      <div class="hero__ctas">
        <a href="https://wa.me/REAL_NUMBER?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20de%20automatizaci%C3%B3n%20para%20mi%20empresa." class="btn btn--solid" target="_blank" rel="noopener">
          <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          Quiero mi diagnostico gratuito
        </a>
        <a href="#proceso" class="btn btn--outline">
          Conoce como trabajamos
        </a>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Update mobile CSS for hero `<br>` tags**

In the mobile breakpoint in `styles.css`, add a rule to let the heading flow naturally on small screens:

```css
.hero__heading br {
  display: none;
}
```

**Step 3: Verify**

- Desktop: heading reads "Eliminamos el / trabajo manual / que frena tu / crecimiento" with line breaks
- Mobile: heading flows naturally without forced breaks
- Primary CTA opens WhatsApp with pre-filled message
- Secondary CTA smooth-scrolls to Process section

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: rewrite hero with outcome-driven copy and WhatsApp CTA"
```

---

### Task 4: Add Social Proof Bar

**Files:**
- Modify: `index.html` (after hero section, before first `<hr class="divider">`)
- Modify: `styles.css` (add new proof-bar styles)

**Step 1: Add HTML after the hero closing `</section>` and before the first `<hr>`**

```html
<!-- ========== SOCIAL PROOF ========== -->
<section class="proof">
  <div class="proof__inner">
    <div class="proof__item">
      <span class="proof__check" aria-hidden="true">&#10003;</span>
      <span class="proof__text">1 empresa transformada</span>
    </div>
    <div class="proof__divider" aria-hidden="true"></div>
    <div class="proof__item">
      <span class="proof__check" aria-hidden="true">&#10003;</span>
      <span class="proof__text">X procesos automatizados</span>
    </div>
    <div class="proof__divider" aria-hidden="true"></div>
    <div class="proof__item">
      <span class="proof__check" aria-hidden="true">&#10003;</span>
      <span class="proof__text">X horas ahorradas al mes</span>
    </div>
  </div>
</section>
```

Note: Replace the `X` values with real metrics from the client when available.

**Step 2: Add styles in `styles.css`**

Add after the divider section (~line 320):

```css
/* ============================================================
   SOCIAL PROOF BAR
   ============================================================ */
.proof {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 1.5rem 0;
}

.proof__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--content-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.proof__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.proof__check {
  color: var(--accent);
  font-size: 1.125rem;
  font-weight: 700;
}

.proof__text {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.proof__divider {
  width: 1px;
  height: 1.25rem;
  background: var(--border);
}

@media (max-width: 767px) {
  .proof__inner {
    flex-direction: column;
    gap: 0.75rem;
  }

  .proof__divider {
    display: none;
  }

  .proof__item {
    justify-content: center;
  }
}
```

**Step 3: Verify**

- Desktop: horizontal bar with 3 items separated by dividers
- Mobile: stacked vertically, centered
- Sits between hero and services

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add social proof bar with client metrics"
```

---

### Task 5: Rewrite Services Section

**Files:**
- Modify: `index.html` (services section, ~lines 58-96)
- Modify: `styles.css` (remove translateY hover on cards)

**Step 1: Update services HTML**

Replace the services section content (keep the same structure, change text):

```html
<section class="services reveal" id="servicios">
  <div class="services__inner">
    <div class="services__header">
      <h2 class="section-heading">Como eliminamos lo que frena tu crecimiento</h2>
      <p class="section-subtext">Cada solucion se adapta a tu operacion, tus herramientas y tus objetivos.</p>
    </div>
    <div class="services__grid">
      <div class="service-card service-card--1">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <h3 class="service-card__title">Automatizacion de Procesos</h3>
        <p class="service-card__desc">Recupera cientos de horas al mes eliminando tareas repetitivas — tu equipo deja de capturar datos y empieza a tomar decisiones.</p>
      </div>
      <div class="service-card service-card--2">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/></svg>
        </div>
        <h3 class="service-card__title">Integracion de IA</h3>
        <p class="service-card__desc">Tus herramientas actuales, potenciadas con inteligencia artificial. Mejores decisiones sin cambiar lo que ya funciona.</p>
      </div>
      <div class="service-card service-card--3">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        </div>
        <h3 class="service-card__title">Arquitectura de Datos</h3>
        <p class="service-card__desc">Datos confiables, disponibles al instante — para que cada decision de tu equipo este respaldada por informacion real, no intuicion.</p>
      </div>
      <div class="service-card service-card--4">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <h3 class="service-card__title">Capacitacion y Estrategia</h3>
        <p class="service-card__desc">Tu equipo domina la IA en semanas, no meses — con un plan concreto que conecta cada herramienta con un resultado de negocio.</p>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Remove misleading hover transform in `styles.css`**

Change the `.service-card:hover` rule (~line 404) from:

```css
.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: inset 0 0 30px rgba(15, 204, 206, 0.05);
}
```

To:

```css
.service-card:hover {
  border-color: var(--accent);
  box-shadow: inset 0 0 30px rgba(15, 204, 206, 0.05);
}
```

**Step 3: Verify**

- Cards display new benefit-oriented copy
- Hover shows border glow but no vertical lift
- Section heading is "Como eliminamos lo que frena tu crecimiento"

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: rewrite services with benefit-oriented copy, remove misleading hover"
```

---

### Task 6: Add Mid-page CTA Banner

**Files:**
- Modify: `index.html` (after services section, before process section)
- Modify: `styles.css` (add banner styles)

**Step 1: Add HTML between services and process (replace the `<hr class="divider">` between them)**

```html
<!-- ========== MID-PAGE CTA ========== -->
<section class="mid-cta">
  <div class="mid-cta__inner">
    <h2 class="mid-cta__heading">Quieres saber cuanto podrias ahorrar?</h2>
    <a href="https://wa.me/REAL_NUMBER?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20de%20automatizaci%C3%B3n%20para%20mi%20empresa." class="btn btn--solid" target="_blank" rel="noopener">Solicita tu diagnostico gratuito</a>
  </div>
</section>
```

**Step 2: Add styles in `styles.css`**

```css
/* ============================================================
   MID-PAGE CTA
   ============================================================ */
.mid-cta {
  padding: 4rem 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  text-align: center;
}

.mid-cta__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.mid-cta__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}
```

**Step 3: Verify**

- Banner appears between services and process
- Centered heading + CTA button
- Button opens WhatsApp

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add mid-page CTA banner between services and process"
```

---

### Task 7: Rewrite Process Section

**Files:**
- Modify: `index.html` (process section, ~lines 100-134)
- Modify: `styles.css` (fix connector lines, add result block)

**Step 1: Update process HTML**

```html
<section class="process reveal" id="proceso">
  <div class="process__inner">
    <h2 class="section-heading">Como trabajamos</h2>
    <div class="process__steps">
      <div class="process__step" data-step="01">
        <div class="process__content">
          <h3 class="process__title">Diagnostico</h3>
          <p class="process__desc">Analizamos tu operacion, identificamos que se puede automatizar y cuanto impacto tendria. Sin costo.</p>
        </div>
      </div>
      <div class="process__connector" aria-hidden="true"></div>
      <div class="process__step" data-step="02">
        <div class="process__content">
          <h3 class="process__title">Diseno</h3>
          <p class="process__desc">Disenamos la solucion ideal para tu caso — las herramientas, los flujos y el plan de ejecucion.</p>
        </div>
      </div>
      <div class="process__connector" aria-hidden="true"></div>
      <div class="process__step" data-step="03">
        <div class="process__content">
          <h3 class="process__title">Implementacion</h3>
          <p class="process__desc">Construimos e integramos todo en tu entorno, con pruebas en cada etapa. Tu equipo no se detiene.</p>
        </div>
      </div>
      <div class="process__connector" aria-hidden="true"></div>
      <div class="process__step" data-step="04">
        <div class="process__content">
          <h3 class="process__title">Optimizacion</h3>
          <p class="process__desc">Monitoreamos resultados, ajustamos lo que haga falta y escalamos lo que funciona.</p>
        </div>
      </div>
    </div>
    <div class="process__result">
      <p class="process__result-text">Resultado: mas tiempo, menos costos, un equipo enfocado en crecer.</p>
    </div>
  </div>
</section>
```

**Step 2: Fix connector lines and add result block styles**

Update the `.process__connector` rule in `styles.css` (~line 497):

```css
.process__connector {
  height: 1px;
  width: 40px;
  align-self: center;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.3;
  flex-shrink: 0;
}
```

Add result block styles:

```css
.process__result {
  margin-top: 3rem;
  text-align: center;
  padding: 1.5rem 2rem;
  border: 1px solid var(--accent);
  border-radius: 8px;
  background: rgba(15, 204, 206, 0.04);
}

.process__result-text {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 600;
  color: var(--accent);
}
```

In the mobile breakpoint, update `.process__connector` (replace the existing mobile override):

```css
.process__connector {
  width: 1px;
  height: 40px;
  margin-left: 2.5rem;
  background: linear-gradient(180deg, transparent, var(--accent), transparent);
}
```

**Step 3: Verify**

- Desktop: horizontal steps with horizontal connector lines between them
- Result block appears below the steps with accent border
- Mobile: vertical layout with vertical connectors

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: rewrite process section, fix connectors, add result block"
```

---

### Task 8: Add FAQ Section

**Files:**
- Modify: `index.html` (new section after process, before contact)
- Modify: `styles.css` (FAQ and accordion styles)
- Modify: `main.js` (accordion toggle logic)

**Step 1: Add FAQ HTML after the process section divider**

Replace the `<hr class="divider">` before contact with:

```html
<hr class="divider">

<!-- ========== FAQ ========== -->
<section class="faq reveal" id="preguntas">
  <div class="faq__inner">
    <h2 class="section-heading">Preguntas frecuentes</h2>
    <div class="faq__list">
      <details class="faq__item">
        <summary class="faq__question">Cuanto cuesta?</summary>
        <p class="faq__answer">Cada proyecto es diferente. Ofrecemos un diagnostico gratuito donde evaluamos tu operacion y te damos una propuesta clara, sin compromiso.</p>
      </details>
      <details class="faq__item">
        <summary class="faq__question">Cuanto tiempo toma ver resultados?</summary>
        <p class="faq__answer">Depende de la complejidad, pero la mayoria de nuestros proyectos entregan resultados medibles en 4 a 8 semanas.</p>
      </details>
      <details class="faq__item">
        <summary class="faq__question">Necesito un equipo tecnico?</summary>
        <p class="faq__answer">No. Nos encargamos de todo lo tecnico. Solo necesitamos que alguien de tu equipo nos explique como trabajan hoy.</p>
      </details>
      <details class="faq__item">
        <summary class="faq__question">Mis datos estan seguros?</summary>
        <p class="faq__answer">Si. Trabajamos con las mejores practicas de seguridad y firmamos acuerdos de confidencialidad antes de comenzar.</p>
      </details>
      <details class="faq__item">
        <summary class="faq__question">Que pasa si no funciona?</summary>
        <p class="faq__answer">Por eso empezamos con un diagnostico. No proponemos soluciones que no tengan un impacto claro y medible. Si no encontramos oportunidades reales, te lo decimos.</p>
      </details>
    </div>
  </div>
</section>

<hr class="divider">
```

**Step 2: Add FAQ styles in `styles.css`**

```css
/* ============================================================
   FAQ
   ============================================================ */
.faq {
  padding: var(--section-spacing) 0;
}

.faq__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.faq__list {
  margin-top: clamp(2rem, 4vw, 3.5rem);
  max-width: 720px;
}

.faq__item {
  border-bottom: 1px solid var(--border);
}

.faq__question {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  padding: 1.25rem 0;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color var(--transition-base);
}

.faq__question::-webkit-details-marker {
  display: none;
}

.faq__question::after {
  content: '+';
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--accent);
  transition: transform var(--transition-base);
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq__item[open] .faq__question::after {
  content: '-';
}

.faq__question:hover {
  color: var(--accent);
}

.faq__answer {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-bottom: 1.25rem;
}
```

**Step 3: Verify**

- 5 FAQ items displayed as an accordion
- Click to expand/collapse
- Plus icon changes to minus when open
- Hover highlights the question in accent color

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add FAQ section with accordion"
```

---

### Task 9: Add Founder Section

**Files:**
- Modify: `index.html` (new section after FAQ, before contact)
- Modify: `styles.css` (founder section styles)

**Step 1: Add founder HTML after the FAQ section's closing `<hr class="divider">`**

```html
<!-- ========== ABOUT / FOUNDER ========== -->
<section class="founder reveal">
  <div class="founder__inner">
    <div class="founder__text">
      <h2 class="section-heading">Quien esta detras de Zennes</h2>
      <p class="founder__bio">Soy <strong>Luis Cesar</strong>, ingeniero de software con mas de 6 anos de experiencia construyendo productos tecnologicos en Mexico y Estados Unidos. He liderado equipos en startups y empresas establecidas — desde conseguir los primeros clientes de pago hasta escalar sistemas que procesan millones de registros.</p>
      <p class="founder__bio">Cree Zennes porque vi que la mayoria de las PYMEs en Mexico pierden horas en procesos que la IA puede resolver, pero no saben por donde empezar. Ese es mi trabajo.</p>
      <div class="founder__certs">
        <span class="founder__cert">Generative AI &amp; LLMs</span>
        <span class="founder__cert">Data Science &amp; AI — Le Wagon</span>
      </div>
    </div>
  </div>
</section>

<hr class="divider">
```

**Step 2: Add founder styles in `styles.css`**

```css
/* ============================================================
   FOUNDER
   ============================================================ */
.founder {
  padding: var(--section-spacing) 0;
}

.founder__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.founder__text {
  max-width: 640px;
}

.founder__bio {
  font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-top: 1rem;
}

.founder__bio strong {
  color: var(--text-primary);
}

.founder__certs {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.founder__cert {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--accent);
  padding: 0.375rem 0.875rem;
  border: 1px solid rgba(15, 204, 206, 0.3);
  border-radius: 4px;
  background: rgba(15, 204, 206, 0.05);
}
```

**Step 3: Verify**

- Founder section appears after FAQ
- Bio text is readable with Luis's name in bold
- Cert badges display as subtle teal-bordered pills

**Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add founder section with bio and certifications"
```

---

### Task 10: Redesign Contact Section

**Files:**
- Modify: `index.html` (contact section, ~lines 138-158)
- Modify: `styles.css` (form styles)

**Step 1: Replace contact section HTML**

```html
<section class="contact reveal" id="contacto">
  <div class="contact__gradient-blob contact__gradient-blob--1"></div>
  <div class="contact__gradient-blob contact__gradient-blob--2"></div>
  <div class="contact__inner">
    <div class="contact__text">
      <h2 class="section-heading">Tu primer paso: un diagnostico sin costo</h2>
      <p class="contact__desc">En una llamada corta analizamos tu operacion, identificamos oportunidades de automatizacion y te decimos exactamente como podemos ayudar. Sin compromiso.</p>
      <div class="contact__whatsapp">
        <p class="contact__whatsapp-label">Prefieres escribirnos directo?</p>
        <a href="https://wa.me/REAL_NUMBER?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20de%20automatizaci%C3%B3n%20para%20mi%20empresa." class="btn btn--outline" target="_blank" rel="noopener">
          <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          Escribenos por WhatsApp
        </a>
      </div>
    </div>
    <form class="contact__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form__group">
        <label class="form__label" for="name">Nombre</label>
        <input class="form__input" type="text" id="name" name="name" required>
      </div>
      <div class="form__group">
        <label class="form__label" for="email">Email</label>
        <input class="form__input" type="email" id="email" name="email" required>
      </div>
      <div class="form__group">
        <label class="form__label" for="company">Empresa</label>
        <input class="form__input" type="text" id="company" name="company" required>
      </div>
      <div class="form__group">
        <label class="form__label" for="challenge">Cual es tu mayor reto operativo?</label>
        <textarea class="form__input form__textarea" id="challenge" name="challenge" rows="3"></textarea>
      </div>
      <button class="btn btn--solid form__submit" type="submit">Solicitar diagnostico</button>
    </form>
  </div>
</section>
```

Note: Replace `YOUR_FORM_ID` with the actual Formspree form ID after creating the form at formspree.io.

**Step 2: Add form styles in `styles.css`**

```css
/* ============================================================
   CONTACT FORM
   ============================================================ */
.contact__whatsapp {
  margin-top: 2rem;
}

.contact__whatsapp-label {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form__label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.form__input {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-primary);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  transition: border-color var(--transition-base);
}

.form__input:focus {
  outline: none;
  border-color: var(--accent);
}

.form__textarea {
  resize: vertical;
  min-height: 80px;
}

.form__submit {
  align-self: flex-start;
  margin-top: 0.5rem;
}

@media (max-width: 767px) {
  .form__submit {
    align-self: stretch;
    justify-content: center;
  }
}
```

**Step 3: Update the existing `.contact__inner` grid**

The existing CSS already has `grid-template-columns: 1fr 1fr` for desktop, which works. The text goes left, form goes right. The mobile override already stacks them to `1fr`.

**Step 4: Verify**

- Desktop: left side has heading, description, and WhatsApp option; right side has the form
- Mobile: text stacks on top, form below, submit button is full-width
- Form submits to Formspree (will show Formspree confirmation page until configured)
- WhatsApp button opens WhatsApp with pre-filled message

**Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: redesign contact section with inline form and WhatsApp alternative"
```

---

### Task 11: Add Floating WhatsApp Button and Footer Privacy Link

**Files:**
- Modify: `index.html` (add floating button before `</body>`, update footer)
- Modify: `styles.css` (floating button styles)

**Step 1: Add floating WhatsApp button HTML before the `<div class="grain">` element**

```html
<!-- Floating WhatsApp Button -->
<a href="https://wa.me/REAL_NUMBER?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20de%20automatizaci%C3%B3n%20para%20mi%20empresa." class="whatsapp-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
</a>
```

**Step 2: Update footer HTML to add privacy link**

```html
<footer class="footer">
  <div class="footer__inner">
    <span class="footer__logo">Zennes</span>
    <span class="footer__copy">&copy; 2026 Zennes. Todos los derechos reservados.</span>
    <a href="#" class="footer__link">Politica de Privacidad</a>
  </div>
</footer>
```

**Step 3: Add styles in `styles.css`**

```css
/* ============================================================
   FLOATING WHATSAPP
   ============================================================ */
.whatsapp-float {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 999;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

/* Footer link */
.footer__link {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  transition: color var(--transition-base);
}

.footer__link:hover {
  color: var(--accent);
}
```

In the mobile footer override, update to handle the third element:

```css
@media (max-width: 767px) {
  .footer__inner {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }

  .whatsapp-float {
    bottom: 1rem;
    right: 1rem;
    width: 48px;
    height: 48px;
  }

  .whatsapp-float svg {
    width: 24px;
    height: 24px;
  }
}
```

**Step 4: Verify**

- Green WhatsApp button floats in bottom-right corner
- Follows scroll, always visible
- Opens WhatsApp with pre-filled message on click
- Slightly smaller on mobile
- Footer shows privacy link

**Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add floating WhatsApp button and footer privacy link"
```

---

### Task 12: Accessibility Fixes

**Files:**
- Modify: `styles.css` (add prefers-reduced-motion, fix touch targets)
- Modify: `index.html` (add meta tag if needed)

**Step 1: Add prefers-reduced-motion at the end of `styles.css`**

```css
/* ============================================================
   ACCESSIBILITY
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
```

**Step 2: Fix mobile nav touch targets**

In the mobile breakpoint, add padding to nav links:

```css
.nav__links .nav__link {
  display: block;
  padding: 0.5rem 0;
  min-height: 44px;
  display: flex;
  align-items: center;
}
```

**Step 3: Hide grain overlay on mobile for performance**

In the mobile breakpoint:

```css
.grain {
  display: none;
}
```

**Step 4: Verify**

- With reduced motion OS setting: no animations, content visible immediately
- Mobile nav links have adequate touch targets
- Grain overlay hidden on mobile

**Step 5: Commit**

```bash
git add styles.css
git commit -m "fix: add prefers-reduced-motion, fix touch targets, hide grain on mobile"
```

---

### Task 13: Final Review and Meta Tags

**Files:**
- Modify: `index.html` (update title, meta description)

**Step 1: Update `<head>` meta tags**

```html
<title>Zennes | Automatiza tu negocio con IA — Consultoria para PYMEs en Mexico</title>
<meta name="description" content="Eliminamos el trabajo manual que frena tu crecimiento. Consultoria en automatizacion con IA para PYMEs en Mexico. Diagnostico gratuito.">
```

**Step 2: Add Open Graph tags after the description meta**

```html
<meta property="og:title" content="Zennes | Automatiza tu negocio con IA">
<meta property="og:description" content="Eliminamos el trabajo manual que frena tu crecimiento. Consultoria en automatizacion con IA para PYMEs en Mexico.">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_MX">
```

**Step 3: Verify**

- Page title updated in browser tab
- View page source to confirm meta tags

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update meta tags for SEO and social sharing"
```

---

## Pre-Implementation Checklist

Before starting, the implementer needs from the user:
1. **Real WhatsApp number** — to replace all `REAL_NUMBER` placeholders
2. **Formspree form ID** — create free form at formspree.io, get the form ID
3. **Client metrics** — real numbers for the social proof bar (processes automated, hours saved)

## Placeholder Markers

Search for these strings to find all placeholders that need real values:
- `REAL_NUMBER` — WhatsApp phone number (appears ~6 times)
- `YOUR_FORM_ID` — Formspree form endpoint
- `X procesos automatizados` — real metric
- `X horas ahorradas` — real metric
