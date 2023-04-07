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
import { TopContentComponent } from './top-content/top-content.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FaireUnDonComponent } from './faire-un-don/faire-un-don.component';
import { ProfilComponent } from './profil/profil.component';
import { PunitionDactyloComponent } from './punition-dactylo/punition-dactylo.component';
import { TapoteurFilterPipe } from './tapoteur-filter.pipe';
import { BannisComponent } from './bannis/bannis.component';
import { DemandeComponent } from './demande/demande.component';
import { LoreComponent } from './lore/lore.component';
import { FaqComponent } from './faq/faq.component';
import { DonComponent } from './don/don.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavBarComponent,
    TapoteurComponent,
    TopContentComponent,
    InscriptionComponent,
    ConnexionComponent,
    EvenementComponent,
    FaireUnDonComponent,
    ProfilComponent,
    DemandeComponent,
    PunitionDactyloComponent,
    TapoteurFilterPipe,
    BannisComponent,
    LoreComponent,
    FaqComponent,
    DonComponent,
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ], 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
