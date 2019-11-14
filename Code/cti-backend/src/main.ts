import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  // the next two lines did the trick
  app.useStaticAssets(join(__dirname, '..', 'data'), {prefix: '/cti/data'});
  app.useStaticAssets(join(__dirname, '..', 'webapp'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  await app.listen(8080);
}
bootstrap();
