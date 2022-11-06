import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: unknown){
    console.log('holaaaaaa')
    console.log('error to handleError', error)
  }
}
