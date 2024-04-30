import { Module } from 'danet/mod.ts';
import { CounterService } from '../../services/counter/counter.service.ts';
import { DatabaseModule } from '../../services/database/db.module.ts';

@Module({
  imports: [DatabaseModule],
  injectables: [CounterService],
})
export class CounterModule {}
