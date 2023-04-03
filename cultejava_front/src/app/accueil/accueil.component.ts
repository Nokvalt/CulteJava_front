import { Component } from '@angular/core';
import { Connexion } from '../modelConnexion';
import { AccueilHttpService } from './accueil-http.service';
import { Router } from '@angular/router';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { LoginService } from '../login.service';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  connected: TapoteurRequestResponse;

  constructor(private loginService: LoginService, private router: Router){
    this.connected = this.loginService.connected;

    if(this.connected == null){
      this.router.navigate([""]);
    }
  }
}
