import { Module } from 'danet/mod.ts';
import { AppController } from './app.controller.ts';
import { CounterModule } from './services/counter/counter.module.ts';
import { AuthModule } from './services/auth/auth.module.ts';
import { CounterService } from '~/services/counter/counter.service.ts';

@Module({
  controllers: [AppController],
  imports: [CounterModule, AuthModule],
  injectables: [CounterService],
})
export class AppModule {}
