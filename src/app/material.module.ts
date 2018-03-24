import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule,MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule],
  providers: [ ]
})
export class MaterialModule { }