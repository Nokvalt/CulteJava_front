import { Component } from '@angular/core';
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

  constructor(private serviceHttp: AccueilHttpService, private loginService: LoginService, private router: Router){

    if(this.loginService.connected == null){
      this.router.navigate([""]);
    }

    this.loginService.connected.allDons = 120;
  }

  faireUnDon(){
    this.router.navigate(["/faireUnDon"]);
  }

  volerLaCagnotte(): void{
    if (this.connected().allDons != 0){
      this.serviceHttp.steal().subscribe(resp => {
        this.connected().argentVole = this.connected().allDons + this.connected().argentVole;
        this.connected().allDons = 0;
        alert("Merci pour votre vol, " + this.connected().login);
        this.router.navigate(["/accueil"]);
      });
    }else{
      alert("Vous ne pouvez pas voler une cagnotte vide, " + this.connected().login);
    }
    
  }

  connected(): TapoteurRequestResponse{
    return this.loginService.connected;
  }
}
