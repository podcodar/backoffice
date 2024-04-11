import 'dotenv/load.ts';
import { migrate } from 'migrator';
import { client, db } from './db.ts';

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './drizzle' });

// Don't forget to close the connection, otherwise the script will hang
client.close();
