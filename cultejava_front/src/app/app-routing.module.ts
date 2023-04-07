import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TapoteurComponent } from './tapoteur/tapoteur.component';
import { FaireUnDonComponent } from './faire-un-don/faire-un-don.component';
import { ProfilComponent } from './profil/profil.component';
import { PunitionDactyloComponent } from './punition-dactylo/punition-dactylo.component';
import { BannisComponent } from './bannis/bannis.component';
import { DemandeComponent } from './demande/demande.component';
import { LoreComponent } from './lore/lore.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: "", component: ConnexionComponent, pathMatch: "full"},
  {path: "tapoteur", component: TapoteurComponent},
  {path: 'bannis', component: BannisComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "evenement", component: EvenementComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'faireUnDon', component: FaireUnDonComponent},
  {path: "demandes", component: DemandeComponent},
  {path: 'punitionDactylo', component: PunitionDactyloComponent},
  {path: 'lore', component: LoreComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
