import { Injectable } from '@angular/core';
import { TapoteurRequestResponse } from './modelTapoteur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private connected: TapoteurRequestResponse = null;
  private id: number;

  constructor() { }

  setConnected(userConnected : TapoteurRequestResponse) {
    this.connected = userConnected;
    sessionStorage.setItem("connected", JSON.stringify(this.connected));
  }

  getConnected() : TapoteurRequestResponse {
    if(this.connected) {
      return this.connected;
    } else if(sessionStorage.getItem("connected")){
      return JSON.parse(sessionStorage.getItem("connected"));
    }

    return null;
  }

  setId(id: number){
    this.id = id;
  }

  getId(){
    return this.id;
  }

  getUserId(): number {
    return this. getConnected() ? this.getConnected().id : null;
  }
}
