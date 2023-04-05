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

  error: boolean;

  constructor(private http: HttpClient) {
    this.inscriptionApiPath = environment.apiUrl+'/tapoteur';
   }

   private load(): void{
    this.http.get<Array<TapoteurRequestResponse>>(this.tapoteurApiPath).subscribe(resp =>{
      this.tapoteurs = resp;
    })
  }

  create(tapoteur: TapoteurRequestResponse): boolean {
    this.http.post<TapoteurRequestResponse>(this.inscriptionApiPath + "/addFidele", tapoteur).subscribe(
          resp => {
            this.load();
          },
          error => {
            if(error.status == 400){
              this.error = true;
            }
          }
        ); 
      return this.error;
    }
  }
