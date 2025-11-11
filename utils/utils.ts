import product_data from "@/data/product-data";

export function getMaxPrice () {
  const maxProductPrice = [...product_data].reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return maxProductPrice;
}

export function capitalizeAll(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase())
}


export function formatDate(dateStr: string | number | Date) {
  return new Intl.DateTimeFormat('it-IT', {
    weekday: 'long',   // "venerdì"
    day: 'numeric',    // "19"
    month: 'long',     // "settembre"
    year: 'numeric'    // "2025"
  }).format(new Date(dateStr))
}

export function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]*>/g, '');
}


export function ottimizzaTestoConKeywords(testo: string): string {
  const MAX_LEN = 160;
  const keywords = ["EVE Online Italia", "Community Italiana EVE Online"];

  let risultato = testo.trim();
  let lunghezza = risultato.length;

  for (const keyword of keywords) {
    // aggiunge " - " prima della keyword se c'è già del testo
    const separatore = risultato ? " - " : "";
    const aggiunta = separatore + keyword;

    if (lunghezza + aggiunta.length <= MAX_LEN) {
      risultato += aggiunta;
      lunghezza += aggiunta.length;
    } else {
      break; // se non c'è spazio, interrompe
    }
  }

  return risultato;
}


export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 5,
  delayMs = 1000
): Promise<Response> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      return res; // ✅ Successo, ritorna la risposta
    } catch (err) {
      console.error(`Tentativo ${attempt} fallito:`, err);

      if (attempt === retries) {
        throw new Error(`Fetch fallito dopo ${retries} tentativi`);
      }

      // ⏱️ Backoff esponenziale (aumenta il tempo tra i retry)
      const wait = delayMs * Math.pow(2, attempt - 1);
      console.log(`Riprovo tra ${wait}ms...`);
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
  }

  throw new Error("FetchWithRetry: qualcosa è andato storto (non dovrebbe mai arrivare qui)");
}