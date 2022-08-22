import { MyFormsRoutingModule } from './my-forms-routing.module.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetFormComponent } from './pet-form/pet-form.component';
import { CreateButtonBarComponent } from './create-button-bar/create-button-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PetFormComponent,
    CreateButtonBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyFormsRoutingModule
  ],
  exports: [
    PetFormComponent,

  ]
})
export class MyFormsModule { }
