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
<<<<<<< HEAD
    allDons: number;
    argentVole: number;
    punition: string;

    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string, rang?: string, allDons?: number, argentVole?: number){
=======
    punition: string;

    constructor(id?: number, nom?: string, prenom?: string, numero?: string, voie?: string, cp?: string, ville?: string, pays?: string, dateAdhesion?: string, login?: string, password?: string, sommeDon?: number, imageProfil?: string, rang?: string, punition?: string){
>>>>>>> punitions
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
        this.argentVole = argentVole;
        this.allDons = allDons;
        this.punition = punition;
    }
}