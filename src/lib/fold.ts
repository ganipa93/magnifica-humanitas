/** Normaliza para buscar sin tildes ni mayúsculas. Sin dependencias: se usa en el cliente. */
export function fold(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}
