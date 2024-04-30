import { Controller, Get, Inject, injector, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';
import { CounterService } from './services/counter/counter.service.ts';
import { DB_CONNECTION } from '~/services/database/db.shared.ts';

@Controller('')
export class AppController {
  constructor(
    @Inject() private readonly counterService: CounterService,
  ) {
    console.log(injector.get(CounterService));
    console.log(injector.getAll());
  }

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
    console.log(injector.get(DB_CONNECTION));
    console.log();
    const counterService = injector.get(CounterService);
    console.log(injector.getAll());
    console.log(injector.getAll().get(CounterService));
    await counterService.addVisit();
    const visits = await counterService.getVisits();
    return { visits, name };
  }
}
