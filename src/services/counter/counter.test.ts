import { DanetApplication, Module } from 'danet/mod.ts';
import { CounterService } from '~/services/counter/counter.service.ts';
import { DB_CONNECTION } from '~/services/database/db.shared.ts';
import { raise } from '~/shared/exception.ts';

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

  const service = application.get(CounterService);

  await t.step('list 0', async () => {
    const counter = await service.getVisits();
    counter == 0 || raise(`value ${counter}`);
  });

  await t.step('list 1 after adding', async () => {
    await service.addVisit();
    const counter = await service.getVisits();

    counter == 1 || raise(`value ${counter}`);
  });

  await t.step('list 2 after adding again', async () => {
    await service.addVisit();
    const counter = await service.getVisits();

    counter == 2 || raise(`value ${counter}`);
  });

  application.close();
  db.close();
});
