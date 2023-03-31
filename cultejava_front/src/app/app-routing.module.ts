import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapoteurComponent } from './tapoteur/tapoteur.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: "", component: AccueilComponent, pathMatch: "full"},
  {path: "tapoteur", component: TapoteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
