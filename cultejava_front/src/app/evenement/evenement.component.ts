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
  connected: TapoteurRequestResponse; // si tu met boolean ça ne marche pas le constructeur se met :/ 
  evenementForm: Evenement = null;
  listMesEvents : Array<Evenement> = new Array<Evenement>;

  constructor(private evenementService: EvenementHttpService, private loginService: LoginService, private router: Router) {
    this.connected = this.loginService.connected;

    if(this.connected == null){
      this.router.navigate(["/evenement"]);
    } else {
      this.listMesEvents = evenementService.evenements;
      // recherche ses évemenments pour la personne connectée et stocké dans une variable
    }
  }

  list(): Array<Evenement> {
    //console.log("FINDALL: ", this.evenementService.findAll());
    /*for (let i in this.evenementService.findAll()){
      console.log(i);
    }*/

    console.log("EVENEMETS:::::" + this.evenementService.findAll());

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
    
  listMesInscriptions(): Array<Evenement>{

    //console.log("INSCRIPTIONS:::::" + this.evenementService.findInscriptions());

    return this.evenementService.findInscriptions();
    //console.log("Après Listinscriptionsevenement ",this.evenementService);
  }

  estInscrit(idEvenement: number):boolean{
  
    console.log("estInscrit",idEvenement);
    for( let ev of this.listMesEvents ){
      console.log("inscrit ou pas",idEvenement+":"+ev.id);
      if (idEvenement == ev.id) {
          return true;
      }

    }
    
    return false;
  
    }
   
  }
  
