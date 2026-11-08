const KEY = 'mh-theme';
const isDark = () => {
  const set = document.documentElement.getAttribute('data-theme');
  return set ? set === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
};

export function initTheme() {
  const btn = document.getElementById('theme');
  if (!btn) return;
  const label = () => btn.setAttribute('aria-label', isDark() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  label();
  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch { /* modo privado */ }
      label();
    };
    // Transición suave entre temas donde el navegador la soporta
    const d = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (d.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) d.startViewTransition(apply);
    else apply();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', label);
}
