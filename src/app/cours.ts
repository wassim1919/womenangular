import { Sujet } from "./sujet";

export class Cours {
    cours_id!: number;
    cours_nom!: string;
    cours_description!: string;
    enr_nbr!: number;
    cours_status!: boolean;
    sujet!: Sujet;
}