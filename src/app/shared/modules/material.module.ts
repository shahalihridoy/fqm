import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
