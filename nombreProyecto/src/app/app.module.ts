import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// mat
import { MaterialModule } from './material.module';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { IndexComponent } from './index/index.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { DialogCreateEmailComponent } from './dialog-create-email/dialog-create-email.component';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegistroComponent,
    HeaderLoginComponent,
    IndexComponent,
    MenuUserComponent,
    DialogCreateEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
