export function formatDate(date: string | number | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

import { getImage } from "astro:assets";

export async function getOptimizedImage(image: ImageMetadata) {
  const optimizedImage = await getImage({
    src: image,
    format: "webp",
    loading: "eager",
  });

  return optimizedImage;
}

export function trimArrSlashes(arr: string[]) {
  return arr.map((str) => str.replace(/^\/+|\/+$/g, ""));
}

export function trimStringSlashes(arr: string) {
  return arr.replace(/^\/+|\/+$/g, "");
}

export function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export function getTiersTotalBonuseValue(bonuses: any[]): { basic: number; standard: number; pro: number; diamond: number } {
  const totlaValues = {
    basic: 0,
    standard: 0,
    pro: 0,
    diamond: 0
  }
  bonuses.forEach((bonus: any) => {
    if (bonus.values.basic && bonus.values.basic.value === true) {
      totlaValues.basic += bonus.cost
    }
    if (bonus.values.standard && bonus.values.standard.value === true) {
      totlaValues.standard += bonus.cost
    }
    if (bonus.values.pro && bonus.values.pro.value === true) {
      totlaValues.pro += bonus.cost
    }
    if (bonus.values.diamond && bonus.values.diamond.value === true) {
      totlaValues.diamond += bonus.cost
    }
  });

  return totlaValues;
}

export function openModalByID(id: string): void {
  const element = document.getElementById(id) as HTMLDialogElement | null;
  if (!element) throw new Error("No modal with the Id: " + id);
  
  if (typeof element.showModal === 'function') {
    element.showModal();
  } else {
    console.error("Element with ID " + id + " is not a dialog.");
  }
}