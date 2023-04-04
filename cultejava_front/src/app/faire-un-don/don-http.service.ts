import { Injectable } from '@angular/core';
import { Don } from '../modelDon';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonHttpService {
  private donApiPath: string;
  dons:Array<Don>;

  constructor(private http: HttpClient) {
    this.donApiPath = environment.apiUrl + "/don";
  }

  create(don: Don):void{
    this.http.post<Don>(this.donApiPath + "/addDon", don).subscribe(resp => console.log(resp));
  }
}
