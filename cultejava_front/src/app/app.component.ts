import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { TapoteurRequestResponse } from './modelTapoteur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cultejava_front';

  connected: TapoteurRequestResponse;

  constructor(loginService: LoginService){
    this.connected = loginService.connected;
  }
}
 