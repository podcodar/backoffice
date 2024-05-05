import { Cron, CronExpression, Logger } from 'danet/mod.ts';
import { settings } from '~/config.ts';

export class HealthCheckService {
  private logger = new Logger(HealthCheckService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  async pingHealthCheck() {
    const healthcheckUrl =
      `http://${settings.host}:${settings.port}/healthcheck`;

    this.logger.log('Running healthcheck' + JSON.stringify({ healthcheckUrl }));
    const res = await fetch(healthcheckUrl);

    this.logger.log('Health check result: ' + await res.text());
  }
}
