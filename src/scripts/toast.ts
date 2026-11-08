let timer: number | undefined;
export function toast(msg: string) {
  const el = document.querySelector<HTMLElement>('.toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(timer);
  timer = window.setTimeout(() => el.classList.remove('show'), 2200);
}
