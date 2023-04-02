import { TapoteurRequestResponse } from "./modelTapoteur";

export class Don{
    id: number;
    tapoteur : TapoteurRequestResponse;
    montant: number;
    date: Date;

    constructor(id?: number, tapoteur?: TapoteurRequestResponse, montant?: number, date?: Date){
        this.id = id;
        this.tapoteur = tapoteur;
        this.montant = montant;
        this.date = date;
    }
}