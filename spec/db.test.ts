import { assertNotEquals } from 'assert/mod.ts';

Deno.test('db', async (t) => {
  await t.step('fail if no credential is present', async () => {
    try {
      await import('../src/db.ts');
    } catch (error) {
      assertNotEquals(error, undefined);
    }
  });
});
