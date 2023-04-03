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

  mesevenements : Array<Evenement> =new Array<Evenement>();
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
    console.log(this.evenements);
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
    this.http.get<Array<Evenement>>(this.evenementApiPath).subscribe(resp => {
    this.evenements = resp;
    
    })
  }

  findinscription(id : number): void{
    this.http.get<Array<Evenement>>(this.evenementApiPath + "/mesInscriptions/" + id).subscribe(resp => {
    this.mesevenements = resp;
  }
    )
}
}
