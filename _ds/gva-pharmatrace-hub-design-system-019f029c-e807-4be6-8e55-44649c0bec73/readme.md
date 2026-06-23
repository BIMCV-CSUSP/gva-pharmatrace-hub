# GVA PharmaTrace Hub — Design System

Design system for **GVA PharmaTrace Hub**, a pharmaceutical-traceability platform delivered by **Fundació Fisabio** under the **Generalitat Valenciana**. The project carries its own product identity (the "network of people" mark) while inheriting FISABIO's institutional brand rules — colours, typography and the mandatory *convivència* (co-existence) lockup.

> The institutional palette and type follow FISABIO's **Manual d'Identitat Corporativa** (FS-M003). The product mark adds a project-specific **red** accent. When the two conflict, FISABIO institutional rules win.

## Sources provided
- `uploads/fs-m003-fisabio-manual-identitat-corporativa.pdf` — FISABIO corporate identity manual (Catalan). Source of the colour gamut and typography.
- Product logos (network-of-people imagotype): `Blue.svg`, `Blue_nw.svg`, `red.svg`, `red_nw.svg`, `White.svg`, `White_nw.svg` → copied to `assets/logos/pharmatrace-*.svg`.
- Institutional *convivència* lockups (Generalitat Valenciana + Fundació Fisabio): `convivencia-blau/negre/blanc.svg` → `assets/logos/convivencia-*.svg`.
- No product codebase or Figma was supplied — UI-kit screen content is representative placeholder data.

---

## CONTENT FUNDAMENTALS
- **Language:** Primary Valencian/Catalan and Spanish; English available. UI copy in the kit is Spanish (`Verificar lote`, `En tránsito`, `Acceso profesional`).
- **Voice:** Institutional, precise, public-service. Calm authority — this is public health infrastructure, not a consumer app. No hype, no exclamation marks.
- **Person:** Impersonal / third person for the platform ("cada lote queda verificado"), second-person formal only in direct CTAs. Avoid first-person "we".
- **Casing:** Sentence case for headings and labels. UPPERCASE reserved for short eyebrows/kickers with wide tracking. Never title-case.
- **Tone examples:** "Cada lote, conectado. Cada paso, verificado." · "Plataforma pública de trazabilidad del medicamento." · "Trazabilidad completa disponible para revisión institucional."
- **Emoji:** Never. Not part of the institutional brand.
- **Numbers/data:** Concrete and verifiable (lot codes `2024-A7`, percentages `99,8%`). Spanish decimal comma in prose, but data tables may use either.

## VISUAL FOUNDATIONS
- **Colour:** Deep indigo `#1D0F44` (FISABIO Color Primari) is the anchor — backgrounds, headings, primary buttons, sidebar. Project **red** `#C80F2E` is the action/alert accent, used sparingly. Supporting FISABIO pastels (lavender `#BFBEE0`, sky `#C9E1EA`, coral `#FF647D`, pink `#EACCCE`) for soft fields. Neutrals are a cool, indigo-biased grey scale.
- **Type:** Display/headings in **Hanken Grotesk** (substitute for the licensed *Larsseit* logo face). Body/UI in **Roboto** (FISABIO's specified corporate body face). Headings are bold (700–800), tight tracking (`-0.02em`); body is Roboto 400/500.
- **Backgrounds:** Mostly flat — white cards on a near-white `#F8F8FB` page, or full-bleed solid indigo sections. The network mark appears as a very low-opacity (~7%) watermark on indigo heroes. No photographic backgrounds by default; no gradients beyond solid fields.
- **Shape & radius:** Soft, rounded corners that echo the rounded nodes of the mark — cards `16px`, controls `10px`, pills fully rounded. Avatars/nodes are circular.
- **Borders:** Hairline `1px` in cool grey (`--border-subtle/default`). Brand keylines only for emphasis. No heavy outlines.
- **Elevation:** Soft, diffuse, **indigo-tinted** shadows (`rgba(29,15,68,…)`), never neutral-black. Cards rest on `shadow-sm`; hover lifts to `shadow-lg` with a `-2px` translate.
- **Motion:** Calm and institutional. Ease-out / standard cubic-beziers, 120–320ms. No bounce, no spring. Fades and small translates only.
- **Hover states:** Solid buttons brighten (~10%); outline/ghost darken slightly; cards lift + deepen shadow.
- **Press states:** Buttons nudge down `1px` (`translateY(1px)`). No scale-shrink.
- **Focus:** 3px soft indigo ring (`--shadow-focus`), never a hard outline.
- **Transparency/blur:** Used for the sticky header (90% white + 8px backdrop blur) and indigo overlays. Otherwise opaque.
- **Layout:** Centred max-width containers (1200px site, generous gutters). Sticky header. Dashboard uses a fixed 232px indigo sidebar.

## ICONOGRAPHY
- The brand ships **no icon font or sprite**. The product mark itself is the dominant graphic device — a connected graph of person-nodes (available solo as `pharmatrace-mark-*.svg`).
- In-product icons are **inline stroke SVGs** drawn at a `~1.6–2px` stroke weight on a 24×24 grid, in `currentColor` — matching the rounded, geometric line quality of the mark (see `Features.jsx`, `Dashboard.jsx` search/check glyphs). Keep stroke icons line-only (no fills), rounded caps/joins.
- **Emoji:** never. **Unicode glyphs** are used only as tiny functional marks (`▾` select chevron, `↗` external-link, `✓ ✕ !` inside Alert status bubbles).
- If a larger icon set is needed, substitute a rounded stroke set (e.g. **Lucide** — same 24px / ~1.75 stroke / rounded-cap language) and flag the substitution. None is bundled by default.

---

## Index / manifest
**Root**
- `styles.css` — global entry (import this one file). `@import`s the token + base files below.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css` · `tokens/base.css`
- `assets/logos/` — product imagotype (`pharmatrace-*`), product mark (`pharmatrace-mark-*`), institutional lockups (`convivencia-*`).

**Components** (`window.GVAPharmaTraceHubDesignSystem_019f02`)
- `components/core/` — `Button`, `Badge`, `Card`
- `components/forms/` — `Input`, `Select`, `Checkbox`
- `components/feedback/` — `Alert`
- `components/data/` — `Stat`

**Guidelines** (`guidelines/*.html`) — foundation specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**UI kits**
- `ui_kits/website/` — public site + authenticated traceability dashboard. See its `README.md`.

**Other**
- `SKILL.md` — Agent-Skills-compatible entry point.
