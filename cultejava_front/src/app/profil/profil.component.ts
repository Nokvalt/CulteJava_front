import { Component, OnInit } from '@angular/core';
import { UserService, UserEditRequest,} from 'src/app/user.service';
import { LoginService } from 'src/app/login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  tapoteurForm: TapoteurRequestResponse = null;


  constructor(private userService: UserService, private loginService: LoginService, router: Router) {
    if(loginService.getConnected() == null){
      router.navigate([""]);
    }
  }

  ngOnInit(): void {
    this.tapoteurForm = this.loginService.getConnected();
  }


  initialLogin: string;
  initialPassword: string;
  initialNom: string;
  initialPrenom: string;
  initialAdresse: {
  numero: string;
  voie: string;
  cp: string;
  ville: string;
  pays: string;
};

  editingLogin: boolean = false;
  editingPassword: boolean = false;
  editingNom: boolean = false;
  editingPrenom: boolean = false;
  editingAdresse: boolean = false;




  //---------------------------------------------------------------------------------------

  //MODIFICATION LOGIN
  
  LoginEdit_On() {
    this.initialLogin = this.tapoteurForm.login;
    this.editingLogin = true;
  }

  LoginEdit_Off() {
    this.editingLogin = false;
  }

  validerLoginEdit() {
    this.editUserLogin();
    this.editingLogin = false;
  }
  
  annulerLoginEdit() {
    this.tapoteurForm.login = this.initialLogin;
    this.editingLogin = false;
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



//--------------------------------------------------------------------------------------------------------------------

  //MODIFICATION PASSWORD

  PasswordEdit_On() {
    this.initialPassword = this.tapoteurForm.password;
    this.editingPassword = true;
  }

  PasswordEdit_Off() {
    this.editingPassword = false;
  }


  validerPasswordEdit() {
    this.editUserPassword();
    this.editingPassword = false;
  }
  
  annulerPasswordEdit() {
    this.tapoteurForm.password = this.initialPassword;
    this.editingPassword = false;
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



//-------------------------------------------------------------------------------------------------------------

  //MODIFICATION NOM

  NomEdit_On() {
    this.initialNom = this.tapoteurForm.nom;
    this.editingNom = true;
  }

  NomEdit_Off() {
    this.editingNom = false;
  }

  validerNomEdit() {
    this.editUserNom();
    this.editingNom = false;
  }
  
  annulerNomEdit() {
    this.tapoteurForm.nom = this.initialNom;
    this.editingNom = false;
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





  //MODIFICATION PRENOM

  PrenomEdit_On() {
    this.initialPrenom = this.tapoteurForm.prenom;
    this.editingPrenom = true;
  }

  PrenomEdit_Off() {
    this.editingPrenom = false;
  }

  validerPrenomEdit() {
    this.editUserPrenom();
    this.editingPrenom = false;
  }
  
  annulerPrenomEdit() {
    this.tapoteurForm.prenom = this.initialPrenom;
    this.editingPrenom = false;
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





  // MODIFICATION IMAGE DE PROFIL

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





  // MODIFICATION ADRESSE

  AdresseEdit_On() {
    this.initialAdresse = {
      numero: this.tapoteurForm.numero,
      voie: this.tapoteurForm.voie,
      cp: this.tapoteurForm.cp,
      ville: this.tapoteurForm.ville,
      pays: this.tapoteurForm.pays,
    };
    this.editingAdresse = true;
  }

  AdresseEdit_Off() {
    this.editingAdresse = false;
  }

  validerAdresseEdit() {
    this.editUserAdresse();
    this.editingAdresse = false;
  }
  
  annulerAdresseEdit() {
    this.tapoteurForm.numero = this.initialAdresse.numero;
    this.tapoteurForm.voie = this.initialAdresse.voie;
    this.tapoteurForm.cp = this.initialAdresse.cp;
    this.tapoteurForm.ville = this.initialAdresse.ville;
    this.tapoteurForm.pays = this.initialAdresse.pays;
    this.editingAdresse = false;
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