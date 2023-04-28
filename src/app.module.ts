import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GeneralModule } from './general/general.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.219.229',
      port: 1433,
      username: 'sa',
      password: 'sqlTCCdesarrollop*',
      database: 'dbARC',
      stream: false,
      options: {
        encrypt: false,
        enableArithAbort: true,
        // trustServerCertificate: true,
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'], }),AuthModule, GeneralModule, 
  ],
})
export class AppModule {}
