import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private http: HttpClient) {
  }
  getEmails(){
    return this.http.get('http://localhost:4000/emails');
  }
  getEmailsEnviados(){
    return this.http.get('http://localhost:4000/emails/enviados');
  }
  getEmailsRecibidos(){
    return this.http.get('http://localhost:4000/emails/recibidos');
  }
  createEmails(email: any){
    return this.http.post('http://localhost:4000/emails', email);
  }
  deleteEmails(id: number){
    return this.http.delete(`http://localhost:4000/emails/${id}`);
  }
}
