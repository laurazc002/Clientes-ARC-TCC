import { Controller, Get} from '@nestjs/common';
import {ProjectService} from 'src/project/services/project.service';

@Controller('project')
export class ProjectController {
    constructor(
        private projectService: ProjectService,
    
    ) {}

@Get('list/api')
public async listApi(){
    return this.projectService.listApi()
}


}



    