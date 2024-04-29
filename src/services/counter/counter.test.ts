import { assertEquals } from 'assert/mod.ts';
import { DanetApplication, injector, Module } from 'danet/mod.ts';
import { CounterService } from '~/services/counter/counter.service.ts';
import { DB_CONNECTION } from '~/services/database/db.shared.ts';

Deno.test('db', async (t) => {
  const db = await Deno.openKv(':memory:');

  @Module({
    injectables: [{
      token: DB_CONNECTION,
      useValue: db,
    }, CounterService],
  })
  class TestModule {}

  const application = new DanetApplication();
  await application.init(TestModule);
  await application.listen(0);

  const service = injector.get(CounterService);

  await t.step('list 0', async () => {
    const counter = await service.getVisits();
    assertEquals(counter, 0);
  });

  await t.step('list 1 after adding', async () => {
    await service.addVisit();
    const counter = await service.getVisits();
    assertEquals(counter, 1);
  });

  await t.step('list 2 after adding again', async () => {
    await service.addVisit();
    const counter = await service.getVisits();
    assertEquals(counter, 2);
  });

  application.close();
  db.close();
});

function def(cb: () => void | Promise<void>) {
  setTimeout(cb, 0);
}
