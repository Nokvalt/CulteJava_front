import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private loginService: LoginService){
  }

  deconnexion(){
    this.loginService.connected = null;
  }

  connected(): TapoteurRequestResponse{
    return this.loginService.connected;
  }
}
