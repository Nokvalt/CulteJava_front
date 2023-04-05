import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TapoteurComponent } from '../tapoteur/tapoteur.component';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilHttpService {

  constructor(private http: HttpClient){  }
  

  steal(): Observable<TapoteurRequestResponse>{
    return this.http.get<TapoteurRequestResponse>(environment.apiUrl + "/tapoteur/vider"); 
  }
}
