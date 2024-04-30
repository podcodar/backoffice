import { Module } from 'danet/mod.ts';
import { HealthCheckController } from '~/services/healthcheck/healthcheck.controller.ts';

@Module({
  controllers: [HealthCheckController],
  imports: [],
})
export class HealthCheckModule {}
