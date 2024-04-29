export type Database = Deno.Kv;

export const DB_PATH = Deno.env.get('DB_PATH');
export const DB_CONNECTION = 'DATABASE';
