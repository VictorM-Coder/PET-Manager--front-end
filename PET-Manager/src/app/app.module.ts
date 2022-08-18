import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralHeaderComponent } from './general-header/general-header.component';
import { AccessibilityHeaderComponent } from './header/accessibility-header/accessibility-header.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralHeaderComponent,
    AccessibilityHeaderComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
