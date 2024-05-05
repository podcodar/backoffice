import { Module } from 'danet/mod.ts';
import { VisitsController } from '~/services/visits/visits.controller.ts';
import { CounterModule } from '~/services/counter/counter.module.ts';

@Module({
  controllers: [VisitsController],
  imports: [CounterModule],
})
export class VisitsModule {}
