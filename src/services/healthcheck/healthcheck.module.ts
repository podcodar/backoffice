import { Module } from 'danet/mod.ts';
import { HealthCheckController } from '~/services/healthcheck/healthcheck.controller.ts';
import { HealthCheckService } from '~/services/healthcheck/healthcheck.service.ts';

@Module({
  controllers: [HealthCheckController],
  injectables: [HealthCheckService],
  imports: [],
})
export class HealthCheckModule {}
