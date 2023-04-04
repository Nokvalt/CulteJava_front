import { Component } from '@angular/core';
import { Activite, Evenement } from '../modelEvenement';
import { EvenementHttpService } from './evenement-http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { InscriptionEvenement } from '../modelInscriptionEvenement';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent {
  evenementForm: Evenement = null;
  inscription: InscriptionEvenement = null;
  incomplete: boolean = false;

  constructor(private evenementService: EvenementHttpService, private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    if(this.loginService.connected == null){
      this.router.navigate([""]);
    }
  }

  connected():TapoteurRequestResponse{
    return this.loginService.connected;
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

  inscriptionEvenement(eventId: number):void{
    this.inscription = new InscriptionEvenement(eventId);
    this.evenementService.addInscription(this.inscription);
  }
   
  }

