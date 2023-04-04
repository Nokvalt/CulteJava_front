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
  connected: TapoteurRequestResponse;

  constructor(private donService: DonHttpService, loginService: LoginService, private router: Router){
    this.connected = loginService.connected;
  }

  makeDonation():void{
    this.donForm.dateDon = new Date().toJSON().slice(0,10);
    this.donForm.tapoteurId = this.connected.id;
    console.log("form", this.donForm);
    this.donService.create(this.donForm);
    alert("Merci pour votre don....");
    this.router.navigate(['/accueil']);
  }

  
}
