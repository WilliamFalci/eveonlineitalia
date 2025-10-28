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
