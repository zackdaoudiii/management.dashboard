import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

import * as $ from 'jquery';
import {LoginComponent} from "./Pages/Auth/login/login.component";
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { SideBarComponent } from './Components/Layout/side-bar/side-bar.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { LayoutComponent } from './Components/Layout/layout/layout.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ListProductsComponent } from './Pages/Products/list-products/list-products.component';
import { AddProductComponent } from './Pages/Products/add-product/add-product.component';
import { UpdateProductComponent } from './Pages/Products/update-product/update-product.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SideBarComponent,
    FooterComponent,
    LayoutComponent,
    DashboardComponent,
    ListProductsComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        HttpClientModule,
        NgbModule,
        AppRoutingModule,
        PerfectScrollbarModule,
        FormsModule
    ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
