import { Module } from 'danet/mod.ts';
import { DB_CONNECTION, DB_PATH } from '~/services/database/db.shared.ts';

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
