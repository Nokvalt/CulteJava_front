import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  prenomCtrl: FormControl;
  nomCtrl: FormControl;
  dateNaissanceCtrl: FormControl;
  civiliteCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  adresseCtrl: FormControl;
  villeCtrl: FormControl;
  codePostalCtrl: FormControl;
  paysCtrl: FormControl;

  constructor(private formBuilder: FormBuilder) {

  }
  
  ngOnInit(): void {
    this.prenomCtrl = this.formBuilder.control('', Validators.required);
    this.nomCtrl = this.formBuilder.control('', Validators.required);
    this.dateNaissanceCtrl = this.formBuilder.control('', Validators.required);
    this.civiliteCtrl = this.formBuilder.control('', Validators.required);
    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.pattern('^.*[A-Z]+.*$')]);
    this.adresseCtrl = this.formBuilder.control('', Validators.required);
    this.villeCtrl = this.formBuilder.control('', Validators.required);
    this.codePostalCtrl = this.formBuilder.control('', Validators.required);
    this.paysCtrl = this.formBuilder.control('', Validators.required);

    this.inscriptionForm = this.formBuilder.group({
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      dateNaissance: this.dateNaissanceCtrl,
      civilite: this.civiliteCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl,
      adresse: this.adresseCtrl,
      ville: this.villeCtrl,
      codePostal: this.codePostalCtrl,
      pays: this.paysCtrl,
    });
  }

  inscription() {
    console.log("Inscription");
    console.log(this.inscriptionForm.value)
  }

}
