import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface UserEditRequest {

  attribut: string;
  value: string;
  adresse: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserApiPath: string;

  constructor(private http: HttpClient) { }

  editUser(id: number, userRequest: UserEditRequest): Observable<any> {
    const url = `${this.UserApiPath}/editerUtilisateur/${id}`;
    return this.http.put(url, userRequest);
  }
}
