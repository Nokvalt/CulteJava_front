import { Component } from '@angular/core';
import { Bannis } from '../modelBannis';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { BannisHttpService } from './bannis-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-bannis',
  templateUrl: './bannis.component.html',
  styleUrls: ['./bannis.component.scss']
})
export class BannisComponent {
  bannisForm: Bannis = null;

  constructor(private bannisService: BannisHttpService, private loginService: LoginService, private router: Router){

    if(loginService.getConnected() == null || loginService.getConnected().rang == "Fidele" || loginService.getConnected().rang == "Indenteur"){
      this.router.navigate([""]);
    }
  }

  listBannis(): Array<Bannis>{
    return this.bannisService.findAll();
  }

  connected():TapoteurRequestResponse{
    return this.loginService.getConnected();
  }
}
