export class Don{
    id: number;
    montant: number;
    dateDon: string;
    tapoteurId : number;
    tapoteurNom : string;
    numCarte: string;
	moisExp: string;
	anneeExp: string;
	cvv: string;

    constructor(id?: number, montant?: number, dateDon?: string, tapoteurId?: number, tapoteurNom?: string, numCarte?: string, moisExp?: string, anneeExp?: string, cvv?: string){
        this.id = id;
        this.montant = montant;
        this.dateDon = dateDon;
        this.tapoteurId = tapoteurId;
        this.tapoteurNom = tapoteurNom;
        this.numCarte = numCarte;
        this.moisExp = moisExp;
        this.anneeExp = anneeExp;
        this.cvv = cvv;
    }
}