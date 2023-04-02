import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path: "", component: ConnexionComponent, pathMatch: "full"},
  {path: "tapoteur", component: TapoteurComponent},
  {path: "accueil", component: AccueilComponent}
  {path: "evenement", component: EvenementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
