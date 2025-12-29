export interface Event {
  id: number;
  date: string;
  dateFormatted: string;
  venue: 'ARTA' | 'Kino Fontána';
  topic: string;
  preco: string;
  isFinal: boolean;
}

export interface Topic {
  id: number;
  title: string;
  preco: string;
  isFinal: boolean;
}

export interface BudgetLineItem {
  polozka: string;
  cenaZaEvent: number;
  celkoveNaklady: number;
}

export interface BudgetVariant {
  name: string;
  items: BudgetLineItem[];
  total: number;
}

export interface Venue {
  id: string;
  name: string;
  fullName: string;
  description: string;
  images: string[];
}

export const project = {
  name: 'Fórum Piešťany',
  language: 'sk',
  
  goals: {
    primary: 'Zvýšiť účasť voličov na komunálnych voľbách 2026 v Piešťanoch.',
    secondary: 'Zvýšiť informovanosť a porozumenie občanov; poskytnúť expertný kontext použiteľný aj po voľbách pre budúcich zastupiteľov a kandidátov na primátora.',
  },
  
  audience: 'Všetkým voličom v Piešťanoch, najmä tým, ktorí zvyčajne nesledujú mestskú politiku, no sú priamo ovplyvnení.',
  
  timeLimited: true,
  timeLimitedNotice: 'Projekt je časovo obmedzený a musí to byť na webovej stránke explicitne uvedené.',
  
  format: {
    duration: '2 hodiny',
    audience: 'Živé publikum',
    recording: 'Offline nahrávanie publikované po evente',
    questions: 'Otázky cez Slido',
    streaming: 'Nestreamuje sa',
    clips: 'Nájdete na sociálnych sieťach',
    language: 'Poprední slovenskí experti na dané témy',
  },
  
  events: [
    {
      id: 1,
      date: '2026-03-05',
      dateFormatted: '5. 3. 2026',
      venue: 'ARTA',
      topic: 'Cestovný ruch, kúpeľníctvo a ekonomický prínos pre mesto',
      preco: 'Piešťany sú kúpeľné mesto, no časť verejnosti má pocit, že potenciál cestovného ruchu sa nevyužíva systematicky a jeho prínos pre obyvateľov Piešťan nie je dostatočne zrozumiteľný ani merateľný.',
      isFinal: false,
    },
    {
      id: 2,
      date: '2026-04-02',
      dateFormatted: '2. 4. 2026',
      venue: 'ARTA',
      topic: 'Doprava, parkovanie a verejný priestor',
      preco: 'Doprava a parkovanie patria medzi každodenné problémy obyvateľov a rozhodnutia mesta v tejto oblasti majú okamžitý dopad na kvalitu života v Piešťanoch.',
      isFinal: false,
    },
    {
      id: 3,
      date: '2026-05-07',
      dateFormatted: '7. 5. 2026',
      venue: 'ARTA',
      topic: 'Rozpočet a ekonomika mesta',
      preco: 'Rozpočet mesta je základný nástroj riadenia samosprávy, no pre väčšinu obyvateľov Piešťan je neprehľadný a ťažko porovnateľný s inými mestami, ktoré hospodária efektívnejšie.',
      isFinal: false,
    },
    {
      id: 4,
      date: '2026-06-04',
      dateFormatted: '4. 6. 2026',
      venue: 'ARTA',
      topic: 'Rozvoj mesta, výstavba, životné prostredie a zeleň',
      preco: 'Rozhodnutia o výstavbe a zásahoch do verejného priestoru majú dlhodobý vplyv na charakter Piešťan, kvalitu životného prostredia a každodenný komfort obyvateľov.',
      isFinal: false,
    },
    {
      id: 5,
      date: '2026-09-03',
      dateFormatted: '3. 9. 2026',
      venue: 'ARTA',
      topic: 'Šport, kultúra a podpora voľnočasových aktivít',
      preco: 'Šport a kultúra formujú komunitný život mesta Piešťany, no ich podpora zo strany samosprávy je často vnímaná ako nesystematická a nerovnomerne rozdelená.',
      isFinal: false,
    },
    {
      id: 6,
      date: '2026-10-01',
      dateFormatted: '1. 10. 2026',
      venue: 'ARTA',
      topic: 'Zdravotníctvo, sociálne služby, mladí ľudia a rodiny',
      preco: 'Starnutie populácie, odchod mladých ľudí a rastúce nároky na sociálne služby vytvárajú tlak na samosprávu, pričom jej úlohy a možnosti nie sú pre obyvateľov Piešťan vždy jasné.',
      isFinal: false,
    },
    {
      id: 7,
      date: '2026-11-05',
      dateFormatted: '5. 11. 2026',
      venue: 'Kino Fontána',
      topic: 'Záverečná debata kandidátov na primátora mesta Piešťany',
      preco: 'Záverečná diskusia umožňuje porovnanie vízií kandidátov za rovnakých podmienok a vytvára priestor na informované rozhodovanie pred komunálnymi voľbami 2026.',
      isFinal: true,
    },
  ] as Event[],
  
  topics: [
    {
      id: 1,
      title: 'Cestovný ruch, kúpeľníctvo a ekonomický prínos pre mesto',
      preco: 'Piešťany sú kúpeľné mesto, no časť verejnosti má pocit, že potenciál cestovného ruchu sa nevyužíva systematicky a jeho prínos pre obyvateľov Piešťan nie je dostatočne zrozumiteľný ani merateľný.',
      isFinal: false,
    },
    {
      id: 2,
      title: 'Doprava, parkovanie a verejný priestor',
      preco: 'Doprava a parkovanie patria medzi každodenné problémy obyvateľov a rozhodnutia mesta v tejto oblasti majú okamžitý dopad na kvalitu života v Piešťanoch.',
      isFinal: false,
    },
    {
      id: 3,
      title: 'Rozpočet a ekonomika mesta',
      preco: 'Rozpočet mesta je základný nástroj riadenia samosprávy, no pre väčšinu obyvateľov Piešťan je neprehľadný a ťažko porovnateľný s inými mestami, ktoré hospodária efektívnejšie.',
      isFinal: false,
    },
    {
      id: 4,
      title: 'Rozvoj mesta, výstavba, životné prostredie a zeleň',
      preco: 'Rozhodnutia o výstavbe a zásahoch do verejného priestoru majú dlhodobý vplyv na charakter Piešťan, kvalitu životného prostredia a každodenný komfort obyvateľov.',
      isFinal: false,
    },
    {
      id: 5,
      title: 'Šport, kultúra a podpora voľnočasových aktivít',
      preco: 'Šport a kultúra formujú komunitný život mesta Piešťany, no ich podpora zo strany samosprávy je často vnímaná ako nesystematická a nerovnomerne rozdelená.',
      isFinal: false,
    },
    {
      id: 6,
      title: 'Zdravotníctvo, sociálne služby, mladí ľudia a rodiny',
      preco: 'Starnutie populácie, odchod mladých ľudí a rastúce nároky na sociálne služby vytvárajú tlak na samosprávu, pričom jej úlohy a možnosti nie sú pre obyvateľov Piešťan vždy jasné.',
      isFinal: false,
    },
    {
      id: 7,
      title: 'Záverečná debata kandidátov na primátora mesta Piešťany',
      preco: 'Záverečná diskusia umožňuje porovnanie vízií kandidátov za rovnakých podmienok a vytvára priestor na informované rozhodovanie pred komunálnymi voľbami 2026.',
      isFinal: true,
    },
  ] as Topic[],
  
  rules: {
    summary: 'Fórum Piešťany sa riadi pravidlami zameranými na rešpektovanie, transparentnosť a férovú diskusiu.',
    full: [
      {
        title: 'Rešpektovanie diskusie',
        content: 'Žiadne urážky, vulgárny jazyk alebo osobné útoky.',
      },
      {
        title: 'Zákaz sebapropagácie',
        content: 'Počas tematických eventov nie je dovolená sebapropagácia potenciálnych kandidátov.',
      },
      {
        title: 'Pravidlo publika "3×3"',
        content: 'Maximálne 3 minúty na jeden príspevok, maximálne 3 príspevky na účastníka na jeden event.',
      },
      {
        title: 'Moderácia otázok cez Slido',
        content: 'Otázky zbierané cez Slido a moderované; moderátor môže parafrázovať, zlúčiť alebo preskočiť porušujúce otázky.',
      },
      {
        title: 'Rozhodnutia moderátora',
        content: 'Rozhodnutia moderátora sú konečné.',
      },
      {
        title: 'Pravidlá záverečnej debaty',
        content: 'Striktné časovanie s časovačom, aby žiadny kandidát nemal výhodu.',
      },
    ],
  },
  
  budget: {
    variantA: {
      name: 'Variant A (minimalistický, bez marketingu)',
      items: [
        { polozka: 'Moderátor', cenaZaEvent: 150, celkoveNaklady: 1050 },
        { polozka: 'Expert (1,5 × 300 €)', cenaZaEvent: 450, celkoveNaklady: 3150 },
        { polozka: 'Prenájom priestoru + audio technika', cenaZaEvent: 350, celkoveNaklady: 2450 },
        { polozka: 'Nahrávanie eventu (video)', cenaZaEvent: 300, celkoveNaklady: 2100 },
        { polozka: 'Strih a postprodukcia (sociálne siete)', cenaZaEvent: 200, celkoveNaklady: 1400 },
        { polozka: 'Občerstvenie + Slido', cenaZaEvent: 50, celkoveNaklady: 350 },
        { polozka: 'Produkcia / organizácia', cenaZaEvent: 250, celkoveNaklady: 1750 },
        { polozka: 'Grafik (jednorazovo)', cenaZaEvent: 0, celkoveNaklady: 350 },
      ],
      total: 12600,
    },
    variantB: {
      name: 'Variant B (plný)',
      items: [
        { polozka: 'Moderátor', cenaZaEvent: 150, celkoveNaklady: 1050 },
        { polozka: 'Expert (1,5 × 300 €)', cenaZaEvent: 450, celkoveNaklady: 3150 },
        { polozka: 'Prenájom priestoru + audio technika', cenaZaEvent: 350, celkoveNaklady: 2450 },
        { polozka: 'Nahrávanie eventu (video)', cenaZaEvent: 300, celkoveNaklady: 2100 },
        { polozka: 'Strih a postprodukcia (sociálne siete)', cenaZaEvent: 200, celkoveNaklady: 1400 },
        { polozka: 'Občerstvenie + Slido', cenaZaEvent: 50, celkoveNaklady: 350 },
        { polozka: 'Produkcia / organizácia', cenaZaEvent: 250, celkoveNaklady: 1750 },
        { polozka: 'Grafik (jednorazovo)', cenaZaEvent: 0, celkoveNaklady: 350 },
        { polozka: 'PR články – PNky', cenaZaEvent: 200, celkoveNaklady: 1400 },
        { polozka: 'Reklama – AB Piešťany', cenaZaEvent: 600, celkoveNaklady: 4200 },
        { polozka: 'Plagáty (tlač + distribúcia)', cenaZaEvent: 100, celkoveNaklady: 700 },
        { polozka: 'Online reklama', cenaZaEvent: 300, celkoveNaklady: 2100 },
        { polozka: 'Rezerva (projektová)', cenaZaEvent: 286, celkoveNaklady: 2000 },
      ],
      total: 23000,
    },
  },
  
  venues: [
    {
      id: 'arta',
      name: 'ARTA',
      fullName: 'ARTA – kultúrno-kreatívne centrum Piešťany',
      description: 'ARTA je kultúrno-kreatívne centrum v Piešťanoch, ktoré poskytuje priestor pre pravidelné diskusné eventy Fórum Piešťany.',
      images: ['/arta.jpg', '/arta2.jpg'],
    },
    {
      id: 'kino-fontana',
      name: 'Kino Fontána',
      fullName: 'Kino Fontána Piešťany',
      description: 'Kino Fontána Piešťany je miestom konania záverečnej debaty kandidátov na primátora mesta Piešťany.',
      images: ['/kino fontana.jpg', '/kino fontana2.jpg'],
    },
  ] as Venue[],
};

