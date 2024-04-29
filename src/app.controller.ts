import { Controller, Get, Inject, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';
import { CounterService } from '~/services/counter/counter.service.ts';

@Controller('')
export class AppController {
  constructor(
    private readonly counterService: CounterService,
  ) {}

  @Render('hello')
  @Get('/')
  async helloWorld(@Query('name') name?: string) {
    return { title: 'the page title', name: name ?? 'world' };
  }

  // @Render('counter')
  @Get('/counter')
  counter() {
    return new Date().toString();
  }

  @Get('/visits')
  async visits() {
    await this.counterService.addVisit();
    return { visits: await this.counterService.getVisits() };
  }
}
