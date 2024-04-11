import { drizzle } from 'drizzle-orm/libsql';
import { Config, createClient } from '@libsql/client';

import * as schema from './schema.ts';
import { raise } from './utils.ts';

const config: Config = {
  url: Deno.env.get('DATABASE_URL') ?? raise('missing URL'),
  authToken: Deno.env.get('DATABASE_AUTH_TOKEN') ?? raise('missing auth token'),
};

export const client = createClient(config);

export const db = drizzle(client, { schema });
