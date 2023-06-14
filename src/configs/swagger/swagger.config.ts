import { INestApplication } from "@nestjs/common";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";


export const swaggerConfig = ( app: INestApplication ) => {
    const config = new DocumentBuilder()
    .setTitle('users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
