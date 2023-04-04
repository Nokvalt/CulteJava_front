import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  connected: TapoteurRequestResponse;

  constructor(private loginService: LoginService){
    this.connected = loginService.connected;
  }

  deconnexion(){
    this.loginService.connected = null;
  }
}
