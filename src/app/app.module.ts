import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Cnc1Component } from './cnc1/cnc1.component';
import { Cnc2Component } from './cnc2/cnc2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

@NgModule({
  declarations: [
    AppComponent,
    Cnc1Component,
    Cnc2Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
