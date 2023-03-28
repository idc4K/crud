import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './component/edit/edit.component';
import { AddComponent } from './component/add/add.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    AddComponent,
    DashboardComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
