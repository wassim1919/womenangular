import { Question } from "./question";
import { User } from "./user";

export class Reponse {
    reponse_id!: number;
    user_answer!: string;
    user!: User;
    question!: Question;
}