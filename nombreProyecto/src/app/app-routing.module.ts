import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'login', component:FormLoginComponent},
  {path:'registro', component:FormRegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
