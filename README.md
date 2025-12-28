# Fórum Piešťany

Moderná, rýchla a plne responzívna statická webová stránka pre občiansku diskusnú sériu Fórum Piešťany pred komunálnymi voľbami 2026.

## Technológie

- **Astro** (latest) - statická stránka generátor
- **TypeScript** - typovo bezpečný kód
- **Tailwind CSS** - utility-first CSS framework
- **Žiadne ťažké závislosti** - minimálny bundle size

## Štruktúra projektu

```
forum-piestany/
├── public/              # Statické súbory (obrázky, favicon)
├── src/
│   ├── components/      # Znovupoužiteľné komponenty
│   ├── content/         # Zdroj dát (project.ts)
│   ├── layouts/         # Layout komponenty
│   ├── pages/           # Stránky (routing)
│   └── styles/          # Globálne štýly
├── astro.config.mjs     # Astro konfigurácia
├── tailwind.config.mjs  # Tailwind konfigurácia
└── package.json
```

## Inštalácia

```bash
npm install
```

## Vývoj

Spustite vývojový server:

```bash
npm run dev
```

Stránka bude dostupná na `http://localhost:4321`

## Build

Vytvorte produkčnú verziu:

```bash
npm run build
```

Výstup bude v priečinku `dist/`

## Preview

Náhľad produkčnej verzie:

```bash
npm run preview
```

## Správa obsahu

Všetky dáta projektu sú uložené v `src/content/project.ts`. Tento súbor je jediným zdrojom pravdy pre:

- Eventy a dátumy
- Témy diskusie
- Pravidlá
- Rozpočet
- Informácie o miestach konania

**Dôležité:** Neupravujte obsah priamo v komponentoch. Všetky zmeny robte v `project.ts`.

## Stránky

- `/` - Domovská stránka
- `/program` - Program eventov 2026
- `/temy` - Zoznam tém diskusie
- `/pravidla` - Pravidlá diskusných eventov
- `/rozpocet` - Rozpočet projektu (Variant A a B)
- `/miesta` - Miesta konania (ARTA, Kino Fontána)
- `/kontakt` - Kontaktné informácie
- `/404` - Chybová stránka

## Dizajn

- Moderný, čistý, občiansky tón
- Modré a žlté akcenty (farby Piešťan)
- Plne responzívny dizajn (mobile-first)
- Prístupnosť (WCAG guidelines)
- SEO optimalizácia

## Licencia

© 2026 Fórum Piešťany. Všetky práva vyhradené.

