import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Don } from '../modelDon';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Injectable({
  providedIn: 'root'
})
export class DonHttpService {
  dons: Array<Don>;

  private donApiPath: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.donApiPath = environment.apiUrl + "/don";
    this.load();
  }

  load(): void{
    this.http.get<Array<Don>>(this.donApiPath + "/by-tapoteur/" + this.connected().id).subscribe(resp =>{
      this.dons = resp;
      console.log(resp);
    })
  }

  findAll(): Array<Don>{
    return this.dons;
  }

  connected(): TapoteurRequestResponse{
    return this.loginService.getConnected();
  }
}
