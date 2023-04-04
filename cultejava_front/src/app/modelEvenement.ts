export class Evenement {
    id: number;
    nom: string;
    dateEvent: string;
    lieu: string;
    nomActivite : string;
    inscrit: boolean;


    constructor(id?: number, nom?: string,dateEvent?: string, lieu?:string, nomActivite?:string, inscrit?: boolean) {
        this.id = id;
        this.nom = nom;
        this.dateEvent= dateEvent;
        this.lieu = lieu;
        this.nomActivite = nomActivite;
        this.inscrit = inscrit;
    }
}

export enum Activite{
    feteCreation, naissanceProphete, fetePopups, rassemblement, pelerinnage, promotion, banissement
}
