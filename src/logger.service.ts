import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    
    constructor() { }

    test(log:string){
        console.log(log);
    }
}