import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapoteurComponent } from './tapoteur/tapoteur.component';
import { AccueilComponent } from './accueil/accueil.component';
/*import { CompileurComponent } from './compileur/compileur.component';*/
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path: "", component: AccueilComponent, pathMatch: "full"},
  {path: "tapoteur", component: TapoteurComponent},
  /*{path: "compileur", component: CompileurComponent},*/
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
