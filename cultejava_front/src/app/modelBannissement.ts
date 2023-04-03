export class BannissementRequest{
    id: number;
    dateBannissement: string;
	motif: string;
    tapoteurId: number;
	//infoBanquaires: string;

    constructor(id?: number, dateBannissement?: string, motif?: string, tapoteurId?: number){
        this.id = id;
        this.dateBannissement = dateBannissement;
        this.motif = motif;
        this.tapoteurId = tapoteurId;
    }
}