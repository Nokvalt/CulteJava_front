import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionHttpService } from '../inscription/inscription-http.service';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionReussie: boolean = false;
  afficherQST: boolean = false;

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

  cardNumberCtrl: FormControl;
  

  fields = [
    { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Nom' },
    { name: 'prenom', label: 'Prénom', type: 'text', placeholder: 'Prénom' },
    { name: 'login', label: 'Login', type: 'text', placeholder: 'Login' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
    { name: 'numero', label: 'Numéro', type: 'number', placeholder: 'Numéro'},
    { name: 'voie', label: 'Voie', type: 'text', placeholder: 'Voie' },
    { name: 'ville', label: 'Ville', type: 'text', placeholder: 'Ville' },
    { name: 'cp', label: 'CP', type: 'text', placeholder: 'CP' },
    { name: 'pays', label: 'Pays', type: 'text', placeholder: 'Pays' }
  ];


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

    this.cardNumberCtrl = new FormControl('', Validators.required);

    this.inscriptionForm = this.formBuilder.group({
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl,
      numero: this.numeroCtrl,
      voie: this.voieCtrl,
      ville: this.villeCtrl,
      cp: this.cpCtrl,
      pays: this.paysCtrl,
      cardNumber: this.cardNumberCtrl
    });
  }

  inscription(): void {
    const tapoteur: TapoteurRequestResponse = this.inscriptionForm.value;
    tapoteur.rang = "Fidele";
    tapoteur.dateAdhesion = new Date().toJSON().slice(0,10);
    tapoteur.imageProfil = "/assets/Photos/Default.PNG"
    console.log('Données du formulaire :', tapoteur);


    if (this.inscriptionService.create(tapoteur)){ 
      this.inscriptionReussie = false;
    }

    this.inscriptionReussie = true;
  }

  retour(){
    this.router.navigate(['']);
  }

  afficherQuestionR(): void {
    this.afficherQST = true;
  }


 
  }
