import { Component } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { TapoteurHttpService } from './tapoteur-http.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { BannissementRequest } from '../modelBannissement';
import { Punition, TypePunition } from '../modelPunition';

@Component({
  selector: 'app-tapoteur',
  templateUrl: './tapoteur.component.html',
  styleUrls: ['./tapoteur.component.scss']
  
})
export class TapoteurComponent {
  tapoteurForm: TapoteurRequestResponse = null;
  bannisForm: BannissementRequest = null;
  punitionForm: Punition = null;

  idPunition: number;

  cantPromote: boolean;
  cantDemote: boolean;

  nameSearch = '';
  rangSearch = '';

  constructor(private tapoteurService: TapoteurHttpService, private loginService: LoginService, private router: Router){

    if(loginService.getConnected() == null || loginService.getConnected().rang == "Fidele"){
      this.router.navigate([""]);
    }

  }

  listTapoteurs(): Array<TapoteurRequestResponse>{
    return this.tapoteurService.findAll();

  }

  add(): void {
    this.tapoteurForm = new TapoteurRequestResponse();
  }

  edit(bannisId: number): void{
    this.tapoteurService.findById(bannisId).subscribe(resp => {
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
    this.tapoteurService.ban(this.bannisForm);
    this.bannisForm = null;
  }

  passationPouvoir(idTapoteur: number):void{
    if(confirm("Etes vous sur de vouloir nommer un nouveau Grand Dev ?")){
      if(confirm("Etes vous VRAIMENT sur de vouloir nommer un nouveau Grand Dev ?")){
        if(confirm("Pensez à tout ce que vous avez accompli. Est-ce que cela en vaut vraiment la peine ?")){
          if (confirm("...Cette action est irreversible. Avez-vous bien réfléchi aux conséquences de vos actions ?")){
            if(confirm("Vous serez éliminé de la secte. Etes-vous sur de vouloir poursuivre ?")){
              this.tapoteurService.passationPouvoir(idTapoteur);
              alert("Vous avez désigné un nouveau GrandDev. Vous allez être déconnecté et ne pourrez plus vous connecter. Merci pour vos bons et loyaux services.");
              this.loginService.connected = null;
              this.router.navigate([""]);
            }
          }
        }
      }
    };
    
    
  }

  addPunition(idTapoteur:number): void{
    this.punitionForm = new Punition();
    this.idPunition = idTapoteur;
  }

  punish():void{
    this.tapoteurService.punish(this.idPunition, this.punitionForm);
    this.idPunition = null;
    this.punitionForm = null;
  }

  listTypesPunitions():any{
    return Object.keys(TypePunition).filter((v) => isNaN(Number(v)));
  }

  cancel():void{
    this.tapoteurForm = null;
  } 

  cancelBan():void{
  this.bannisForm = null;
  }

  cancelPunish():void{
    this.punitionForm = null;
  }

  connected():TapoteurRequestResponse{
    return this.loginService.connected;
  }
}
