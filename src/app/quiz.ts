import { Cours } from "./cours";

export class Quiz {
    quiz_id!: number;
    quiz_nom!: string;
    quiz_description!: string;
    quiz_lvl!: string;
    quiz_coef!: number;
    cours!: Cours;
}