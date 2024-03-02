import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomFromArray<T>(givenArray: Array<T>): T {
  return givenArray[(Math.random() * givenArray.length) | 0];
}
