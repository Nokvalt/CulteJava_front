export class Demande{
    id: number;
    montant: number;
    descriptif: string;
    statut: Statut;

    constructor(id?: number, montant?: number, descriptif?: string, statut?: Statut){
        this.id = id;
        this.montant = montant;
        this.descriptif = descriptif;
        this.statut = statut;
    }

}

enum Statut{
    enAttente, 
    refusé
}