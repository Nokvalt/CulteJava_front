import { Adresse } from "./modelAdresse";
import { Demande } from "./modelDemande";

export class Tapoteur{
    id: number;
    nom: string;
    prenom: string;
    adresse: Adresse;
    dateAdhesion: Date;
    login: string;
    password: string;
    sommeDon: number;
    imageProfil: string;

    constructor(id?: number, nom?: string, prenom?: string, adresse?: Adresse, dateAdhesion?: Date, login?: string, password?: string, sommeDon?: number, imageProfil?: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateAdhesion = dateAdhesion;
        this.login = login;
        this.password = password;
        this.sommeDon = sommeDon;
        this.imageProfil = imageProfil;
    }
}


export class Fidele extends Tapoteur{
    //inscriptions: Array<Evenement>;

    constructor(id?: number, nom?: string, prenom?: string, adresse?: Adresse, dateAdhesion?: Date, login?: string, password?: string, sommeDon?: number, imageProfil?: string){//, inscriptions?: Array<Evenement>){
        super(id, nom, prenom, adresse, dateAdhesion, login, password, sommeDon, imageProfil);
        //this.inscriptions = inscriptions;
    }
}


export class Compileur extends Tapoteur{
    constructor(id?: number, nom?: string, prenom?: string, adresse?: Adresse, dateAdhesion?: Date, login?: string, password?: string, sommeDon?: number, imageProfil?: string){
        super(id, nom, prenom, adresse, dateAdhesion, login, password, sommeDon, imageProfil);
    }
}


export class Indenteur extends Tapoteur{
    demande: Demande;

    constructor(id?: number, nom?: string, prenom?: string, adresse?: Adresse, dateAdhesion?: Date, login?: string, password?: string, sommeDon?: number, imageProfil?: string, demande?: Demande){
        super(id, nom, prenom, adresse, dateAdhesion, login, password, sommeDon, imageProfil);
        this.demande = demande;
    }
}

export class GrandDev extends Tapoteur{
    colPull: string;

    constructor(id?: number, nom?: string, prenom?: string, adresse?: Adresse, dateAdhesion?: Date, login?: string, password?: string, sommeDon?: number, imageProfil?: string, colPull?: string){
        super(id, nom, prenom, adresse, dateAdhesion, login, password, sommeDon, imageProfil);
        this.colPull = colPull;
    }

}


