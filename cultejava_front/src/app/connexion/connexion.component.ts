import { Component } from '@angular/core';
import { Connexion } from '../modelConnexion';
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
  connexionForm: Connexion;
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

    this.connexionForm = this.userForm.value;

    this.connexionService.findByLogin(this.connexionForm).subscribe(resp => {
      this.loginService.connected = resp;
      switch (this.loginService.connected.punition){
        case "aucune":{
          this.router.navigate(['/accueil']);
          break;
        }
        case "dactylo":{
          this.router.navigate(['/punitionDactylo']);
          break;
        }
      }
      
      this.loginService.setConnected(resp);
      this.router.navigate(['/accueil']);
    }, error => {
      if(error.status == 400 || error.status == 404){
        this.error = true;
      }
    });
    
      
  }

  inscription():void{
    this.router.navigate(['/inscription']);
  }
}
