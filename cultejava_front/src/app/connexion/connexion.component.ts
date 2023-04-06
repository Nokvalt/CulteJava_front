import { Component } from '@angular/core';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connexion } from '../modelConnexion';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConnexionHttpService } from './connexion-http.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  userForm: FormGroup;
  loginCtl : FormControl;
  passwordCtl : FormControl;

  connexionForm: Connexion = new Connexion();
  error: boolean;


  constructor(private connexionService: ConnexionHttpService, private loginService: LoginService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit() :void {
    this.loginCtl = this.formBuilder.control('', Validators.required);
    this.passwordCtl = this.formBuilder.control('', Validators.required);

    this.userForm = this.formBuilder.group({
      login: this.loginCtl,
      password: this.passwordCtl
    })
  }


  connexion(): void{
    this.error = false;

    this.connexionService.findByLogin(this.connexionForm).subscribe(resp => {
      this.loginService.setConnected(resp);
      this.router.navigate(['/accueil']);
    }, error => {
      console.log(error);
      if(error.status == 400 || error.status == 404){
        this.error = true;
      }
    });
    
      
  }

  inscription():void{
    this.router.navigate(['/inscription']);
  }
}
