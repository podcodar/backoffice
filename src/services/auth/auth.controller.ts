import { Controller, Get, Query } from 'danet/mod.ts';
import { Render } from 'danet/src/renderer/decorator.ts';

@Controller('/api/auth/')
export class AuthController {
  @Render('hello')
  @Get('/')
  async helloWorld(@Query('name') name?: string) {
    return { title: 'the page title', name: name ?? 'world' };
  }
}
