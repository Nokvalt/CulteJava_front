import { Component } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connexion } from '../modelConnexion';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConnexionHttpService } from './connexion-http.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  userForm: FormGroup;
  loginCtl : FormControl;
  passwordCtl : FormControl;


  connexionForm: Connexion = new Connexion();
  connected: TapoteurRequestResponse;
  wrongPassword: boolean = false;

  constructor(private connexionService: ConnexionHttpService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit() :void {
    this.loginCtl = this.formBuilder.control('', Validators.required);
    this.passwordCtl = this.formBuilder.control('', Validators.required);

    this.userForm = this.formBuilder.group({
      login: this.loginCtl,
      password: this.passwordCtl
    })
  }


  connexion(): void{
    console.log ("test" + this.connexionForm.login + this.connexionForm.password);
    this.connexionService.findByLogin(this.connexionForm).subscribe(resp => {
      this.connected = resp;})
    
      console.log(this.connected);

      if (this.connected != null){
        this.router.navigate(['/accueil']);
      }
  }

  inscription():void{
    this.router.navigate(['/inscription']);
  }
}
