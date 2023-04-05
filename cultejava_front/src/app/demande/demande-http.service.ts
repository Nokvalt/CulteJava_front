import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class DemandeHttpService {
    private connexionApiPath: string;
  
    constructor(private http: HttpClient) {
      this.connexionApiPath = environment.apiUrl + "/tapoteur/connexion";
    }
} 