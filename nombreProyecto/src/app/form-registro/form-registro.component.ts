import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  paises:any = [
    'Argentina papa',
    'Bolivia',
    'Chile',
    'Uruguay',
    'Otro'
  ]
  ciudades:any = [
    'Córdoba',
    'Aguante Córdoba',
    'Alguna de Bolivia',
    'Alguna de Uruguay',
    'CHI CHI CHI LED LED LED'
  ]
  form = new FormGroup({
    apellido: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_repeat: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  constructor(public authService: AuthService, private _snackBar: MatSnackBar) { }

  registrate():void{
    this.authService.registro(this.form.value).subscribe((res: any) => {
      try {
        console.log('user create', res)
        this.form.reset()
        this.openSnackBar('usuario creado', 'x')
        return res;
      }catch(error){
        console.log('error', error)
        this.openSnackBar('hubo un error', 'x')
      }
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  ngOnInit(): void {

  }
}
