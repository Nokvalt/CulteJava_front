import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TapoteurHttpService } from '../tapoteur/tapoteur-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-punition-dactylo',
  templateUrl: './punition-dactylo.component.html',
  styleUrls: ['./punition-dactylo.component.scss']
})
export class PunitionDactyloComponent {
  fInput: string;
  sInput: string;

  constructor(private tapoteurService: TapoteurHttpService, private loginService: LoginService, private router: Router){

    if(loginService.getConnected() == null && loginService.getId == null){
      this.router.navigate([""]);
    }
  }

  submit(){
    if(this.fInput == this.sInput){
      this.tapoteurService.removePunition(this.connectedId());
      alert("Merci. Vous pouvez vous connecter.");
      this.router.navigate(['']);
    }
  }

  retour():void{
    this.router.navigate(['']);
  }

  connectedId(): number{
    return this.loginService.getId();
  }
}
