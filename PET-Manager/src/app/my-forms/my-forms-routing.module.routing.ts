import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component';

const routes: Routes = [
  { path: '', component: PetFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyFormsRoutingModule{

}
