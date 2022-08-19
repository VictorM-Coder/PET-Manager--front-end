import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetFormComponent } from './pet-form/pet-form.component';



@NgModule({
  declarations: [
    PetFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PetFormComponent
  ]
})
export class FormsModule { }
