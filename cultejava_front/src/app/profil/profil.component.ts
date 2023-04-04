import { Component, OnInit } from '@angular/core';
import { UserService, UserEditRequest,} from 'src/app/user.service';
import { LoginService } from 'src/app/login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  tapoteurForm: TapoteurRequestResponse = null;


  constructor(private userService: UserService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.tapoteurForm = this.loginService.connected;
    console.log(this.tapoteurForm)
  }

  
  LoginEdit_On() {
    const loginInput = document.getElementById('login') as HTMLInputElement;
    loginInput.readOnly = false;
  }
  

  editUserLogin() {
    const id = this.loginService.getUserId();
    const userRequest: UserEditRequest = {
      attribut: 'login',
      value: 'nouveau_login',
      adresse: ''
    };
    
    this.userService.editUser(id, userRequest).subscribe( //  .subscribe barré (déprécié), pourrait être dû à une version obsolète de la bibliothèque RxJS
      (response) => {
        console.log('Login modifié avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la modification du login', error);
      }
    );
  }





  PasswordEdit_On() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.readOnly = false;
  }

  editUserPassword() {
    const id = this.loginService.getUserId(); // getUserId pour récupérer l'ID de l'utilisateur connecté
    const userRequest: UserEditRequest = {
      attribut: 'password',
      value: 'nouveau_password',
      adresse: ''
    };
  
    this.userService.editUser(id, userRequest).subscribe(
      (response) => {
        console.log('Mot de passe modifié avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la modification du mot de passe', error);
      }
    );
  }




  NomEdit_On() {
    const nomInput = document.getElementById('nom') as HTMLInputElement;
    nomInput.readOnly = false;
  }

  editUserNom() {
    const id = this.loginService.getUserId();
    const userRequest: UserEditRequest = {
      attribut: 'nom',
      value: 'nouveau_nom',
      adresse: ''
    };
    
    this.userService.editUser(id, userRequest).subscribe(
      (response) => {
        console.log('Nom modifié avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la modification du nom', error);
      }
    );
  }




  PrenomEdit_On() {
    const prenomInput = document.getElementById('prenom') as HTMLInputElement;
    prenomInput.readOnly = false;
  }

  editUserPrenom() {
    const id = this.loginService.getUserId();
    const userRequest: UserEditRequest = {
      attribut: 'prenom',
      value: 'nouveau_prenom',
      adresse: ''
    };
    
    this.userService.editUser(id, userRequest).subscribe(
      (response) => {
        console.log('Prenom modifié avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la modification du prenom', error);
      }
    );
  }

  editUserImageProfil() {
    const id = this.loginService.getUserId();
    const userRequest: UserEditRequest = {
      attribut: 'ImageProfil',
      value: 'nouvelle_image',
      adresse: ''
    };
    
    this.userService.editUser(id, userRequest).subscribe(
      (response) => {
        console.log('Image de profil modifiée avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'image de profil', error);
      }
    );
  }






  AdresseEdit_On() {
    const numeroInput = document.getElementById('numero') as HTMLInputElement;
    const voieInput = document.getElementById('voie') as HTMLInputElement;
    const cpInput = document.getElementById('cp') as HTMLInputElement;
    const villeInput = document.getElementById('ville') as HTMLInputElement;
    const paysInput = document.getElementById('pays') as HTMLInputElement;
  
    numeroInput.readOnly = false;
    voieInput.readOnly = false;
    cpInput.readOnly = false;
    villeInput.readOnly = false;
    paysInput.readOnly = false;
  }

  editUserAdresse() {
    const id = this.loginService.getUserId();
    const userRequest: UserEditRequest = {
      attribut: 'adresse',
      value: 'nouvelle_adresse',
      adresse: ''
    };
    
    this.userService.editUser(id, userRequest).subscribe(
      (response) => {
        console.log('Adresse modifié avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'adresse', error);
      }
    );
  }
}