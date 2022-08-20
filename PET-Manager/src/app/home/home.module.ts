import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent
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
