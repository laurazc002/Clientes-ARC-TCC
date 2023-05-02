import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { HttpCustomService } from 'src/auth/http/http.service';
import { ProjectService } from './services/project.service';
import { ProjectController } from './controllers/project.controller';

@Module({
  imports: [AuthModule],
  providers: [ProjectService, HttpCustomService],
  controllers: [ProjectController]
})
export class ProjectModule {}
