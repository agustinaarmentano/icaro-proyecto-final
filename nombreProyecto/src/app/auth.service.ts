import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registro(registro:any){
    return this.http.post('http://localhost:4000/registro',registro);
  }
  login(login:any){
    return this.http.post('http://localhost:4000/login',login);
  }
}
