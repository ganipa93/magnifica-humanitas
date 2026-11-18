import { buildIndex } from '../lib/search-index';

export function GET() {
  return new Response(JSON.stringify(buildIndex()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
