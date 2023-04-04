import { Component } from '@angular/core';
import { Activite, Evenement } from '../modelEvenement';
import { EvenementHttpService } from './evenement-http';
import { TapoteurComponent } from '../tapoteur/tapoteur.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

//import { LoginService } from './chemin/vers/login.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent {
  evenementForm: Evenement = null;

  constructor(private evenementService: EvenementHttpService, private loginService: LoginService, private router: Router) {
    if(this.loginService.connected == null){
      this.router.navigate([""]);
    }
  }

  list(): Array<Evenement> {
    return this.evenementService.findAll();
  }
 
  add(): void {
    this.evenementForm = new Evenement();
  }

  edit(id: number): void {
    this.evenementService.findById(id).subscribe(resp => {
      this.evenementForm = resp;
    });
  }

  remove(id: number): void {
    this.evenementService.remove(id);
  }

  save(): void {
    if(this.evenementForm.id) {
      this.evenementService.update(this.evenementForm);
    } else {
      this.evenementService.create(this.evenementForm);
    }

    this.cancel();
  }

  cancel(): void {
    this.evenementForm = null;
  }

  listActivites(): any{
    return Object.keys(Activite).filter((v) => isNaN(Number(v)));
  } 
    
  /*listMesInscriptions(): Array<Evenement>{
    return this.evenementService.findInscriptions();
  }*/

   
  }

