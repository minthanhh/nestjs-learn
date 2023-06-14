import { INestApplication, ValidationPipe } from '@nestjs/common';

export const validateConfig = (app:INestApplication ) => {
    app.useGlobalPipes(new ValidationPipe())
}