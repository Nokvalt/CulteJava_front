import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
import { EvenementComponent } from './evenement/evenement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { TapoteurComponent } from './tapoteur/tapoteur.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> main


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavBarComponent,
<<<<<<< HEAD
    EvenementComponent,
=======
    TapoteurComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ], 
=======
    FormsModule
  ],
>>>>>>> main
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
