import { isServer } from "@/shared/lib/browser";
import { noop } from "@/shared/lib/utils";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Theme = "system" | "light" | "dark";

const themeAtom = atomWithStorage<Theme>("theme", "system", {
  getItem(key, initialValue) {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return initialValue;
    if (storedValue === "dark" || storedValue === "light") return storedValue;
    return initialValue;
  },
  setItem(key, newValue) {
    localStorage.setItem(key, newValue);

    const isDark =
      newValue === "dark" ||
      (newValue === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
  subscribe(key, callback, initialValue) {
    if (isServer()) return noop;

    const handler = (e: StorageEvent) => {
      const isTargetStorage = e.storageArea === localStorage && e.key === key;
      if (!isTargetStorage) return;
      const newValue = e.newValue || initialValue;
      callback(newValue as Theme);
    };

    window.addEventListener("storage", handler);

    return () => window.removeEventListener("storage", handler);
  },
});

export function useTheme() {
  return useAtom(themeAtom);
}
