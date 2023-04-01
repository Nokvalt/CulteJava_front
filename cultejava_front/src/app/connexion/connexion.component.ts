import { Component } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connexion } from '../modelConnexion';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConnexionHttpService } from './connexion-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  connexionForm: Connexion = new Connexion();
  connected: TapoteurRequestResponse;
  wrongPassword: boolean = false;

  constructor(private connexionService: ConnexionHttpService, private router: Router){}

  connexion(): void{
    console.log ("test" + this.connexionForm.login + this.connexionForm.password);
    this.connexionService.findByLogin(this.connexionForm).subscribe(resp => {
      this.connected = resp;})
      
      this.connected != null ? this.router.navigate(['/accueil']) : this.wrongPassword = true;
  }
}
