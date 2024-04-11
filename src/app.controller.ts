import { Controller, Get, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';

@Controller('')
export class AppController {
  constructor() {
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
}
