import { Injectable } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Connexion } from '../modelConnexion';

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {
  private connexionApiPath: string;
  connected: Boolean;
  tapoteur: TapoteurRequestResponse;

  constructor(private http: HttpClient) {
    this.connexionApiPath = environment.apiUrl + "/tapoteur/connexion";
  }

  findByLogin(tapoteur: Connexion): Observable<TapoteurRequestResponse>{
    console.log("tapoteur:" + tapoteur.login + tapoteur.password);
    return this.http.post<TapoteurRequestResponse>(this.connexionApiPath, tapoteur);
  }
}
