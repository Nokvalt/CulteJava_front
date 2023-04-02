import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { EvenementComponent } from './evenement/evenement.component';

import { TapoteurComponent } from './tapoteur/tapoteur.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavBarComponent,
    TapoteurComponent,
    InscriptionComponent,
    ConnexionComponent,
    EvenementComponent,
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ], 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }