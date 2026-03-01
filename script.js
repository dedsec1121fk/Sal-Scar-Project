// Theme toggle only (GitHub Pages ready).
// Dark: 🌙  Light: ☀️

function getTheme() {
  return localStorage.getItem("theme") || "dark";
}

function applyTheme(theme, persist = true) {
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) localStorage.setItem("theme", theme);

  const icon = document.getElementById("themeIcon");
  const btn = document.getElementById("themeToggle");

  if (theme === "light") {
    if (icon) icon.textContent = "☀️";
    if (btn) {
      btn.setAttribute("aria-label", "Switch to dark theme");
      btn.setAttribute("title", "Switch to dark theme");
    }
  } else {
    if (icon) icon.textContent = "🌙";
    if (btn) {
      btn.setAttribute("aria-label", "Switch to light theme");
      btn.setAttribute("title", "Switch to light theme");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Respect saved theme; default is dark.
  applyTheme(getTheme(), false);

  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = (getTheme() === "dark") ? "light" : "dark";
    applyTheme(next, true);
  });
});
