import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Multilist API')
    .setDescription('The Multilist API description')
    .setVersion('1.0')
    .build();

  const globalPrefix = 'api';
  const docsPrefix = 'docs';

  const port = process.env.PORT || 3000;

  try {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(docsPrefix, app, document);

    app.enableShutdownHooks();

    app.setGlobalPrefix(globalPrefix);
    await app.listen(port);

    Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  } catch (e) {
    Logger.error(e);
  }

}

bootstrap();
