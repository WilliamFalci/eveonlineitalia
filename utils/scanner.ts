type Pilot = {
  name: string;
  portraitUrl: string;
  corporation: string;
  corpTicker: string;
  corpLogoUrl: string;
  alliance: string;
  allianceTicker: string;
  allianceLogoUrl: string;
};

type Member = {
  name: string;
  portraitUrl: string;
};

type CorporationOverview = {
  name: string;
  ticker: string;
  logoUrl: string;
  count: number;
  members: Member[];
};

type AllianceOverview = {
  name: string;
  logoUrl: string;
  count: number;
  corporations: CorporationOverview[];
};

export const shipClassSortOrder:string[]= [
  "titan",
  "supercarrier",
  "forceauxiliary",
  "dreadnought",
  "carrier",
  "industrial",
  "industrialcommandship",
  "freighter",
  "jumpfreighter",
  "capital",
  "blackops",
  "marauder",
  "battleship",
  "commandship",
  "combatbattlecruiser",
  "battlecruiser",
  "hauler",
  "strategiccruiser",
  "flagcruiser",
  "heavyinterdictioncruiser",
  "logisticscruiser",
  "heavyassaultcruiser",
  "reconcruiser",
  "forcereconship",
  "logistics",
  "cruiser",
  "tacticaldestroyer",
  "interdictor",
  "commanddestroyer",
  "destroyer",
  "assaultfrigate",
  "interceptor",
  "covertops",
  "electronicattackfrigate",
  "explorationfrigate",
  "logisticsfrigate",
  "frigate",
  "capsule",
]

export const eveShipClasses: Record<string, string> = {
  // Classi principali
  "frigate": "frigate",
  "destroyer": "destroyer",
  "cruiser": "cruiser",
  "battlecruiser": "battlecruiser",
  "battleship": "battleship",
  "capital": "capital",
  "supercapital": "supercapital",

  // Sottoclassi di Frigate
  "assaultfrigate": "frigate",
  "interceptor": "frigate",
  "covertops": "frigate",
  "electronicattackfrigate": "frigate",
  "explorationfrigate": "frigate",
  "logisticsfrigate": "frigate",

  // Sottoclassi di Destroyer
  "interdictor": "destroyer",
  "commanddestroyer": "destroyer",
  "tacticaldestroyer": "destroyer",

  // Sottoclassi di Cruiser
  "heavyassaultcruiser": "cruiser",
  "reconcruiser": "cruiser",
  "logisticscruiser": "cruiser",
  "heavyinterdictioncruiser": "cruiser",
  "strategiccruiser": "cruiser",
  "forcereconship": "cruiser",
  "logistics": "cruiser",
  "flagcruiser": "cruiser",

  "hauler": "industrial",

  // Sottoclassi di Battlecruiser
  "commandship": "battlecruiser",
  "combatbattlecruiser": "battlecruiser",

  // Sottoclassi di Battleship
  "blackops": "battleship",
  "marauder": "battleship",

  // Navi industriali e capitali
  "industrial": "capital",
  "industrialcommandship": "industrialcommand",
  "freighter": "capital",
  "jumpfreighter": "capital",
  "carrier": "capital",
  "dreadnought": "capital",
  "forceauxiliary": "capital",

  // Supercapital
  "supercarrier": "supercapital",
  "titan": "supercapital",

  //capsule
  "capsule": "capsule"
};

export function getFullOverview(pilots: Pilot[]): AllianceOverview[] {
  const alliancesMap = new Map<string, AllianceOverview>();

  for (const pilot of pilots) {
    if (!pilot.alliance) {
      pilot.alliance = "- No Alliance -"
    };

    // --- Trova o crea l'alleanza ---
    let alliance = alliancesMap.get(pilot.alliance);
    if (!alliance) {
      alliance = {
        name: pilot.alliance,
        logoUrl: (pilot.alliance === "- No Alliance -") ? '/images/icons/cross-out.png' : pilot.allianceLogoUrl,
        count: 0,
        corporations: [],
      };
      alliancesMap.set(pilot.alliance, alliance);
    }

    // Incrementa il totale piloti nell'alleanza
    alliance.count += 1;

    // --- Trova o crea la corporation ---
    let corp = alliance.corporations.find(c => c.name === pilot.corporation);
    if (!corp) {
      corp = {
        name: pilot.corporation,
        ticker: pilot.corpTicker,
        logoUrl: pilot.corpLogoUrl,
        count: 0,
        members: [],
      };
      alliance.corporations.push(corp);
    }

    // Aggiungi il pilota alla corporation
    corp.members.push({
      name: pilot.name,
      portraitUrl: pilot.portraitUrl,
    });

    // Incrementa conteggio corporation
    corp.count += 1;

    alliance.corporations.sort((a, b) => b.members.length - a.members.length)
  }


  return Array.from(alliancesMap.values()).sort((a, b) => b.corporations.flatMap((xb) => xb.members).length - a.corporations.flatMap((xa) => xa.members).length);;
}

type Entry = {
  iconId: number;
  icon?: string;
  name: string;
  className?: string;
  objectType?: string;
  type: string;
  distance: string | null;
  count: number;
};

export function parseTextToObjectsAndTypes(text: string): {
  objects: Entry[];
  uniqueTypes: string[];
  sun: string;
} {
  const excluded = [
    'Stargate',
    'Planet',
    'Asteroid Belt',
    'Sovereignty Hub',
    'Sun'
  ]
  const lines = text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const typeMap = new Map<string, Entry>();
  let sun = 'uknow'

  for (const line of lines) {
    const parts = line.split(/\t+/);
    if (parts.length < 4) {
      // fallback per separatore con spazi multipli
      const spaceParts = line.split(/\s{2,}/);
      if (spaceParts.length >= 4) parts.splice(0, parts.length, ...spaceParts);
    }

    const [iconIdStr, name, type, distance] = parts;
    const parsedType = type?.trim() ?? '';

    if (!parsedType) continue;

    if (typeMap.has(parsedType)) {
      // incrementa il contatore se esiste già
      const existing = typeMap.get(parsedType)!;
      existing.count += 1;
    } else {
      // aggiunge un nuovo record

      if(parsedType.includes('Sun')){
        sun = name.substring(0, name?.lastIndexOf('-') -1)
      }
      if( !excluded.some(term => parsedType.includes(term))){
        typeMap.set(parsedType, {
          iconId: parseInt(iconIdStr, 10),
          name: name?.trim() ?? '',
          type: parsedType,
          distance: distance && distance !== '-' ? distance.trim() : null,
          count: 1,
        });
      }

    }
  }

  const objects = Array.from(typeMap.values())

  const uniqueTypes = objects.map(o => o.type)

  return { objects, uniqueTypes, sun };
}

export function countByClassName(items: any[]): Record<string, Record<string,number>> {
  // Somma le occorrenze basate su 'count'
  const counts = items.reduce<Record<string, Record<string,number>>>((acc, item) => {
    if(item.objectType === 'Ship')
      acc[item.className] = {
        techLevel: item.techLevel,
        count: (acc[item.className]?.count || 0) + item.count
      };
    return acc;
  }, {});

  // Ordina per valore decrescente e ricrea l’oggetto
  const sortedEntries = Object.entries(counts).sort((a, b) => b[1].count - a[1].count);
  return Object.fromEntries(sortedEntries);
}