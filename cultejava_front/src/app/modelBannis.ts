export class Bannis{
    id: number;
	nom: string;
	prenom: string;
    dateBannissement: string;
	motif: string;
	infoBanquaires: string = null;
    tapoteurId: number;

    constructor(id?: number, nom?: string, prenom?: string, dateBanissement?: string, motif?: string, tapoteurId?: number){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateBannissement = dateBanissement;
        this.motif = motif;
        this.tapoteurId = tapoteurId;
    }
}