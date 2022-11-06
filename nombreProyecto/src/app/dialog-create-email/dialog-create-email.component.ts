import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { EmailsService } from '../emails.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-email',
  templateUrl: './dialog-create-email.component.html',
  styleUrls: ['./dialog-create-email.component.css'],
})
export class DialogCreateEmailComponent implements OnInit {
  form = new FormGroup({
    destinatario: new FormControl('', [Validators.required]),
    texto: new FormControl('', Validators.required)
  })

  constructor(private emailsService: EmailsService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.closeAll()
  }

  // this.emailsService.createEmails(this.email).subscribe((res: any) => {
  //   console.log(res)
  // })


}
