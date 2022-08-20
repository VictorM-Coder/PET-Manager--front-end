import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PetsShowcaseComponent } from './pets-showcase/pets-showcase.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    PetCardComponent,
    PetsShowcaseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
