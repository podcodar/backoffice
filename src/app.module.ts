import { Module } from 'danet/mod.ts';
import { AppController } from './app.controller.ts';

@Module({
  controllers: [AppController],
  imports: [],
})
export class AppModule {}
