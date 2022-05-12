import { Quiz } from "./quiz";
import {Reponse} from "./reponse"

export class Question {
    q_id!: number;
    q_description!: string;
    quiz!: Quiz;
     r_true!: string;
	 r_false1!: string;
	 r_false2!:string;
}