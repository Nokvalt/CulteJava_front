import { Component } from '@angular/core';
import { Connexion } from '../modelConnexion';
import { AccueilHttpService } from './accueil-http.service';
import { Router } from '@angular/router';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  connexionForm: Connexion = new Connexion();
  connected: TapoteurRequestResponse;
  wrongPassword: boolean = false;

  constructor(private connexionService: AccueilHttpService, private router: Router){}

  connexion(): void{
    console.log ("test" + this.connexionForm);
    this.connexionService.findByLogin(this.connexionForm).subscribe(resp => {
      this.connected = resp;})
      
      this.connected != null ? this.router.navigate(['/tapoteur']) : this.wrongPassword = true;
  }
}
