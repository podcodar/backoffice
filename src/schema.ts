import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';
import { createId } from '@paralleldrive/cuid2';

// types: https://orm.drizzle.team/docs/column-types/sqlite#text
export const users = sqliteTable('users', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  fullName: text('full_name').notNull(),
  changedAt: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`),
});
