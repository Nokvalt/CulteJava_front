import { Component } from '@angular/core';
import { UserService, UserEditRequest,} from 'src/app/user.service';
import { LoginService } from 'src/app/login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {

  tapoteurForm: TapoteurRequestResponse = null;

  constructor(private userService: UserService, private loginService: LoginService) {}

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