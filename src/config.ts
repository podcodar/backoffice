import { loadSync } from '@std/dotenv';

loadSync({
  allowEmptyValues: true,
  examplePath: null,
});

export const settings = {
  host: String(Deno.env.get('HOST') || 'localhost'),
  port: Number(Deno.env.get('PORT') || 3000),
};
