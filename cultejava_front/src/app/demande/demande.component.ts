import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Demande } from '../modelDemande';
import { DemandeHttpService } from './demande-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent {
  demandeForm: Demande = null;

  constructor(private demandeService: DemandeHttpService, private loginService: LoginService, private router: Router) {
    if(this.loginService.connected == null){
      this.router.navigate([""]);
    }
  }

  list(): Array<Demande> {
    return this.demandeService.findAll();
  }
 
  add(): void {
    this.demandeForm = new Demande();
  }

  edit(id: number): void {
    this.demandeService.findById(id).subscribe((resp: Demande) => {
      this.demandeForm = resp;
    });
  }

  remove(id: number): void {
    this.demandeService.remove(id);
  }

  save(): void {
    if(this.demandeForm.id) {
      this.demandeService.update(this.demandeForm);
    } else {
      this.demandeService.create(this.demandeForm);
    }

    this.cancel();
  }

  cancel(): void {
    this.demandeForm = null;
  }

  connected(): TapoteurRequestResponse{
    return this.loginService.connected;
  }

  listStatut(): any{
    return Object.keys(Demande).filter((v) => isNaN(Number(v)));
  } 

}
