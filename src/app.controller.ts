import { Controller, Get, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';
import { CounterService } from './services/counter/counter.service.ts';

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

  @Render('visits')
  @Get('/visits')
  async visits(@Query('name') name = 'visitant') {
    await this.counterService.addVisit();
    const visits = await this.counterService.getVisits();
    return { visits, name };
  }
}
