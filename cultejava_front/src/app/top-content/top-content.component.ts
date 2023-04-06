import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss']
})
export class TopContentComponent {

constructor(private loginService: LoginService) {

}

connected(): TapoteurRequestResponse {
  return this.loginService.getConnected();
}


}
