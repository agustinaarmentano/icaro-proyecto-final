import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
// import {MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  exports:[
    CommonModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    MatSnackBarModule
    // MatDialogRef,
  ]
})
export class MaterialModule { }
