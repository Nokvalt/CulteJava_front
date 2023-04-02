import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionHttpService } from '../inscription/inscription-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  prenomCtrl: FormControl;
  nomCtrl: FormControl;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  adresseCtrl: FormControl;

  constructor(private formBuilder: FormBuilder, private inscriptionService: InscriptionHttpService) {}

  ngOnInit(): void {
    this.prenomCtrl = this.formBuilder.control('', Validators.required);
    this.nomCtrl = this.formBuilder.control('', Validators.required);
    this.loginCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.adresseCtrl = new FormControl('', Validators.required);

    this.inscriptionForm = this.formBuilder.group({
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl,
      adresse: this.adresseCtrl,
    });
  }

  inscription(): void {
    const tapoteur: TapoteurRequestResponse = this.inscriptionForm.value;
    console.log('Données du formulaire :', tapoteur);
    this.inscriptionService.create(tapoteur);
  }
  }
