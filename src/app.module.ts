import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({ 
    type: 'mssql',
    database: process.env.MSSQL_DATABASE,
    host: process.env.MSSQL_HOST,
    password: process.env.MSSQL_PASSWORD,
    port: +process.env.MSSQL_PORT,
    username: process.env.MSSQL_USERNAME,
    stream: false,
    options: { 
      encrypt: false, 
      enableArithAbort: false, 
      // trustServerCertificate: true,
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'], }),AuthModule,ProjectModule, 
  ],
})
export class AppModule {}
