import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Demande } from "../modelDemande";
import { Observable } from "rxjs/internal/Observable";
import { LoginService } from "../login.service";
import { TapoteurRequestResponse } from "../modelTapoteur";

@Injectable({
    providedIn: 'root'
  })
  export class DemandeHttpService {
    private connexionApiPath: string;
  
    demandes: Array<Demande> = new Array<Demande>(); 
    private demandeApiPath: string; 
  
    constructor(private http: HttpClient, private loginService: LoginService) {
      this.demandeApiPath = environment.apiUrl + "/demande"; // chemin de l'api 8080
      this.load();
    }
  
    findAll(): Array<Demande> {
      return this.demandes;
    }
  
    findById(id: number): Observable<Demande> {
      return this.http.get<Demande>(this.demandeApiPath + "/" + id);
    }
  
    create(demande: Demande): void {
    
      this.http.post<Demande>(this.demandeApiPath, demande).subscribe(resp => {
        this.load();
      });
    }
  
    update(demande: Demande): void {
      this.http.put<Demande>(this.demandeApiPath + "/" +  demande.id, demande).subscribe(resp => {
        this.load();
      });
    }
  
    remove(id: number): void { 
      this.http.delete<boolean>(this.demandeApiPath + "/" + id).subscribe(resp => {
        this.load();
      });
    }

    private load(): void {
        this.http.get<Array<Demande>>(this.demandeApiPath).subscribe(resp => {
        this.demandes = resp;
        });
    } 

    connected():TapoteurRequestResponse{
        return this.loginService.connected;
      }
  
}