export class Adresse{
    id: number;
    numero: string;
    voie: string;
    ville: string;
    cp: string;
    pays: string;

    constructor(id?: number, numero?: string, voie?: string, ville?: string, cp?: string, pays?: string){
        this.id = id;
        this.numero = numero;
        this.voie = voie;
        this.ville = ville;
        this.cp = cp;
        this.pays = pays;
    }
}