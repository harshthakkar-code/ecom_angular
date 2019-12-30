import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MatListModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatRadioModule, MatCardModule, MatSortModule, MatPaginatorModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { Routes } from '@angular/router';
import { arr_routing } from "./main-menu/router";
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { LoginComponent } from './login/login.component';
import { ViewMoreCustomerComponent } from './customer/view-more-customer/view-more-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    LoginComponent,
    ViewMoreCustomerComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    arr_routing,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  entryComponents: [
    ViewMoreCustomerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
