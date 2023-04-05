import { Injectable } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BannissementRequest } from '../modelBannissement';

@Injectable({
  providedIn: 'root'
})
export class TapoteurHttpService {
  tapoteurs: Array<TapoteurRequestResponse>;

  cantPromote: boolean;
  cantDemote: boolean;

  private tapoteurApiPath: string;

  constructor(private http: HttpClient) {
    this.tapoteurApiPath = environment.apiUrl + "/tapoteur";
    this.load();
  }

  private load(): void{
    this.http.get<Array<TapoteurRequestResponse>>(this.tapoteurApiPath).subscribe(resp =>{
      this.tapoteurs = resp;
      console.log("reponse::::", resp)
      console.log("liste1:", this.tapoteurs);

    })
  }

  findAll(): Array<TapoteurRequestResponse>{
    console.log(this.tapoteurs);
    return this.tapoteurs.sort((t1, t2) => (t1.sommeDon < t2.sommeDon) ? 1 : -1);
  }

  findById(id: number): Observable<TapoteurRequestResponse>{
    return this.http.get<TapoteurRequestResponse>(this.tapoteurApiPath + "/" + id); 
  }

  upgradeRang(id: number):void{
    this.http.get<TapoteurRequestResponse>(this.tapoteurApiPath + "/promouvoir/" + id).subscribe(
      resp => {
        this.load();
      }, error => {
        if(error.status == 400){
          alert("Impossible de promouvoir ce tapoteur!")
        }
      });
  }

  degradeRang(id: number): void{
    this.http.get<TapoteurRequestResponse>(this.tapoteurApiPath + "/retrograder/" + id).subscribe(resp => {
      this.load();
    }, error => {
      if(error.status == 400){
        alert("Impossible de rétrograder ce tapoteur!")
      }
    });
  }

  ban(bannisRequest: BannissementRequest):void{
    this.http.post<BannissementRequest>(this.tapoteurApiPath + "/bannissement", bannisRequest).subscribe(resp => {
      this.load();
    }, error => {
      if(error.status == 400){
        alert("Impossible de banir ce tapoteur!")
      }
    });
  }

  remove(id: number): void {
    this.http.delete<boolean>(this.tapoteurApiPath + "/" + id).subscribe(resp => {
      this.load();
    });
  }

  create(tapoteur: TapoteurRequestResponse): void {
    switch(tapoteur.rang){
      case "Fidele":{
        this.http.post<TapoteurRequestResponse>(this.tapoteurApiPath + "/addFidele", tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
      case "Indenteur":{
        this.http.post<TapoteurRequestResponse>(this.tapoteurApiPath + "/addIndenteur", tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
      case "Compileur":{
        this.http.post<TapoteurRequestResponse>(this.tapoteurApiPath + "/addCompileur", tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
      case "GrandDev":{
        this.http.post<TapoteurRequestResponse>(this.tapoteurApiPath + "/addGrandDev", tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
    }
  }

  update(tapoteur: TapoteurRequestResponse): void {
    switch(tapoteur.rang){
      case "Fidele":{
        this.http.put<TapoteurRequestResponse>(this.tapoteurApiPath + "/editFidele/" + tapoteur.id, tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
      case "Indenteur":{
        this.http.put<TapoteurRequestResponse>(this.tapoteurApiPath + "/editIndenteur/" + tapoteur.id, tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
      case "Compileur":{
        this.http.put<TapoteurRequestResponse>(this.tapoteurApiPath + "/editCompileur/" + tapoteur.id, tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
      case "GrandDev":{
        this.http.put<TapoteurRequestResponse>(this.tapoteurApiPath + "/editGrandDev/" + tapoteur.id, tapoteur).subscribe(resp => {this.load();}); 
        break;
      }
    }
  }
  
  passationPouvoir(idTapoteur: number):void{
    this.http.get<TapoteurRequestResponse>(this.tapoteurApiPath + "/passation/" + idTapoteur).subscribe();
  }
}
