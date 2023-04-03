import { Injectable } from '@angular/core';
import { TapoteurRequestResponse } from './modelTapoteur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  connected: TapoteurRequestResponse = null;

  constructor() { }

  getUserId(): number {
    return this.connected ? this.connected.id : null;
  }
}
