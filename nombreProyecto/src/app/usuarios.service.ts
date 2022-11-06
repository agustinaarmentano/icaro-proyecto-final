import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('http://localhost:4000/usuarios');
  }
  getUsuario(id: number){
    return this.http.get(`http://localhost:4000/usuarios/${id}`);
  }
}
