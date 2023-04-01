import { Injectable } from '@angular/core';
import { Connexion } from '../modelConnexion';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TapoteurHttpService } from '../tapoteur/tapoteur-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Injectable({
  providedIn: 'root'
})
export class AccueilHttpService {
  private connexionApiPath: string;

  tapoteur: TapoteurRequestResponse;

  constructor(private http: HttpClient) {
    this.connexionApiPath = environment.apiUrl + "/tapoteur/connexion";
  }

  findByLogin(tapoteur: Connexion): Observable<TapoteurRequestResponse>{
    return this.http.post<TapoteurRequestResponse>(this.connexionApiPath, tapoteur);
  }
}
