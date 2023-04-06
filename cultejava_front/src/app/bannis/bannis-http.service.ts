import { Injectable } from '@angular/core';
import { Bannis } from '../modelBannis';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannisHttpService {
  bannis: Array<Bannis>;

  private bannisApiPath: string;

  constructor(private http: HttpClient) {
    this.bannisApiPath = environment.apiUrl + "/bannis";
    this.load();
  }

  load(): void{
    this.http.get<Array<Bannis>>(this.bannisApiPath).subscribe(resp =>{
      this.bannis = resp;
    })
  }

  findAll(): Array<Bannis>{
  return this.bannis;
  }

}
