import { Cron, CronExpression, Injectable, Logger } from 'danet/mod.ts';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    this.logger.log('Called when the current minutes is 45');
  }
}
