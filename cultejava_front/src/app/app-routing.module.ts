import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FideleComponent } from './fidele/fidele.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: "", component: AccueilComponent, pathMatch: "full"},
  {path: "fidele", component: FideleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
