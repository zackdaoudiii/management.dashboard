import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { TestComponent } from './Test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
