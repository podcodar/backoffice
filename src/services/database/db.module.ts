import { Module } from 'danet/mod.ts';

export type Database = Deno.Kv;

const DB_PATH = './deno.db';
export const DB_CONNECTION = 'DATABASE';

const createConnection = async () => {
  return await Deno.openKv(DB_PATH);
};

@Module({
  injectables: [{
    token: DB_CONNECTION,
    useValue: await createConnection(),
  }],
})
export class DatabaseModule {}
