import { Cours } from "./cours";
import { Quiz } from "./quiz";
import { User } from "./user";

export class Note {
    note_id!: number;
    note_description!: string;
    note_val!: number;
    quiz!: Quiz;
    user!: User;
    cours!: Cours;
}