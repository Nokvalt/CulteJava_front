import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionHttpService {

  tapoteurs: Array<TapoteurRequestResponse>;

  private inscriptionApiPath: string;
  private tapoteurApiPath: string;

  constructor(private http: HttpClient) {
    this.inscriptionApiPath = environment.apiUrl+'tapoteur/addFidele';
   }

   private load(): void{
    this.http.get<Array<TapoteurRequestResponse>>(this.tapoteurApiPath).subscribe(resp =>{
      this.tapoteurs = resp;
    })
  }

  create(tapoteur: TapoteurRequestResponse): void {
    switch(tapoteur.rang) {
      case "Fidele": {
        this.http.post<TapoteurRequestResponse>(this.inscriptionApiPath + "/addFidele", tapoteur).subscribe(
          resp => {
            console.log('Réponse de l\'API :', resp); // affiche la réponse de l'API dans la console
            this.load();
          },
          error => {
            console.error('Erreur lors de l\'envoi de la requête :', error); // affiche l'erreur dans la console
          }
        ); 
        break;
      }
    }
  }
}
