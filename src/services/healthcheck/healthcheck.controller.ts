import { Controller, Get } from 'danet/mod.ts';

@Controller('/healthcheck')
export class HealthCheckController {
  @Get('/')
  async healthcheck() {
    return 'OK';
  }
}
