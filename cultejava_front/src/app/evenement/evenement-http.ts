import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Evenement } from '../modelEvenement';
import { environment } from 'src/environments/environment';
import { TapoteurComponent } from '../tapoteur/tapoteur.component';


@Injectable({
  providedIn: 'root'
})
export class EvenementHttpService {

  mesEvenements : Array<Evenement> =new Array<Evenement>();
  evenements: Array<Evenement> = new Array<Evenement>();
  private evenementApiPath: string;


  constructor(private http: HttpClient) {
    this.evenementApiPath = environment.apiUrl + "/evenement"; //global
    this.load();
    
  }

  findAll(): Array<Evenement> {
    return this.evenements;
    
  }

  findById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(this.evenementApiPath + "/" + id);
  }

  create(evenement: Evenement): void {
  
    this.http.post<Evenement>(this.evenementApiPath, evenement).subscribe(resp => {
      this.load();
    });
  }

  update(evenement: Evenement): void {
    this.http.put<Evenement>(this.evenementApiPath + "/" +  evenement.id, evenement).subscribe(resp => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<boolean>(this.evenementApiPath + "/" + id).subscribe(resp => {
      this.load();
    });
  }

  private load(): void {
    //liste des événements
    this.http.get<Array<Evenement>>(this.evenementApiPath).subscribe(resp => {
    this.evenements = resp;
    
    })

    //liste des inscriptions de la personne connectée
    this.http.get<Array<Evenement>>("http://localhost:8080/api/tapoteur/mesInscriptions/8").subscribe(resp => {
      this.mesEvenements = resp;  
      //console.log("Après findinscription",this.mesevenements);
    } 
      )

  }

  findInscriptions(): Array<Evenement>{
    //console.log("Avant findinscription",this.mesEvenements);
    return this.mesEvenements;
}
}
 