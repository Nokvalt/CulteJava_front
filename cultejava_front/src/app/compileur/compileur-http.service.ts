/*import { Injectable } from '@angular/core';
import { CompileurRequestResponse } from '../modelCompileur';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompileurHttpService {
  compileurs: Array<CompileurRequestResponse>;

  private compileurApiPath: string;

  constructor(private http: HttpClient) {
    this.compileurApiPath = environment.apiUrl + "/compileur";
    this.load();
  }

  private load(): void{
    this.http.get<Array<CompileurRequestResponse>>(this.compileurApiPath).subscribe(resp =>{
      this.compileurs = resp;
    })
  }

  findAll(): Array<CompileurRequestResponse>{
    return this.compileurs;
  }

  findById(id: number): Observable<CompileurRequestResponse>{
    return this.http.get<CompileurRequestResponse>(this.compileurApiPath + "/" + id); 
  }

  remove(id: number): void {
    this.http.delete<boolean>(this.compileurApiPath + "/" + id).subscribe(resp => {
      this.load();
    });
  }

  create(compileur: CompileurRequestResponse): void {
    this.http.post<CompileurRequestResponse>(this.compileurApiPath + "/addCompileur", compileur).subscribe(resp => {this.load();});
  }

  update(compileur: CompileurRequestResponse): void {
    this.http.put<CompileurRequestResponse>(this.compileurApiPath + "/editCompileur/" + compileur.id, compileur).subscribe(resp => {this.load();});
  }
}*/
