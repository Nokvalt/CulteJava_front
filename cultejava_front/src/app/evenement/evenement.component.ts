import { Component } from '@angular/core';
import { Activite, Evenement } from '../modelEvenement';
import { EvenementHttpService } from './evenement-http';

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
    console.log("FINDALL: ", this.evenementService.findAll());
    for (let i in this.evenementService.findAll()){
      console.log(i);
    }
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

}
