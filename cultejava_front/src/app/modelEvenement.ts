enum Activite {

  }

export class Evenement {
    id: number;
    nom: string;
    date: Date;
    lieu: string;
    activite : Activite;


    constructor(id?: number, nom?: string,date?: Date, lieu?:string, activite?:Activite) {
        this.id = id;
        this.nom = nom;
        this.date= date;
        this.lieu = lieu;
        this.activite = this.activite
    }

}
