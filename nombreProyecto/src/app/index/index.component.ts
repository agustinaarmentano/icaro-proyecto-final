import { Component, OnInit, Inject } from '@angular/core';
import { EmailsService } from '../emails.service';
import { UsuariosService } from '../usuarios.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCreateEmailComponent } from '../dialog-create-email/dialog-create-email.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private emailsService: EmailsService, public dialog: MatDialog, private usuariosService: UsuariosService) { }

  error: Error | null = null;

  emails: any[] = [];
  emailsEnviados: any[] = [];
  emailsRecibidos: any[] = [];

  usuarios: any[] = [];

  value: string = 'recibidos';

  ngOnInit(): void {
    // emails
    this.emailsService.getEmails().subscribe((res: any) => {
      try{
        this.emails = res;
      } catch(error) {
        if(error instanceof Error) this.error = error
      }
    })
    this.emailsService.getEmailsEnviados().subscribe((res: any) => {
      this.emailsEnviados = res;
      console.log(this.emails)
    })
    this.emailsService.getEmailsRecibidos().subscribe((res: any) => {
      this.emailsRecibidos = res;
      console.log(this.emails)
    })

    // usuarios
    this.usuariosService.getUsuarios().subscribe((res: any) => {
      this.usuarios = res;
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateEmailComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  asignarRecibidos(): void{
    this.value = 'recibidos'
  }
  asignarEnviados(): void{
    this.value = 'enviados'
  }
  getUsuario(id: number): void {
    this.usuariosService.getUsuario(id).subscribe((res: any) => {
      return res;
    })
  }
  deleteEmail(id: number){
    this.emailsService.deleteEmails(id).subscribe((res: any) => {
      return res;
    })
  }

}
