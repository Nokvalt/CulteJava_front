import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TapoteurComponent } from './tapoteur/tapoteur.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path: "", component: ConnexionComponent, pathMatch: "full"},
  {path: "tapoteur", component: TapoteurComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "evenement", component: EvenementComponent},
  { path: 'inscription', component: InscriptionComponent },
  {path: 'profil', component: ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
