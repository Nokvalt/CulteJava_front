import { Component } from '@angular/core';
import { Activite, Evenement } from '../modelEvenement';
import { EvenementHttpService } from './evenement-http';
import { TapoteurComponent } from '../tapoteur/tapoteur.component';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent {
  evenementForm: Evenement = null;

  constructor(private evenementService: EvenementHttpService) {
  }

  list(): Array<Evenement> {
    //console.log("FINDALL: ", this.evenementService.findAll());
    for (let i in this.evenementService.findAll()){
      console.log(i);
    }

    return this.evenementService.findAll();
  }
 
  add(): void {
    //console.log("ADD ", this.evenementForm);
    this.evenementForm = new Evenement();
  }

  edit(id: number): void {
    //console.log("edit ", this.evenementForm);
    this.evenementService.findById(id).subscribe(resp => {
      this.evenementForm = resp;
    });
  }

  remove(id: number): void {
    //console.log("remove ", this.evenementForm);
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
    
  listinscriptionsevenement(): any{
    //console.log("Avant Listinscriptionsevenement ",this.evenementService);
    this.evenementService.findinscription(1);
    //console.log("Après Listinscriptionsevenement ",this.evenementService);
  }

  addEvenement(): void {
    /*if (){

    }
    else{

    }*/

  }
}
