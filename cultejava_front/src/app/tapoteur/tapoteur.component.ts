import { Component } from '@angular/core';
import { Tapoteur } from '../modelTapoteur';
import { TapoteurHttpService } from './tapoteur-http.service';

@Component({
  selector: 'app-tapoteur',
  templateUrl: './tapoteur.component.html',
  styleUrls: ['./tapoteur.component.scss']
})
export class TapoteurComponent {
  
  constructor(private tapoteurService: TapoteurHttpService){}

  listTapoteurs(): Array<Tapoteur>{
    return this.tapoteurService.findAll();
  }
}
