import { Component } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { TapoteurHttpService } from './tapoteur-http.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { BannissementRequest } from '../modelBannissement';

@Component({
  selector: 'app-tapoteur',
  templateUrl: './tapoteur.component.html',
  styleUrls: ['./tapoteur.component.scss']
  
})
export class TapoteurComponent {
  tapoteurForm: TapoteurRequestResponse = null;
  connected: TapoteurRequestResponse =  null;
  bannisForm: BannissementRequest = null;

  cantPromote: boolean;
  cantDemote: boolean;

  constructor(private tapoteurService: TapoteurHttpService, private loginService: LoginService, private router: Router){
    this.connected = this.loginService.connected;

    if(this.connected == null){
      this.router.navigate([""]);
    }
  }

  listTapoteurs(): Array<TapoteurRequestResponse>{
    return this.tapoteurService.findAll();
  }

  add(): void {
    this.tapoteurForm = new TapoteurRequestResponse();
  }

  edit(id: number): void{
    this.tapoteurService.findById(id).subscribe(resp => {
      this.tapoteurForm = resp;
    })
  }

  remove(id: number): void{
    this.tapoteurService.remove(id);
  }

  save(): void {
    if(this.tapoteurForm.id) {
      this.tapoteurService.update(this.tapoteurForm);
    } else {
      this.tapoteurService.create(this.tapoteurForm);
    }
    this.cancel();
  }

  promote(id: number):void{
    this.tapoteurService.upgradeRang(id);
  }

  demote(id: number):void{
    this.tapoteurService.degradeRang(id);
  }

  banForm(id: number): void{
    this.bannisForm = new BannissementRequest();
    this.bannisForm.tapoteurId = id;
  }

  ban():void{
    if (this.bannisForm.dateBannissement == null){
      this.bannisForm.dateBannissement = new Date().toJSON().slice(0,10);
    }
    console.log(this.bannisForm);
    this.tapoteurService.ban(this.bannisForm);
    this.bannisForm = null;
  }

  cancel():void{
    this.tapoteurForm = null;
  } 
}
