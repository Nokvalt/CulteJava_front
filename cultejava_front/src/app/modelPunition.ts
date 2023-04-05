export class Punition{
    punition: string;

    constructor(punition?: string){
        this.punition = punition;
    }
}

export enum TypePunition{
    aucune, dactylo
}