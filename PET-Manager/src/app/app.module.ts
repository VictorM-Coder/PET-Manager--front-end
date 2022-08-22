import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersModule } from './headers/headers.module';
import { MyFormsModule } from "./my-forms/my-forms.module";
import { HomeModule } from './home/home.module';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeadersModule,
    FormsModule,
    HomeModule,
    MyFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
