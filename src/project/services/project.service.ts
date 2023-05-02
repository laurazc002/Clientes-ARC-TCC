import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/auth/http/http.service';

@Injectable()
export class ProjectService {
    constructor(
        private readonly httpService: HttpCustomService,
    ){}

public async listApi(){
    return this.httpService.apiFindAll()
}

}
