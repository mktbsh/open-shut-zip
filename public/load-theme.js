function loadTheme() {
  const theme = localStorage.getItem("theme");
  const isDark =
    theme === "dark" ||
    ((!theme || theme === "system") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");
}

loadTheme();
