import { Component } from '@angular/core';
import { Don } from '../modelDon';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { DonHttpService } from './don-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.scss']
})
export class DonComponent {
  donForm: Don = null;

  constructor(private donService: DonHttpService, private loginService: LoginService, private router: Router){

    if(loginService.getConnected() == null){
      this.router.navigate([""]);
    }
    donService.load();
  }

  listDons(): Array<Don>{
    return this.donService.findAll();
  }

  connected():TapoteurRequestResponse{
    return this.loginService.getConnected();
  }
}
