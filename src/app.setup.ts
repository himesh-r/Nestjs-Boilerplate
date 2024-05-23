import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';

export const setupApp = async (app: INestApplication) => {
  const configService = app.get(ConfigService);
  const basePath = configService.get<string>('BASE_PATH') || '';
  const port = configService.get<number>('PORT') || 3000;
  app.setGlobalPrefix(basePath);
  await app.listen(port);
};
