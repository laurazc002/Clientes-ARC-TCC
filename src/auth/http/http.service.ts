import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
    constructor(
        private readonly httpService: HttpService
    ){}
    public async apiFindAll(){
        try {
            const response = await firstValueFrom(
                this.httpService.get('https://somos.tcc.com.co/Api/Login/')
            );
            return response.data;
        }catch (error){
            throw 'An error happened'
        }
    }
}
