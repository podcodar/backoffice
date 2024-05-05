import { Module, ScheduleModule } from 'danet/mod.ts';
import { AppController } from '~/app.controller.ts';
import { CounterModule } from '~/services/counter/counter.module.ts';
import { AuthModule } from '~/services/auth/auth.module.ts';
import { HealthCheckModule } from '~/services/healthcheck/healthcheck.module.ts';
import { VisitsModule } from '~/services/visits/visits.module.ts';

@Module({
  controllers: [AppController],
  imports: [
    CounterModule,
    AuthModule,
    HealthCheckModule,
    ScheduleModule,
    VisitsModule,
  ],
})
export class AppModule {}
