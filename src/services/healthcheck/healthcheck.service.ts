import { Cron, CronExpression, Logger } from 'danet/mod.ts';

export class HealthCheckService {
  private logger = new Logger(HealthCheckService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  async pingHealthCheck() {
    this.logger.log('Health check pinged');

    const res = await fetch(Deno.env.get('HOST') + '/healthcheck');

    this.logger.log('Health check result: ' + await res.text());
  }
}
