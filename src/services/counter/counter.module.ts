import { Module } from 'danet/mod.ts';
import { CounterService } from '~/services/counter/counter.service.ts';
import { DatabaseModule } from '~/services/database/db.module.ts';
import { TasksService } from '~/services/counter/tasks.service.ts';

@Module({
  imports: [DatabaseModule],
  injectables: [CounterService, TasksService],
})
export class CounterModule {}
