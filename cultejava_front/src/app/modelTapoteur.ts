import { Demande } from "./modelDemande";

export class TapoteurRequestResponse{
    id: number;
    nom: string;
    prenom: string;
    numero: string;
    voie: string;
    cp: string;
    ville: string;
    pays: string;
    dateAdhesion: string; // "2023-03-31"
    login: string;
    password: string;
    sommeDon: number;
    imageProfil: string;
    rang: string;

    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string, rang?: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.numero = numero;
        this.voie = voie;
        this.cp = cp;
        this.ville = ville;
        this.pays = pays;
        this.dateAdhesion = dateAdhesion;
        this.login = login;
        this.password = password;
        this.sommeDon = sommeDon;
        this.imageProfil = imageProfil;
        this.rang = rang;
    }
}


export class FideleRequest extends TapoteurRequestResponse{
    //inscriptions: Array<Evenement>;

    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string){//, inscriptions?: Array<Evenement>){
        super(id, nom, prenom, numero, voie, cp, ville, pays, dateAdhesion, login, password, sommeDon, imageProfil);
        //this.inscriptions = inscriptions;
    }
}


export class CompileurRequest extends TapoteurRequestResponse{
    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string){
        super(id, nom, prenom, numero, voie, cp, ville, pays, dateAdhesion, login, password, sommeDon, imageProfil);
    }
}


export class IndenteurRequest extends TapoteurRequestResponse{
    demande: Demande;

    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string, demande?: Demande){
        super(id, nom, prenom, numero, voie, cp, ville, pays, dateAdhesion, login, password, sommeDon, imageProfil);
        this.demande = demande;
    }
}

export class GrandDevRequest extends TapoteurRequestResponse{
    sommeDons: number;
    argentVole: number;

    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string, colPull?: string, sommeDons?: number, argentVole?: number){
        super(id, nom, prenom, numero, voie, cp, ville, pays, dateAdhesion, login, password, sommeDon, imageProfil);
        this.sommeDons = sommeDons;
        this.argentVole = argentVole;
    }

}


