import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function noop(): void {
  return undefined;
}

export function capitalize(value: string): string {
  const first = value.substring(0, 1).toUpperCase();
  const rest = value.substring(1).toLowerCase();
  return `${first}${rest}`;
}
