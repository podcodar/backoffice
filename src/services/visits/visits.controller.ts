import { Controller, Get, Logger, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';
import { CounterService } from '~/services/counter/counter.service.ts';

@Controller('/visits')
export class VisitsController {
  private logger = new Logger(VisitsController.name);

  constructor(private counterService: CounterService) {}

  @Render('visits')
  @Get('/')
  async visits(@Query('name') name = 'visitant') {
    this.logger.log('rendering visits' + this.counterService);
    await this.counterService.addVisit();
    const visits = await this.counterService.getVisits();
    return { visits, name };
  }
}
