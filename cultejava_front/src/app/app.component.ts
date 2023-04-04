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

  constructor(private loginService: LoginService){
   
  }

  connected(): TapoteurRequestResponse {
    return this.loginService.connected;
  }
}
 