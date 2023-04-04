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

  constructor(private loginService: LoginService, private router: Router){

    if(this.loginService.connected == null){
      this.router.navigate([""]);
    }
  }

  faireUnDon(){
    this.router.navigate(["/faireUnDon"]);
  }
}
