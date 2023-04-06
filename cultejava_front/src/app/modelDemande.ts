export class Demande{
    id: number;
    montant: number;
    indenteurid: number;
    descriptif: string;
    statut: string;

    constructor(id?: number, indenteurid?: number, montant?: number, descriptif?: string, statut?: string){
        this.id = id;
        this.montant = montant;
        this.descriptif = descriptif;
        this.statut = statut;
        this.indenteurid = indenteurid;
    }

}

export enum Statut{
    enAttente, 
    refusé
}