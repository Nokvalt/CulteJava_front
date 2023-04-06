import { Component } from '@angular/core';
import { DonHttpService } from './don-http.service';
import { Don } from '../modelDon';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'faire-un-don',
  templateUrl: './faire-un-don.component.html',
  styleUrls: ['./faire-un-don.component.scss']
})
export class FaireUnDonComponent {
  donForm: Don = new Don();

  constructor(private donService: DonHttpService, private loginService: LoginService, private router: Router){
    if(loginService.getConnected() == null){
      this.router.navigate([""]);
    }
  }

  makeDonation():void{
    this.donForm.dateDon = new Date().toJSON().slice(0,10);
    this.donForm.tapoteurId = this.connected().id;
    this.donService.create(this.donForm);
    alert("Merci pour votre don....");
    this.router.navigate(['/accueil']);
  }


  connected(): TapoteurRequestResponse {
    return this.loginService.getConnected();
  }
}
