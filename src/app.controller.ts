import { Controller, Get, injector, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';
import { CounterService } from './services/counter/counter.service.ts';

@Controller('')
export class AppController {
  constructor(
    private readonly counterService: CounterService,
  ) {
    this.counterService = injector?.get(CounterService);
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
    const counterService = injector?.get(CounterService);
    const map = injector.getAll();

    console.log(this.counterService);
    console.log({ map });
    console.log(map?.get(CounterService));

    await counterService.addVisit();
    const visits = await counterService.getVisits();
    return { visits, name };
  }
}
