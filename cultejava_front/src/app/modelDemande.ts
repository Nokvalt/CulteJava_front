export class Demande{
    id: number;
    montant: number;
    indenteurid: number;
    indenteurnom: string;
    indenteurprenom: string
    descriptif: string;
    statut: string;

    constructor(id?: number, indenteurid?: number, montant?: number, descriptif?: string, statut?: string, indenteurnom?: string, indenteurprenom?: string){
        this.id = id;
        this.montant = montant;
        this.descriptif = descriptif;
        this.statut = statut;
        this.indenteurid = indenteurid;
        this.indenteurnom = indenteurnom;
        this.indenteurprenom = indenteurprenom;
    }

}

export enum Statut{
    enAttente, 
    refusé
}