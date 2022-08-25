import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralHeaderComponent } from './general-header/general-header.component';
import { AccessibilityHeaderComponent } from './accessibility-header/accessibility-header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
  declarations: [
    GeneralHeaderComponent,
    AccessibilityHeaderComponent,
    MenuHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralHeaderComponent
  ]
})
export class HeadersModule { }
