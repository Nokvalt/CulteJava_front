import { Component } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { TapoteurHttpService } from './tapoteur-http.service';

@Component({
  selector: 'app-tapoteur',
  templateUrl: './tapoteur.component.html',
  styleUrls: ['./tapoteur.component.scss']
})
export class TapoteurComponent {
  tapoteurForm: TapoteurRequestResponse = null;

  constructor(private tapoteurService: TapoteurHttpService){}

  listTapoteurs(): Array<TapoteurRequestResponse>{
    return this.tapoteurService.findAll();
  }

  add(): void {
    this.tapoteurForm = new TapoteurRequestResponse();
  }

  edit(id: number): void{
    this.tapoteurService.findById(id).subscribe(resp => {
      this.tapoteurForm = resp;
    })
  }

  remove(id: number): void{
    this.tapoteurService.remove(id);
  }

  save(): void {
    if(this.tapoteurForm.id) {
      this.tapoteurService.update(this.tapoteurForm);
    } else {
      this.tapoteurService.create(this.tapoteurForm);
    }

    this.cancel();
  }

  cancel():void{
    this.tapoteurForm = null;
  }
}
