import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punition-dactylo',
  templateUrl: './punition-dactylo.component.html',
  styleUrls: ['./punition-dactylo.component.scss']
})
export class PunitionDactyloComponent {
  constructor(private loginService: LoginService, private router: Router){

    if(loginService.connected == null){
      this.router.navigate([""]);
    }

  }
}
