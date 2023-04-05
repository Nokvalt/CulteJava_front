import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionHttpService } from '../inscription/inscription-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  inscriptionReussie: boolean = false;

  inscriptionForm: FormGroup;
  prenomCtrl: FormControl;
  nomCtrl: FormControl;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  adresseCtrl: FormControl;
  numeroCtrl: FormControl;
  voieCtrl: FormControl;
  cpCtrl: FormControl;
  villeCtrl: FormControl;
  paysCtrl: FormControl;


  constructor(private formBuilder: FormBuilder, private inscriptionService: InscriptionHttpService, private router: Router) {}

  ngOnInit(): void {
    this.prenomCtrl = this.formBuilder.control('', Validators.required);
    this.nomCtrl = this.formBuilder.control('', Validators.required);
    this.loginCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.voieCtrl = new FormControl('', Validators.required);
    this.numeroCtrl = new FormControl('', Validators.required);
    this.villeCtrl = new FormControl('', Validators.required);
    this.cpCtrl = new FormControl('', Validators.required);
    this.paysCtrl = new FormControl('', Validators.required);

    this.inscriptionForm = this.formBuilder.group({
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl,
      numero: this.numeroCtrl,
      voie: this.voieCtrl,
      ville: this.villeCtrl,
      cp: this.cpCtrl,
      pays: this.paysCtrl
    });
  }

  inscription(): void {
    const tapoteur: TapoteurRequestResponse = this.inscriptionForm.value;
    tapoteur.rang = "Fidele";
    tapoteur.dateAdhesion = new Date().toJSON().slice(0,10);
    tapoteur.imageProfil = "/assets/Photos/Default.PNG"
    console.log('Données du formulaire :', tapoteur);

    if (this.inscriptionService.create(tapoteur)){ //VERIFIER SI YA PAS EU D'ERREURS
      this.inscriptionReussie = false;
    }

    this.inscriptionReussie = true;
  }

  retour(){
    this.router.navigate(['']);
  }
  }
