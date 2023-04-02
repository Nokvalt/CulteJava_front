export class Evenement {
    id: number;
    nom: string;
    dateEvent: string;
    lieu: string;
    nomActivite : string;


    constructor(id?: number, nom?: string,dateEvent?: string, lieu?:string, nomActivite?:string) {
        this.id = id;
        this.nom = nom;
        this.dateEvent= dateEvent;
        this.lieu = lieu;
        this.nomActivite = nomActivite;
    }
}

export enum Activite{
    feteCreation, naissanceProphete, fetePopups, rassemblement, pelerinnage, promotion, banissement
}
