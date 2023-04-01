

export class Evenement {
    id: number;
    nom: string;
    date: string;
    lieu: string;
    nomactivite : string;


    constructor(id?: number, nom?: string,date?: string, lieu?:string, nomactivite?:string) {
        this.id = id;
        this.nom = nom;
        this.date= date;
        this.lieu = lieu;
        this.nomactivite = nomactivite;
    }

}
