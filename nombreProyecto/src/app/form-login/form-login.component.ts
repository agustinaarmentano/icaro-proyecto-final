import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  hide = true;
  form = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.form.value).subscribe((res: any) => {
      try {
        this.router.navigate(['/'])
        return res;
      }catch(error){
        console.log('error', error)
      }
    })
  }
}

