import { Injectable } from '@angular/core';
import { Tapoteur, TapoteurResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TapoteurHttpService {
  tapoteurs: Array<TapoteurResponse>;

  private tapoteurApiPath: string;

  constructor(private http: HttpClient) {
    this.tapoteurApiPath = environment.apiUrl + "/tapoteur";
    this.load();
  }

  private load(): void{
    this.http.get<Array<Tapoteur>>(this.tapoteurApiPath).subscribe(resp =>{
      this.tapoteurs = resp;
    })
  }

  findAll(): Array<TapoteurResponse>{
    console.log(this.tapoteurs);
    return this.tapoteurs;
  }
}
