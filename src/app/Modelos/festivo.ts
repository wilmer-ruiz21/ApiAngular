import { Festivo } from "./festivo";

export class Festivo{

    public id: number;
    public nombre: String;
    public dia: number;
    public mes: number;
    public diapascua: number;

    constructor(
        id: number,
        nombre: string,
        dia: number,
        mes: number,
        diapascua: number;
       

    ) {
        this.id = id;
        this.nombre = nombre;
        this.dia = dia;
       this.mes = mes;
       this.diapascua = diapascua;
     }

}