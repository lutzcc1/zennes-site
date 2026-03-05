# Zennes Landing Page Redesign — Design Document

**Date:** 2026-03-04
**Approach:** Surgical overhaul of existing single-page static site (HTML/CSS/JS)
**Goal:** Maximize conversion rate for Mexican PYMEs (10-100 employees)

---

## Context

- **Stage:** Early (1 client, can get testimonial + logo + metric)
- **Target:** PYMEs in Mexico
- **Primary CTA:** WhatsApp with pre-filled message
- **Secondary CTA:** Inline contact form (Formspree, free tier)
- **Tech stack:** Static HTML/CSS/JS (no changes)
- **Founder:** Luis Cesar, 6+ years software engineering (US & Mexico), Le Wagon teacher, Data Science & AI cert

## Current Problems (from audit)

1. Broken WhatsApp link (placeholder number)
2. Zero social proof
3. No lead capture form (only mailto + broken WhatsApp)
4. Generic, category-descriptive headline
5. CTA labels are channel names ("Email", "WhatsApp"), not actions
6. No mid-page conversion point
7. No FAQ / objection handling
8. No founder/team section
9. Service descriptions are feature-oriented, not benefit-oriented
10. Missing floating WhatsApp button (standard in Mexican B2B)

---

## Page Structure (top to bottom)

### 1. Nav (redesigned)

- Links: Servicios, Proceso, Preguntas, Contacto
- Add teal "Hablemos" button right-aligned, links to WhatsApp with pre-filled message
- On mobile: button stays visible next to hamburger (not hidden in menu)

### 2. Hero (rewritten)

- **H1:** "Eliminamos el trabajo manual que frena tu crecimiento"
- **Subtext:** "Automatizamos los procesos repetitivos de tu empresa con IA — para que tu equipo se enfoque en lo que genera ingresos."
- **Primary CTA:** "Quiero mi diagnostico gratuito" -> WhatsApp with pre-filled message: "Hola, me interesa un diagnostico de automatizacion para mi empresa."
- **Secondary CTA:** "Conoce como trabajamos" -> smooth scroll to Process section
- Remove Email CTA from hero
- Keep gradient blobs, no visual on right side for now

### 3. Social Proof Bar (new section)

Compact trust strip below hero, before Services.

Launch version (metrics-only, no testimonial yet):
```
[check] 1 empresa transformada  ·  [check] X procesos automatizados  ·  [check] X horas ahorradas al mes
```

Future version (once testimonial is obtained):
```
[Client Logo]  |  "Metric statement"  |  "— Name, Title, Company"
```

- Subtle surface background
- On mobile: stacks vertically, centered

### 4. Services (rewritten copy)

- **Section heading:** "Como eliminamos lo que frena tu crecimiento"
- **Section subtext:** "Cada solucion se adapta a tu operacion, tus herramientas y tus objetivos."
- Same 2x2 card grid, same icons

Card copy rewrites:

1. **Automatizacion de Procesos:** "Recupera cientos de horas al mes eliminando tareas repetitivas — tu equipo deja de capturar datos y empieza a tomar decisiones."
2. **Integracion de IA:** "Tus herramientas actuales, potenciadas con inteligencia artificial. Mejores decisiones sin cambiar lo que ya funciona."
3. **Arquitectura de Datos:** "Datos confiables, disponibles al instante — para que cada decision de tu equipo este respaldada por informacion real, no intuicion."
4. **Capacitacion y Estrategia:** "Tu equipo domina la IA en semanas, no meses — con un plan concreto que conecta cada herramienta con un resultado de negocio."

- Remove translateY hover effect on cards (not clickable, misleading)
- Keep subtle border glow on hover

### 5. Mid-page CTA Banner (new section)

Between Services and Process:

- **Heading:** "Quieres saber cuanto podrias ahorrar?"
- **CTA button:** "Solicita tu diagnostico gratuito" -> WhatsApp
- Dark surface background with subtle accent border
- Centered text, single line

### 6. Process (tweaked)

- Keep heading "Como trabajamos", step titles, and layout
- Rewritten descriptions:
  1. **Diagnostico:** "Analizamos tu operacion, identificamos que se puede automatizar y cuanto impacto tendria. Sin costo."
  2. **Diseno:** "Disenamos la solucion ideal para tu caso — las herramientas, los flujos y el plan de ejecucion."
  3. **Implementacion:** "Construimos e integramos todo en tu entorno, con pruebas en cada etapa. Tu equipo no se detiene."
  4. **Optimizacion:** "Monitoreamos resultados, ajustamos lo que haga falta y escalamos lo que funciona."
- Add result block after step 4: "Resultado: mas tiempo, menos costos, un equipo enfocado en crecer."
- Fix connector lines to be horizontal on desktop (currently vertical)

### 7. FAQ (new section)

Accordion (click to expand), 5 items:

1. **Cuanto cuesta?** "Cada proyecto es diferente. Ofrecemos un diagnostico gratuito donde evaluamos tu operacion y te damos una propuesta clara, sin compromiso."
2. **Cuanto tiempo toma ver resultados?** "Depende de la complejidad, pero la mayoria de nuestros proyectos entregan resultados medibles en 4 a 8 semanas."
3. **Necesito un equipo tecnico?** "No. Nos encargamos de todo lo tecnico. Solo necesitamos que alguien de tu equipo nos explique como trabajan hoy."
4. **Mis datos estan seguros?** "Si. Trabajamos con las mejores practicas de seguridad y firmamos acuerdos de confidencialidad antes de comenzar."
5. **Que pasa si no funciona?** "Por eso empezamos con un diagnostico. No proponemos soluciones que no tengan un impacto claro y medible. Si no encontramos oportunidades reales, te lo decimos."

### 8. About / Founder (new section)

**Heading:** "Quien esta detras de Zennes"

**Bio:**
> Soy Luis Cesar, ingeniero de software con mas de 6 anos de experiencia construyendo productos tecnologicos en Mexico y Estados Unidos. He liderado equipos en startups y empresas establecidas — desde conseguir los primeros clientes de pago hasta escalar sistemas que procesan millones de registros.
>
> Cree Zennes porque vi que la mayoria de las PYMEs en Mexico pierden horas en procesos que la IA puede resolver, pero no saben por donde empezar. Ese es mi trabajo.

**Certification badges below bio:**
- Generative AI with Large Language Models
- Le Wagon Data Science & AI

### 9. Contact (redesigned)

**Heading:** "Tu primer paso: un diagnostico sin costo"
**Subtext:** "En una llamada corta analizamos tu operacion, identificamos oportunidades de automatizacion y te decimos exactamente como podemos ayudar. Sin compromiso."

**Left column:** Inline form (Formspree free tier)
- Nombre (text)
- Email (email)
- Empresa (text)
- "Cual es tu mayor reto operativo?" (textarea)
- Submit: "Solicitar diagnostico"

**Right column:** WhatsApp alternative
- "Prefieres escribirnos directo?"
- "Escribenos por WhatsApp" button with pre-filled message

On mobile: form on top, WhatsApp below.

### 10. Footer (minor tweaks)

- Keep: Logo + copyright
- Add: "Politica de Privacidad" link (placeholder)

### 11. Floating WhatsApp Button (new)

- Fixed, bottom-right corner
- Green WhatsApp icon
- Always visible, all breakpoints
- Links to WhatsApp with pre-filled message

---

## Technical Notes

- **Form backend:** Formspree free tier (formspree.io) — no backend needed, email notifications
- **WhatsApp pre-filled message:** Use `https://wa.me/REAL_NUMBER?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20de%20automatizaci%C3%B3n%20para%20mi%20empresa.`
- **FAQ accordion:** Pure CSS/JS, no library needed
- **No new dependencies** — everything stays vanilla HTML/CSS/JS
- **Accessibility:** Add prefers-reduced-motion media query, fix mobile nav touch targets (min 44x44px)

## Out of Scope (future)

- Blog / content marketing
- Multi-page expansion
- Analytics / tracking setup
- Actual privacy policy content
- Photo for founder section
- Light/dark theme toggle
