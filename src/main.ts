import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { environment } from 'environment';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config(); 
process.env.NODE_ENV = process.env.NODE_ENV || 'local';
dotenv.config({ path: path.join(process.cwd(), 'environments', `${process.env.NODE_ENV}.env`) });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(   
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,  
    })
  );
  const port = environment.port; 
  // if (process.env.NODE_ENV !== 'production') { 
  //   this.configureSwagger(app); 
  // } 
  await app.listen(port, '0.0.0.0', () =>(`Clientes ARC TCC listening on ${port}`));
  const config = new DocumentBuilder()
    .setTitle('ARC')
    .setDescription('The ARC API description')
    .setVersion('1.0')
    .addTag('swagger')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
}
bootstrap();
