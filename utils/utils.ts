import product_data from "@/data/product-data";

export function getMaxPrice () {
  const maxProductPrice = [...product_data].reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return maxProductPrice;
}

export function capitalizeAll(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase())
}


export function formatDate(dateStr) {
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