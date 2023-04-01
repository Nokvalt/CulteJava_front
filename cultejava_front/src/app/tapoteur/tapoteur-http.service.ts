import { Injectable } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TapoteurHttpService {
  tapoteurs: Array<TapoteurRequestResponse>;

  private tapoteurApiPath: string;

  constructor(private http: HttpClient) {
    this.tapoteurApiPath = environment.apiUrl + "/tapoteur";
    this.load();
  }

  private load(): void{
    this.http.get<Array<TapoteurRequestResponse>>(this.tapoteurApiPath).subscribe(resp =>{
      this.tapoteurs = resp;
    })
  }

  findAll(): Array<TapoteurRequestResponse>{
    console.log(this.tapoteurs);
    return this.tapoteurs;
  }

  findById(id: number): Observable<TapoteurRequestResponse>{
    return this.http.get<TapoteurRequestResponse>(this.tapoteurApiPath + "/" + id); 
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
}
