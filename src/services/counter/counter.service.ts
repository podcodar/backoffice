import { Cron, CronExpression, Inject, Injectable } from 'danet/mod.ts';
import { DB_CONNECTION } from '~/services/database/db.shared.ts';
import type { Database } from '~/services/database/db.shared.ts';

@Injectable()
export class CounterService {
  private collection = 'counter';

  constructor(
    @Inject(DB_CONNECTION) private readonly db: Database,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  asdasd() {
    console.log(new Date());
  }

  async addVisit() {
    const counter = await this.getVisits();
    await this.db.set(this.visitsKey, counter + 1);
  }

  async getVisits() {
    const currentValue = await this.db.get<number>(this.visitsKey);
    return currentValue.value ?? 0;
  }

  private get visitsKey() {
    return [this.collection, 'visits'];
  }
}
