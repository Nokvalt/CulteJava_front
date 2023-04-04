import { Injectable } from '@angular/core';
import { Evenement } from '../modelEvenement';

import { EvenementComponent } from './evenement.component';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private evenements: Array<Evenement> = new Array<Evenement>();
  start = new Date(Date.now());

  constructor() { 
  }

  findAll(): Array<Evenement> {
    
    return this.evenements;
  }

  findById(id: number): Evenement {
    console.log(this.evenements);
    return this.evenements.find(f => f.id == id);
  }
//
  create(evenement: Evenement): void {
    let maxId = 0;

    this.evenements.forEach(f => {
      if(f.id > maxId) {
        maxId = f.id;
      }
    });

    evenement.id = maxId + 1;  

    this.evenements.push(evenement);
  }

  update(evenement: Evenement): void {
    let idx: number;

    idx = this.evenements.findIndex(f => f.id == evenement.id);

    this.evenements[idx] = evenement;
  }

  remove(id: number): void {
    let idx: number = this.evenements.findIndex(f => f.id == id);

    this.evenements.splice(idx, 1);
  } 
 

  
}
