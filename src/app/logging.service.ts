import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    log(inputString){
        console.log('This is from logging service : ', inputString);
    }

  constructor() { }

}
