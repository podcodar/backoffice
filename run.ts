import { bootstrap } from '~/bootstrap.ts';
import { settings } from '~/config.ts';

const application = await bootstrap();
await application.listen(settings.port);
