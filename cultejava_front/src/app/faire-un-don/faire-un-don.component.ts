import { Component } from '@angular/core';
import { DonHttpService } from './don-http.service';
import { Don } from '../modelDon';

@Component({
  selector: 'faire-un-don',
  templateUrl: './faire-un-don.component.html',
  styleUrls: ['./faire-un-don.component.scss']
})
export class FaireUnDonComponent {
  donForm: Don;

  constructor(private donService: DonHttpService){
    this.donForm = new Don();
  }

  makeDonation():void{
    this.donForm.dateDon = new Date().toJSON().slice(0,10);
    this.donService.create(this.donForm);
    this.donForm = null;
  }
}
