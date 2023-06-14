import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './configs/swagger/swagger.config';
import { validateConfig } from './configs/validate/validate.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  validateConfig(app);
  swaggerConfig(app);
  await app.listen(3000);
}
bootstrap();
